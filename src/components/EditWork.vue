<template>
    <b-modal @show="loadWork" :id="work.id" size="xl" title="Редактировать работу">
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
                label="Тип"
                invalid-feedback="Выберите тип работы"
                class="modal-work-type w-50 p-2"
            >
                <b-form-radio name="type-radio" v-model="type" value="HTML">Верстка</b-form-radio>
                <b-form-radio name="type-radio" v-model="type" value="VueJS">VueJS</b-form-radio>
                <b-form-radio name="type-radio" v-model="type" value="Layout">Макеты</b-form-radio>
            </b-form-group>
            <b-form-group
                label-for="file-small"
                label-cols-sm="2" 
                label-size="sm"
                invalid-feedback="Нету изображения"
                class="w-50 p-2"
            >
                <b-form-file
                    size="sm"
                    placeholder="Выберите файл..."
                    drop-placeholder="Drop file here..."
                    
                    multiple 
                ></b-form-file>
                <div class="selected-images">
                    <img v-for="img in imageSrc" :key="img" :src="img" alt="">
                </div>
            </b-form-group>
            <tags-input element-id="tags"
                v-model="tags"
                placeholder="Технология"
                :typeahead="true"></tags-input>
            <b-form-group
                label="Репозиторий"
                label-for="repository-input"
                class="w-50 p-2"
            >
                <b-form-input
                    id="repository-input"
                    v-model="repository"
                ></b-form-input>

            </b-form-group>
            <b-form-group
                label="Внешняя ссылка"
                label-for="link-input"
                class="w-50 p-2"
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
                class="w-50 p-2"
            >
                <b-form-input
                    id="date-input"
                    required
                    v-model="date"
                ></b-form-input>
            </b-form-group>
        </form>
        <template v-slot:modal-footer="{ cancel }">
            <b-button size="sm" variant="success" @click="onSave">
                Обновить
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
    props: [ 'work' ],
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
    methods:{
        loadWork () {
            this.id = this.work.id,
            this.name = this.work.name,
            this.description = this.work.description,
            this.type = this.work.type,
            this.imageSrc = this.work.imageSrc,
            this.tags = this.work.tags,
            this.date = this.work.date,
            this.repository = this.work.repository,
            this.link = this.work.link
        },
        onSave () {
            const updatedWork = {
                id:this.id,
                name:this.name,
                description:this.description,
                type:this.type,
                imageSrc: this.imageSrc,
                tags:this.tags,
                date:this.date,
                repository: this.repository,
                link: this.link,
            }
            this.$store.dispatch('updateWork', updatedWork)
                .then(() => this.$bvModal.hide(this.work.id))
                .catch(() => {})
        }
    }
}
</script>  