import fb from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

class Work {
    constructor (name, description, type, date, repository, link, tags = [], id = null, imageSrc = []) {
        this.name = name,
        this.description = description,
        this.type = type,
        this.date = date,
        this.repository = repository,
        this.link = link,
        this.tags = tags,
        this.id = id,
        this.imageSrc = imageSrc
    }
}

export default {
    state: {
        works:[]
    },
    mutations: {
        createWork (state, payload) {
            state.works.push(payload)
        },
        loadWorks (state, payload) {
            state.works = payload
        },
        updateWork (state, {id,name,description,type,imageSrc,tags,date,repository,link}) {
            const work = state.works.find(a => {
                return a.id === id
            })
            work.name = name;
            work.description = description;
            work.type = type;
            work.imageSrc = imageSrc;
            work.tags = tags;
            work.date = date;
            work.repository = repository;
            work.link = link;
        }
    },
    actions: {
        async createWork ({commit}, payload) {
            commit('clearError')
            commit('setLoading', true)
            let imageSrc = [];
            let key
            try {
                const newWork =  new Work (
                    payload.name,
                    payload.description,
                    payload.type,
                    payload.date,
                    payload.repository,
                    payload.link,
                    payload.tags,
                    key,
                    imageSrc
                )
                await fb.database().ref('works').push(newWork)
                .then((data) => {
                    key = data.key
                    return key
                })
                .then(key => {
                    payload.image.forEach((item,index) => {
                        let ext = item.name.slice(item.name.lastIndexOf('.'));
                        let itemRef = fb.storage().ref(`works/${key}/${index}${ext}`);
                        
                        itemRef.put(item).then(() => {
                            itemRef.getDownloadURL().then(url => {
                                imageSrc.push(url)
                                
                            })
                            .then(() => {
                                fb.database().ref('works').child(key).update({imageSrc: imageSrc})
                            })
                        })
                    })
                    
                })
                .then(() => {
                    commit('setLoading', false)
                    commit('createWork', {
                        ...newWork,
                        id: key,
                        imageSrc: imageSrc
                        
                    })
                })
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
        },
        async fetchWorks ({commit}) {
            commit('clearError')
            commit('setLoading', true)

            const resultWorks = []

            try {
                const fbVal = await fb.database().ref('works').once('value')
                const works = fbVal.val()
                Object.keys(works).forEach(key => {
                    const work = works[key]
                    resultWorks.push(
                        new Work (
                            work.name,
                            work.description,
                            work.type,
                            work.date,
                            work.repository,
                            work.link,
                            work.tags,
                            key,
                            work.imageSrc 
                        )
                    )
                })
                commit('loadWorks', resultWorks)
                commit('setLoading', false)
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
            }
        },
        async updateWork ({commit}, {id,name,description,type,imageSrc,tags,date,repository,link}) {
            commit('clearError')
            commit('setLoading', true)
            try {
                await fb.database().ref('works').child(id).update({name,description,type,imageSrc,tags,date,repository,link})
                commit('updateWork', {id,name,description,type,imageSrc,tags,date,repository,link})
                commit('setLoading', false)
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
        }
    },
    getters: {
        works (state) {
            return state.works
        },
        WorkById (state) {
            return WorkId => {
                return state.works.find(work => work.id === WorkId)
            }
        }
    }
}