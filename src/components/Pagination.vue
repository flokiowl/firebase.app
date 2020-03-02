<template>
    <div class="pagination">
        <ul>
            <li v-for="(p,index) in paginatedData" :key="index">
                {{p.first}} 
                {{p.last}}  
                {{p.suffix}}
            </li>
        </ul>
        <button @click="prevPage" :disabled="pageNumber==0">Previous</button>
        <button @click="nextPage" :disabled="pageNumber >= pageCount -1">Next</button>
    </div>
</template>

<script>
export default {
    props: {
        listData:{
            type:Array,
            required:true
        },
        size:{
            type:Number,
            required:false,
            default: 1
        }
    },
    data(){
        return {
            pageNumber: 0  // по умолчанию 0
        }
    },
    computed: {
        pageCount(){
            let l = this.listData.length,
                s = this.size;
            return Math.ceil(l/s);
        },
        paginatedData(){
            const start = this.pageNumber * this.size,
                  end = start + this.size;
            return this.listData.slice(start, end);
        }
    },
    methods:{
        nextPage(){
            this.pageNumber++;
        },
        prevPage(){
            this.pageNumber--;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>