<template>
    <!-- <ul class="my-works-list">
        <li v-for="(work,index) in works" :key="work.id">
            <div>
                {{index+1}}
            </div>
            <div>
                {{work.name}}
            </div>
            <div class="work-actions">
                <b-button class="table-actions" variant="outline-primary" v-b-modal="work.id">
                    <v-icon name="edit"></v-icon>
                </b-button>
                <b-button class="table-actions" variant="danger" @click="deleteWork(work)">
                    <v-icon name="times"></v-icon>
                </b-button>
            </div>
            <EditWork :work="work" />
        </li>
    </ul> -->
    <div class="table-responsive">
        <table class="table table-consendered table-bordered">
            <thead>
                <th>№</th>
                <th>Название</th>
                <th>On/Off</th>
                <th>#</th>
            </thead> 
            <tbody>
                <tr v-for="(work,index) in works" :key="work.id">
                    <td>{{index+1}}</td>
                    <td>{{work.name}}</td>
                    <td>-</td>
                    <td>
                        <button class="btn btn-outline-primary table-actions" v-b-modal="work.id">
                            <v-icon name="edit"></v-icon>
                        </button>
                        <button class="btn btn-pimary btn-danger table-actions" variant="danger" @click="deleteWork(work)">
                            <v-icon name="times"></v-icon>
                        </button>
                        <EditWork :work="work" />
                    </td>
                </tr>
            </tbody>     
        </table>
    </div>
</template>

<script>
import fb from 'firebase/app'
import 'firebase/database'
import EditWork from '@/components/EditWork'

export default {
    components: {
        EditWork
    },
    computed: {
        works() {
            return this.$store.getters.works
        }
    },
    methods: {
        deleteWork(data) {
            this.works.splice(this.works.indexOf(data), 1)

            fb.database().ref('works').child(data.id).remove();
        }
    }
}
</script>
