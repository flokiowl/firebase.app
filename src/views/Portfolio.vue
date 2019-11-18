<template>
	<div class="portfolio site-page" v-if="!loading">
		<div class="site-page-title">
			<h2 class="page-title">Портфолио</h2>
			<h5 class="page-description">Мои работы</h5>
			<span class="id"></span>
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
					v-for="work in filteredWorks" 
					:key="work.id"
				>
						<div class="image-block">
							<img :src="work.imageSrc" :alt="work.name">
						</div>
						<div class="hover-block">
							<div class="hover-inner">
								<h3>{{work.name}}</h3>
								<p>
									<span>{{work.type}}</span>
									<span>{{work.date}}</span>
								</p>
							</div>
						</div>
				</router-link>	
			</transition-group>
			<div class="loading" v-else>
				<b-spinner label="Загрузка"></b-spinner>
			</div>
		</div>
	</div>
	<div class="loading" v-else>
		<b-spinner label="Загрузка"></b-spinner>
	</div>
</template>

<script>
export default {
	props: ['id'],
	data () {
		return {
			isActive: 1,
			filterProp:'',
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
		// 		if (d1.name < d2.name) return -1
		// 		if (d1.name > d2.name) return 1
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
		// 		default: return this.$store.getters.works;
		// 	}
		// },
		works () {
            return this.$store.getters.works
		}
	},
	methods: {
		
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
	display:none;
}
.animList-enter-to,
.animList-leave {
	opacity:1;
	transform:scale(1);
}
.animList-move {
	transition:all 0.7s;
}
</style>