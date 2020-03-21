<template>
	<div class="portfolio site-page" v-if="!loading">
		<div class="container">
			<div class="site-page-title">
				<h2 class="page-title">Портфолио</h2>
				<div class="page-title-bottom">
					<ul class="breadcrumbs">
						<li class="breadcrumbs-item">
							<router-link to="/home" class="breadcrumbs-link">
								<v-icon name="home"></v-icon>
							</router-link>
							<v-icon name="long-arrow-alt-right" class="breadcrumb-angle"></v-icon>
						</li>
						<li>
							<span class="breadcrumbs-link">Портфолио</span>
						</li>
					</ul>		
					<h5 class="page-description">Мои работы</h5>
				</div>
			</div>
			<div class="portfolio-content">
				<div class="portfolio-top">
					<ul class="portfolio-filters">
						<li class="filter-item">
							<a class="filter-link" :class="{active: isActive === 1}" @click="filterProp='', isActive=1">Все</a>
						</li>
						<li class="filter-item">
							<a class="filter-link" :class="{active: isActive === 2}" @click="filterProp='HTML', isActive=2">Верстка</a>
						</li>
						<li class="filter-item">
							<a class="filter-link" :class="{active: isActive === 3}" @click="filterProp='VueJS', isActive=3">VueJS</a>
						</li>
						<li class="filter-item">
							<a class="filter-link" :class="{active: isActive === 4}" @click="filterProp='Layout', isActive=4">Макеты</a>
						</li>
					</ul>
				</div>
				<transition-group v-if="!loading" tag="div" name="animList" class="portfolio-works">
					<router-link 
						:to="'/portfolio/' + work.id" 
						:name="work.name" 
						class="portfolio-work" 
						v-for="work in filteredWorks.reverse()" 
						:key="work.id"
					>
						<div class="image-block">
							<!-- <b-img-lazy fluid :src="work.imageSrc[0]" :alt="work.name"></b-img-lazy> -->
							<img :src="work.imageSrc[0]" :alt="work.name" />
						</div>
						<div class="hover-block">
							<div class="hover-inner">
								<h3>{{work.name}}</h3>
								<p>
									<span>{{work.date}}</span>
								</p>
							</div>
						</div>
					</router-link>	
				</transition-group>
				<div class="loading" v-else>
					<div class="sk-folding-cube">
						<div class="sk-cube1 sk-cube"></div>
						<div class="sk-cube2 sk-cube"></div>
						<div class="sk-cube4 sk-cube"></div>
						<div class="sk-cube3 sk-cube"></div>
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

export default {
	props: ['id'],
	components: {
		
	},
	metaInfo () {
        return {
            title: 'Портфолио',
            titleTemplate: '%s | Андрей Голуб, личный сайт',
            htmlAttrs: {
                lang: 'ru'
            }
        }
    },
	data () {
		return {
			isActive: 1,
			filterProp: '',
			selected: null,
			options: [
				{ value: null, text: 'Сортировать по', disabled:true },
				{ value: 'name', text: 'Названию' },
				{ value: 'date', text: 'Дате' },
				{ value: 'type', text: 'Типу' }
			]
		}
	},
	computed: {
		loading () {
            return this.$store.getters.loading
        },
		filteredWorks () {
			const filterProp = this.filterProp;
			return this.$store.getters.works.filter(function (work) {
				if (filterProp === '') return true;
				else return work.type.indexOf(filterProp) !== -1;
			})
		},
		// sortedList () {
		// 	let sortByName = function (d1, d2) {
		// 		if (d1.name < d2.name) return 1
		// 		if (d1.name > d2.name) return -1
		// 	};
		// 	let sortByDate = function (d1, d2) {
		// 		if (d1.date < d2.date) return -1
		// 		if (d1.date > d2.date) return 1
		// 	};
		// 	let sortByType = function (d1, d2) {
		// 		if (d1.type < d2.type) return -1
		// 		if (d1.type > d2.type) return 1
		// 	};
		// 	switch(this.selected){
		// 		case 'name': return this.$store.getters.works.sort(sortByName);
		// 		case 'date': return this.$store.getters.works.sort(sortByDate);
		// 		case 'type': return this.$store.getters.works.sort(sortByType);
		// 		default: return this.$store.getters.works.sort(sortByName);
		// 	}
		// },
		works () {
            return this.$store.getters.works
		}
	}
}
</script>

<style lang="scss">
.animList-enter,
.animList-leave-to {
	opacity:0;
	transform:scale(0.5);
}
.animList-leave-active {
	position: absolute;
	display: none;
}
.animList-enter-to,
.animList-leave {
	opacity:1;
	transform:scale(1);
}
.animList-move {
	transition:all 0.6s;
}
</style>