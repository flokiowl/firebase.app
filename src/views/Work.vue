<template>
    <div class="portfolio work site-page" v-if="!loading">
        <div class="work-top">
            <h2 class="work-title">{{work.name}}</h2>
            <router-link class="work-back" to="/portfolio">
                <v-icon name="times"></v-icon>
            </router-link>
        </div>
        <div class="row">
            <div class="col-lg-7">
                <div class="slider-item">
                    <img @click="showSingle()" :src="work.imageSrc">
                    <vue-easy-lightbox
                        :imgs="imgs"
                        :visible="visible"
                        @hide="handleHide"
                    ></vue-easy-lightbox>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="work-info">
                    <div class="block-title">
						<h3>Информация</h3>
					</div>
                    <div class="work-row mt-2">
                        <v-icon name="brands/github"></v-icon>
                        <a v-if="work.repository != ''" :href="work.repository" class="work-repository">Репозиторий</a>
                        <a v-else class="work-repository disabled">Репозиторий</a>
                    </div>
                    <div class="work-row">
                        <v-icon name="globe"></v-icon>
                        <a v-if="work.link != ''" :href="work.link">Сайт</a>
                        <a v-else :href="work.link" class="disabled">Сайт</a>
                    </div>
                    <div class="work-row">
                        <v-icon name="regular/calendar-alt"></v-icon>
                        <span>{{work.date}}</span>
                    </div>
                    <div class="block-title mt-4">
						<h3>Технологии</h3>
					</div>
                    <div class="work-technology">
                        <span class="tech" v-for="tag in work.tags" :key="tag.value">{{tag.value}}</span>
                    </div>
                    <div class="block-title mt-4">
                        <h3>Описание проекта</h3>
                    </div>
                    <p>{{work.description}}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="loading" v-else>
        <b-spinner label="Загрузка..."></b-spinner>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    props: ['id'],
    components: { carousel },
    data () {
        return {
            imgs: '',
            visible: false
        }
    },
    computed: {
        loading () {
            return this.$store.getters.loading
        },
        work () {
            const id = this.id
            return this.$store.getters.WorkById(id)
        }
    },
    methods: {
        showSingle() {
            this.imgs = this.work.imageSrc
            this.show()
        },
        show() {
            this.visible = true
        },
        handleHide() {
            this.visible = false
        }
    }
}
</script>