<template>
	<div class="contact site-page">
		<div class="container">
			<div class="site-page-title">
				<h2 class="page-title">Контакты</h2>
				<div class="page-title-bottom">
					<ul class="breadcrumbs">
						<li class="breadcrumbs-item">
							<router-link to="/home" class="breadcrumbs-link">
								<v-icon name="home"></v-icon>
							</router-link>
							<v-icon name="long-arrow-alt-right" class="breadcrumb-angle"></v-icon>
						</li>
						<li>
							<span class="breadcrumbs-link">Контакты</span>
						</li>
					</ul>		
					<h5 class="page-description">Свяжитесь со мной удобным для Вас способом</h5>
				</div>
			</div>
			<div class="contact-info">
				<div class="row">
					<div class="col-lg-4">
						<div class="contact-info-item">
							<div class="contact-icon">
								<img src="@/assets/contact/address.svg" alt="address">
							</div>
							<div class="contact-caption">
								<h3>Месторасположение</h3>
							</div>
							<div class="contact-text">Обухов/Киев, Украина</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="contact-info-item">
							<div class="contact-icon">
								<img src="@/assets/contact/email.svg" alt="address">
							</div>
							<div class="contact-caption">
								<h3>Email</h3>
							</div>
							<div class="contact-text">andrewgolub25@gmail.com</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="contact-info-item">
							<div class="contact-icon">
								<img src="@/assets/contact/call.svg" alt="address">
							</div>
							<div class="contact-caption">
								<h3>Телефон</h3>
							</div>
							<div class="contact-text">+38 (067) 665-46-20</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row m-0">
				<div class="col-12 col-lg-6 p-0">
					<div class="contact-form">
						<p>Если у Вас возникли вопросы или предложения свяжитесь со мной и я обязательно отвечу.</p>
						<form action="https://formspree.io/moqqpgwb" method="POST" class="form">
							<b-form-input type="text" placeholder="Ваше имя" name="name" required></b-form-input>
							<b-form-input type="email" placeholder="Ваш email" name="_replyto" required></b-form-input>
							<b-form-textarea
								id="message"
								name="message"
								placeholder="Сообщение..."
								rows="5"
								max-rows="6"
								required
							></b-form-textarea>
							<button type="submit" class="default-btn">Отправить</button>
						</form>
					</div>
				</div>
				<div class="col-12 col-lg-6 p-0">
					<div id="map" ref="map"></div>
				</div>
			</div>
		</div>
	</div> 
</template>

<script>
import mapStyle from '@/assets/map-style.json'

export default {
	metaInfo: {
		title: 'Контакты',
		titleTemplate: '%s | Andrew Golub personal website',
		htmlAttrs: {
			lang: 'ru',
			amp: true
		}
    },
	data () {
		return {

		}
	},
	mounted () {	
		this.map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 50.130253, lng: 30.656062},
			zoom: 10,
			disableDefaultUI: true
		});
		var myMarker = new google.maps.Marker({
			position: new google.maps.LatLng(50.130253, 30.656062),
			map: this.map,
			icon:'https://img.icons8.com/ultraviolet/40/000000/marker.png',
			title:'г.Обухов, Киевская область, Украина',
			animation: google.maps.Animation.BOUNCE
		});
		this.map.setOptions({styles: mapStyle});
	}
}	
</script>