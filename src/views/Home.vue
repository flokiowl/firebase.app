<template>
	<div class="about">
		<section class="about-start full-width" v-if="!loading">
			<section class="about-intro">
				<div class="row">
					<div class="col-12 col-lg-6">
						<div class="full-photo">
							<div class="fill-image" :style="{backgroundImage: `url(${photo})`}"></div>
						</div>
					</div>
					<div class="col-12 col-lg-6 bg-grey">
						<div class="about-content">
							<div class="about-position">
								<pre>Front end developer</pre>
							</div>
							<div class="about-name">
								<h1>Андрей Голуб</h1>
							</div>
							<div class="about-text">
								<p>Всем привет! Я начинающий веб-разработчик. Проживаю в городе Обухов. В 2018 году начал изучать веб-дизайн, но как только столкнулся с HTML5, понял, что это то чему хочу посвятить всего себя! Сейчас активно развиваюсь в области Front-end Development. В короткие сроки могу освоить и начать использовать новые технологии. Я целеустремлен и воодушевлен идей развития в IT.</p>
								<p>На данный момент ищу место, где смогу получить хорошие знания, невероятный опыт и отличную команду при работе над интересными проектами.</p>
							</div>
							<div class="about-actions">
								<router-link to="/portfolio" class="default-btn">Посмотреть работы</router-link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="services" id="services" ref="services">
				<div class="container">
					<div class="block-title">
						<h3>Услуги</h3>
					</div>
					<div class="row">
						<div class="col-12 col-sm-6 services-item">
							<div class="row">
								<div class="services-icon col-12">
									<img src="@/assets/services/html.svg">
								</div>
								<div class="col-12">
									<h4 class="services-name holder">Верстка</h4>
									<p class="services-description">Создание новых страниц из PSD макетов, реверстка старых проектов.</p>
								</div>
							</div>	
						</div>
						<div class="col-12 col-sm-6 services-item">
							<div class="row">
								<div class="services-icon col-12">
									<img src="@/assets/services/adaptive.svg">
								</div>
								<div class="col-12">
									<h4 class="services-name">Адаптивность</h4>
									<p class="services-description">Адаптация новых и готовых страниц под мобильные устройства.</p>
								</div>
							</div>
						</div>
						<div class="col-12 col-sm-6 services-item">
							<div class="row">
								<div class="services-icon col-12">
									<img src="@/assets/services/js.svg">
								</div>
								<div class="col-12">
									<h4 class="services-name holder">Разработка</h4>
									<p class="services-description">Реализация JavaScript логики (слайдеры, попапы, анимации, AJAX и т.д.)</p>
								</div>
							</div>
						</div>
						<div class="col-12 col-sm-6 services-item">
							<div class="row">
								<div class="services-icon col-12">
									<img src="@/assets/services/cms.svg">
								</div>
								<div class="col-12">
									<h4 class="services-name">CMS</h4>
									<p class="services-description">Интеграция проекта в систему управления содержимым, настройка.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="prices bg-grey">
				<div class="container">
					<div class="block-title">
						<h3>Цены</h3>
					</div>
					<i class="warn">* — цены варьируются в зависимости от сложности работы.</i>
					<div class="row">
						<div class="col-xs-12 col-lg-4">
							<div class="prices-item">
								<span class="prices-name">Верстка</span>
								<div class="price-block">
									
									<span>&#36;10</span>
									<small class="ml-1 mr-0">в час</small>
								</div>
								<div class="prices-button">
									<router-link to="/contact" class="default-btn">Написать мне</router-link>
								</div>
								<ul class="prices-list">
									<li class="prices-list-item">Адаптивная</li>
									<li class="prices-list-item">Кроссбраузерная</li>
									<li class="prices-list-item">Валидная</li>
								</ul>
							</div>
						</div>
						<div class="col-xs-12 col-lg-4">
							<div class="prices-item">
								<span class="prices-name">Landing page</span>
								<div class="price-block">
									<small>от</small>
									<span>&#36;100</span>
									<sup>*</sup>
								</div>
								<div class="prices-button">
									<router-link to="/contact" class="default-btn">Написать мне</router-link>
								</div>
								<div class="prices-description">
									<p>На всех этапах работы над landing page будут учтены все ваши пожелания относительно контента, оформления, структуры, дополнительных функций.</p>
								</div>
							</div>
						</div>
						<div class="col-xs-12 col-lg-4">
							<div class="prices-item">
								<span class="prices-name">Корпоративный</span>
								<div class="price-block">
									<small>от</small>
									<span>&#36;700</span>
									<sup>*</sup>
								</div>
								<div class="prices-button">
									<router-link to="/contact" class="default-btn">Написать мне</router-link>
								</div>
								<ul class="prices-list">
									<li class="prices-list-item">Личный кабинет</li>
									<li class="prices-list-item">Корзина заказов</li>
									<li class="prices-list-item">Новости, акции и т.д</li>
									<li class="prices-list-item">Морфологический поиск</li>
									<li class="prices-list-item">Система управления сайтом (CMS)</li>
									<li class="prices-list-item">Аналитика, статистика посещений</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
		<div class="loading" v-else>
			<div class="sk-folding-cube">
				<div class="sk-cube1 sk-cube"></div>
				<div class="sk-cube2 sk-cube"></div>
				<div class="sk-cube4 sk-cube"></div>
				<div class="sk-cube3 sk-cube"></div>
			</div>
		</div>
	</div>
</template>

<script>
import photo from '@/assets/about.jpg'

export default {
	metaInfo () {
        return {
            title: 'Andrew Golub | Front end developer',
            htmlAttrs: {
                lang: 'ru',
                amp: true
			},
			meta: [
				{ vmid: 'description', property: 'description', content: this.pageDescription },
				{ vmid: 'og:title', property: 'og:title', content: 'Andrew Golub | Front end developer' },
				{ vmid: 'og:description', property: 'og:description', content: this.pageDescription },
			],
        }
    },
	data () {
		return {
			publicPath: process.env.BASE_URL,
			photo,
			pageDescription: "Всем привет! Я начинающий веб-разработчик. Проживаю в городе Обухов. В 2018 году начал изучать веб-дизайн, но как только столкнулся с HTML5, понял, что это то чему хочу посвятить всего себя! Сейчас активно развиваюсь в области Front-end Development. В короткие сроки могу освоить и начать использовать новые технологии. Я целеустремлен и воодушевлен идей развития в IT."
		}
	},
	computed: {
		loading () {
            return this.$store.getters.loading
        }
	}
}
</script>

<style lang="scss">
// .tanLeft-enter,
// .tanLeft-leave-to {
// 	transform:translateX(-20px);
// }
// .tanLeft-enter-active,
// .tanLeft-leave-active {
// 	transition:all .8s;
// }
// .tanLeft-enter-to,
// .tanLeft-leave {
// 	transform:translateX(0);
// }
// //@at-root
// .titIn-enter {
// 	transform:translateX(-20px);
// 	opacity:0;
// }
// .titIn-enter-active {
// 	transition:all .8s;
// }
// .titIn-enter-to {
// 	transform:translateX(0);
// }

// .Masthead {
// 	z-index: 1;
// 	position:static;
// }
</style>
