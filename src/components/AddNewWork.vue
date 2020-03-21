<template>
    <b-modal @show="resetModal" id="modalNewWork" size="xl" title="Добавить работу в портфолио">
        <form ref="form" style="display:flex;flex-wrap:wrap;">
            <b-form-group
                label="Название"
                label-for="name-input"
                invalid-feedback="Название Обязательное"
                class="w-100 p-2"
            >
                <b-form-input
                    id="name-input"
                    required
                    v-model="name"
                ></b-form-input>

            </b-form-group>
            <b-form-group
                label="Описание"
                label-for="description-input"
                invalid-feedback="Описание обязательное"
                class="w-100 p-2"
            >
                <b-form-textarea
                    id="description-input"
                    required
                    v-model="description"
                ></b-form-textarea>
            </b-form-group>
            <b-form-group
                invalid-feedback="Выберите тип работы"
                class="modal-work-type w-100 p-2"
            >
                <b-form-radio name="type-radio" v-model="type" value="HTML">Верстка</b-form-radio>
                <b-form-radio name="type-radio" v-model="type" value="VueJS">VueJS</b-form-radio>
                <b-form-radio name="type-radio" v-model="type" value="Layout">Макеты</b-form-radio>
            </b-form-group>
            <b-form-group class="modal-work-tech w-100">
                <tags-input element-id="tags"
                    v-model="tags"
                    placeholder="Технология"
                    :typeahead="true"></tags-input>
            </b-form-group> 
            <b-form-group
                label="Репозиторий"
                label-for="repository-input"
                class="w-100 p-2"
            >
                <b-form-input
                    id="repository-input"
                    v-model="repository"
                ></b-form-input>

            </b-form-group>
            <b-form-group
                label="Внешняя ссылка"
                label-for="link-input"
                class="w-100 p-2"
            >
                <b-form-input
                    id="link-input"
                    v-model="link"
                ></b-form-input>

            </b-form-group>
            <b-form-group
                label="Дата"
                label-for="date-input"
                invalid-feedback="Дата - обязательное поле"
                class="w-100 p-2"
            >
                <b-form-input
                    id="date-input"
                    required
                    v-model="date"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                label="Загрузить"
                label-for="file-small"
                label-cols-sm="2" 
                label-size="sm"
                invalid-feedback="Нету изображения"
                class="w-100 p-2"
            >
                <b-form-file
                    size="sm"
                    placeholder="Выберите файл..."
                    drop-placeholder="Drop file here..."
                    @change="onFileChange"
                    multiple 
                ></b-form-file>
                <div class="selected-images">
                    <img v-for="img in imageSrc" :key="img" :src="img" alt="">
                </div>
            </b-form-group>
        </form>
        <template v-slot:modal-footer="{ cancel }">
            <b-button size="sm" variant="success" @click="createWork">
                Добавить
            </b-button>
            <b-button size="sm" variant="danger" @click="cancel()">
                Отмена
            </b-button>
        </template>
    </b-modal>
</template>

<script>
import VoerroTagsInput from '@voerro/vue-tagsinput';
export default {
    components: { "tags-input": VoerroTagsInput },
    data () {
        return {
            id:null,
            name:'',
            description:'',
            type:'',
            imageSrc:[],
            image:[],
            tags: [],
            date:'',
            repository:'',
            link:''
        }
    },
    computed: {
        loading () {
            return this.$store.getters.loading
        }
    },
    methods: {
        createWork () {
            // this.id = (+new Date)
            const work = {
                id:this.id,
                name:this.name,
                description:this.description,
                type:this.type,
                imageSrc:this.imageSrc,
                image:this.image,
                tags:this.tags,
                date:this.date,
                repository:this.repository,
                link:this.link,
            }
            this.$store.dispatch('createWork', work)
                .then(() => this.$bvModal.hide('modalNewWork'))
                .catch(() => {})
        },
        resetModal () {
            this.id = null,
            this.name = '',
            this.description = '',
            this.type = '',
            this.imageSrc = [],
            this.image = [],
            this.tags = [],
            this.date = '',
            this.repository = '',
            this.link = ''
        },
        onFileChange (e) {
            const files = e.target.files
            files.forEach((item,index) => {
                let reader = new FileReader()
                reader.onload = item => {
                    this.imageSrc.push(reader.result) 
                } 
                reader.readAsDataURL(item)
                this.image.push(item)
            })
        }
    }
}
</script>

<style>

</style>