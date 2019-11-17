<template>
	<div class="contact site-page">
		<div class="site-page-title">
			<h2 class="page-title">Контакты</h2>
			<h5 class="page-description">Свяжитесь со мной удобным для Вас способом</h5>
		</div>
		<div id="map" ref="map"></div>
		<div class="row m-0">
			<div class="col-12 col-lg-6 p-0">
				<div class="contact-form">
					<h3>Свяжитесь со мной</h3>
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
						<input type="submit" value="Отправить" class="default-btn">
					</form>
				</div>
			</div>
			<div class="col-12 col-lg-6 p-0">
				<div class="contact-info">
					<div class="contact-list">
						<div class="contact-item-wrapper">
							<div class="contact-item">
								<img src="@/assets/contact/call.svg" alt="phone">
								<h4>Телефон</h4>
								<span>+38 (067) 665-46-20</span>
							</div>
						</div>
						<div class="contact-item-wrapper">
							<div class="contact-item">
								<img src="@/assets/contact/address.svg" alt="address">
								<h4>Локация</h4>
								<span>Киев/Обухов, Украина</span>
							</div>
						</div>
						<div class="contact-item-wrapper">
							<div class="contact-item">
								<img src="@/assets/contact/email.svg" alt="email">
								<h4>Email</h4>
								<span>andrewgolub25@gmail.com</span>
							</div>
						</div>
						<div class="contact-item-wrapper">
							<div class="contact-item">
								<img src="@/assets/contact/game-developer.svg" alt="freelance">
								<h4>Freelance</h4>
								<span>Открыт для заказов</span>
							</div>
						</div>	
					</div>
				</div>
			</div>
		</div>
	</div> 
</template>

<script>
export default {
	data () {
		return {

		}
	},
	mounted () {	
		this.map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 50.130253, lng: 30.656062},
			zoom: 8,
			disableDefaultUI: true
		});
		var myMarker = new google.maps.Marker({
			position: new google.maps.LatLng(50.130253, 30.656062),
			map: this.map,
			icon:'https://img.icons8.com/officel/40/000000/marker.png',
			title:'Мое месторасположение'
		});
	}
}
</script>