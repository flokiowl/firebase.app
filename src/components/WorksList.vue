<template>
    <!-- <b-table responsive striped hover :items="works" :fields="fields">
        <template v-slot:cell(index)="data">
            {{ data.index + 1 }}
        </template>
        <template v-slot:cell(status)="data">
            <b-form-checkbox v-model="data.status"></b-form-checkbox>
        </template>
        <template v-slot:cell(actions)="data">
            <b-button class="table-actions">
                <v-icon name="edit"></v-icon>
            </b-button>
            <b-button class="table-actions">
                <v-icon name="times"></v-icon>
            </b-button>
        </template>
    </b-table> -->
    <ul class="my-works-list">
        <li v-for="(work,index) in works" :key="work.id">
            <div>
                {{index+1}}
            </div>
            <div>
                {{work.name}}
            </div>
            <div class="work-actions">
                <b-button class="table-actions">
                    <v-icon name="edit"></v-icon>
                </b-button>
                <b-button class="table-actions" @click="deleteWork(work)">
                    <v-icon name="times"></v-icon>
                </b-button>
            </div>
        </li>
    </ul>
</template>

<script>
import * as fb from 'firebase'
export default {
    data () {
        return {
            fields: [
				{key:'index',label:'№'},
				{key:'status', label:'Вкл/Выкл'},
				{key:'work_name', label:'Название работы', sortable:true},
				{key:'actions', label:'Действия'}
			],
			items: [
				{ status: true, work_name: 'Славута', actions: 'Добавить' },
				{ status: true, work_name: 'Мариуполь', actions: 'Добавить' },
				{ status: false, work_name: 'Розы', actions: 'Добавить' },
			]
        }
    },
    computed: {
        works () {
            return this.$store.getters.works
		}
    },
    methods: {
        deleteWork (data) {
            this.works.splice(this.works.indexOf(data), 1)

            fb.database().ref('works').child(data.id).remove();        
        }
    }
}
</script>

<style>
</style>