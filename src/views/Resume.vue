<template>
	<div class="resume site-page" v-if="!loading" :style="{backgroundImage: `url(${bg})`}">
		<div class="container">
			<div class="site-page-title">
				<h2 class="page-title">Резюме</h2>
				<div class="page-title-bottom">
					<ul class="breadcrumbs">
						<li class="breadcrumbs-item">
							<router-link to="/home" class="breadcrumbs-link">
								<v-icon name="home"></v-icon>
							</router-link>
							<v-icon name="long-arrow-alt-right" class="breadcrumb-angle"></v-icon>
						</li>
						<li>
							<span class="breadcrumbs-link">Резюме</span>
						</li>
					</ul>		
					<h5 class="page-description">1 Год Опыта</h5>
				</div>
			</div>
			<div class="resume-content">
				<div class="row">
					<div class="col-12 col-lg-8">
						<div class="resume-education">
							<div class="block-title">
								<h3>Образование</h3>
							</div>
							<div class="resume-timeline education">
								<div class="resume-timeline-item">
									<div class="left-part">
										<h5 class="item-period">2013 - 2017</h5>
										<a href="https://nuft.edu.ua/" class="item-company">Национальный университет пищевых технологий</a>
									</div>
									<div class="divider"></div>
									<div class="right-part">
										<h4 class="item-position">Факультет отельно-ресторанного и туристического бизнеса</h4>
										<p class="item-position-description">Закончил бакалавра по специальности "Отельно-ресторанное дело".</p>
									</div>
								</div>
								<div class="resume-timeline-item">
									<div class="left-part">
										<h5 class="item-period">2018 - 2019</h5>
										<a href="https://htmlacademy.ru/"><span class="item-company">HTML Academy</span></a>
									</div>
									<div class="divider"></div>
									<div class="right-part">
										<h4 class="item-position">Самообучение - HTML Academy</h4>
										<p class="item-position-description">Прошел все интерактивные курсы от академии, а так же интенсивы: HTML&CSS, уровень 1 и 2. Считаю, что это очень полезный ресурс для начинающих, сразу обучают делать "правильно", так что бы всё не ламалось через некоторое время, и разработчики, которые будут поддерживать проект, не рвали волосы. </p>
									</div>
								</div>
								<div class="resume-timeline-item">
									<div class="left-part">
										<h5 class="item-period">2019</h5>
										<a href="https://www.udemy.com/course/javascript_full/"><span class="item-company">Курс на Udemy</span></a>
									</div>
									<div class="divider"></div>
									<div class="right-part">
										<h4 class="item-position">Самообучение - JavaScript. С нуля до результата</h4>
										<p class="item-position-description">Неплохой курс, для людей, которые хотят познакомится с JavaScript поближе.  </p>
									</div>
								</div>
								<div class="resume-timeline-item">
									<div class="left-part">
										<h5 class="item-period">2019</h5>
										<a href="https://webformyself.com/"><span class="item-company">WebforMyself</span></a>
									</div>
									<div class="divider"></div>
									<div class="right-part">
										<h4 class="item-position">Самообучение - Фреймворк Vue.js</h4>
										<p class="item-position-description">Познакомился с фреймворком VueJS. На курсе разобраны все самые важные моменты: работа с Vue CLI, компоненты, директивы, валидация с vuelidate, роутинг с vue-router, а так же работа с данными с vuex. </p>
									</div>
								</div>
							</div>
						</div>
						<div class="resume-expirience">
							<div class="block-title">
								<h3>Опыт</h3>
							</div>
							<div class="resume-timeline experience">
								<div class="resume-timeline-item">
									<div class="left-part">
										<h5 class="item-period">07.2019 - Текущий</h5>
										<a href="https://softpro.ua" target="_blank"><span class="item-company">SOFTPRO</span></a>
									</div>
									<div class="divider"></div>
									<div class="right-part">
										<h4 class="item-position">HTML Верстальщик</h4>
										<p class="item-position-description">Компания занимается преимущественно геопорталами и веб-ориентированым ПО. Здесь я получил интересный и полезный опыт работы с картами, шаблонизаторами, а так же нестандартной CMS (самописная). Очень благодарен за Вашу поддержку и помощь. Технологии которые использовал в работе:</p>
										<ol class="item-tech-list">
											<li>HTML & CSS</li>
											<li>Препроцессор LESS</li>
											<li>Bootstrap 3</li>
											<li>JavaScript, jQuery</li>
											<li>Шаблонизатор handlebars</li>
											<li>PostgreSQL</li>
										</ol>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-4">
						<div class="block-title">
							<h3>Скилы</h3>
						</div>
						<div class="skill-list">
							<div class="skill-item" v-for="(skill,i) in skills" :key="i">
								<div class="skill-top">
									<h4 class="skill-name">{{skill.name}}</h4>
									<span class="skill-percent">{{skill.percent}}%</span>
								</div>
								<div class="skill-line">
									<span :style="{width: skill.percent + '%'}"></span>
								</div>
								<div class="skill-description">
									<p>{{skill.description}}</p>
								</div>
							</div>
						</div>
						<a href="https://drive.google.com/open?id=1ZAQlkGSj5fDOaqqMEbsz7EFwePsv4kHM" target="_blank" class="default-btn">Скачать CV</a>
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
import bg from '@/assets/resume.jpg'

export default {
	metaInfo: {
		title: 'Резюме',
		titleTemplate: '%s | Andrew Golub personal website',
		htmlAttrs: {
			lang: 'ru',
			amp: true
		}
    },
	data () {
		return {
			bg,
			skills: [
				{
					name:'Photoshop, Figma, Avocode', 
					percent:71, 
					description: 'На уровне нарезки макета. Так же могу что-то подправить или экспортировать ресурсы с Adobe Illustrator.'
				},
				{
					name:'HTML&CSS', 
					percent:92, 
					description: 'Адаптивная, кроссбраузерная и валидная верстка. При написании кода использую методологию БЭМ. Спокойно верстаю без бутстрапа.'
				},
				{
					name:'SCSS/Less', 
					percent:84, 
					description: 'Преимущественно использую разбиение на блоки, вложенность, переменные. Реже - миксины, экстенды.'
				},
				{
					name:'Bootstrap 3/4', 
					percent:88, 
					description: 'Понимаю как строится сетка, как делать адаптивные интерфейсы, свободно использую любые компоненты фрейворка.'
				},
				{
					name:'JavaScript, JQuery', 
					percent:43, 
					description: 'Использование готовых решений или скриптов, могу изменить или исправить под себя. Работа с DOM.'
				},
				{
					name:'VueJS, Vuex', 
					percent:47, 
					description: ''
				}
			]
		}
	},
	computed: {
		loading () {
            return this.$store.getters.loading
        }
	}
}
</script>