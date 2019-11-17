import * as fb from 'firebase'

class Work {
    constructor (name, description, type, date, repository, link, tags = [], id = null, imageSrc = '') {
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
        }
    },
    actions: {
        async createWork ({commit}, payload) {
            commit('clearError')
            commit('setLoading', true)
            let imageSrc
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
                    ''
                )
                await fb.database().ref('works').push(newWork)
                .then((data) => {
                    key = data.key
                    return key
                })
                .then(key => {
                    const filename = payload.image.name
                    const ext = filename.slice(filename.lastIndexOf('.'))
                    return fb.storage().ref('works/' + key + '.' + ext).put(payload.image)
                })
                .then(snapshot => {
                    return new Promise((resolve) => {
                        snapshot.ref.getDownloadURL().then(url => {
                            snapshot.downloadURL = url
                            resolve(snapshot)
                        })
                    })
                })
                .then((snapshot) => {
                    imageSrc = snapshot.downloadURL
                    return fb.database().ref('works').child(key).update({imageSrc: imageSrc})
                })
                .then(() => {
                    commit('setLoading', false)
                    commit('createWork', {
                        ...newWork,
                        imageSrc: imageSrc,
                        id: key
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