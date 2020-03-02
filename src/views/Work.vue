<template>
    <div class="portfolio work site-page" v-if="!loading">
        <div class="container">
            <!-- <div class="work-top">
                <h2 class="work-title">{{work.name}}</h2>
                <router-link class="work-back" to="/portfolio">
                    <v-icon name="times"></v-icon>
                </router-link>
            </div> -->
            <div class="site-page-title">
				<h2 class="page-title">{{work.name}}</h2>
				<div class="page-title-bottom">
					<ul class="breadcrumbs">
						<li class="breadcrumbs-item">
							<router-link to="/home" class="breadcrumbs-link">
								<v-icon name="home"></v-icon>
							</router-link>
							<v-icon name="long-arrow-alt-right" class="breadcrumb-angle"></v-icon>
						</li>
						<li class="breadcrumbs-item">
							<router-link to="/portfolio" class="breadcrumbs-link">
                                Портфолио
                            </router-link>
                            <v-icon name="long-arrow-alt-right" class="breadcrumb-angle"></v-icon>
						</li>
                        <li class="breadcrumbs-item">
							<span class="breadcrumbs-link">{{work.name}}</span>
						</li>
					</ul>		
					<h5 class="page-description">Мои работы</h5>
				</div>
				<span class="id"></span>
			</div>
            <div class="row">
                <div class="col-lg-9">
                    <div class="slider-item">
                        <CoolLightBox 
                            :items="work.imageSrc" 
                            :index="index"
                            @close="index = null">
                        </CoolLightBox>
                        <div class="images-wrapper">
                            <carousel :items="1" :center="true" :margin="10" :nav="false" :dots="true"  :touchDrag="false" >
                                <template slot="prev">
                                    <span class="slider-prev">
                                        <v-icon name="angle-left"></v-icon>
                                    </span>
                                </template>
                                <div
                                    class="image"
                                    v-for="(image, imageIndex) in work.imageSrc"
                                    :key="imageIndex"
                                    @click="index = imageIndex"
                                    :style="{ backgroundImage: 'url(' + image + ')' }"
                                    style="background-size:cover;background-position:top left;"
                                >
                                    <img class="hidden-img" :src="image" alt="" style="visibility:hidden;">
                                </div>
                                <template slot="next">
                                    <span class="slider-next">
                                        <v-icon name="angle-right"></v-icon>
                                    </span>
                                </template>
                            </carousel>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
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
    </div>
    <div class="loading" v-else>
        <div class="sk-folding-cube">
			<div class="sk-cube1 sk-cube"></div>
			<div class="sk-cube2 sk-cube"></div>
			<div class="sk-cube4 sk-cube"></div>
			<div class="sk-cube3 sk-cube"></div>
		</div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import CoolLightBox from 'vue-cool-lightbox'

export default {
    props: ['id'],
    components: { carousel, CoolLightBox },
    metaInfo () {
        return {
            title: this.work.name,
            titleTemplate: '%s | Andrew Golub personal website',
            htmlAttrs: {
                lang: 'ru',
                amp: true
            }
        }
    },
    data () {
        return {
            imgs: '',
            visible: false,
            index: null
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
        // showGallery(e) {
        //     console.log(this.work.imageSrc)
        //     fancyBox(e.target, this.work.imageSrc);
        // },
        show() {
            this.visible = true
        },
        handleHide() {
            this.visible = false
        }
    }
}
</script>