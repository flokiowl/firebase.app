<template>
    <div class="login site-page">
		<div class="site-page-title">
			<h2 class="page-title">Регистрация</h2>
			<h5 class="page-description">Создайте свой аккаунт</h5>
		</div>
		<div class="login-content registration">
			<span class="bg"></span>
			<div class="login-icon">
				<v-icon name="user-plus"></v-icon>
			</div>
			<b-form class="login-form" ref="form" v-model="valid">
				<b-form-group
					label="Ваше полное имя:"
					label-for="login-email"
				>
					<b-input-group prepend="А">
						<b-form-input
							id="login-text"
							type="text"
							required
							placeholder="Введите имя"
							v-model="name"
						></b-form-input>
					</b-input-group>
				</b-form-group>
				<b-form-group
					label="Email адресс:"
					label-for="login-email"
					description="Я никогда не передам вашу электронную почту кому-либо еще."
				>
					<b-input-group prepend="@">
						<b-form-input
							id="login-email"
							type="email"
							required
							placeholder="Введите email"
							v-model="email"
							:rules="emailRules"
						></b-form-input>
					</b-input-group>
				</b-form-group>

				<b-form-group label="Пароль:" label-for="login-password" description="Пароль должен быть длиной 6-20 символов и не должен содержать пробелов или специальных символов.">
					<b-form-input 
						id="login-password" 
						type="password"
						required 
						placeholder="Введите пароль"
						v-model="password"
						:rules="passwordRules"
					></b-form-input>
				</b-form-group>
                <b-form-group label="Повторите Пароль:" label-for="re-login-password">
					<b-form-input 
						id="re-login-password" 
						type="password"
						required 
						placeholder="Введите пароль еще раз"
						v-model="confirmPassword"
						:rules="confirmPasswordRules"
					></b-form-input>
				</b-form-group>
				<div class="registration-btn-wrapper">
					<button 
						type="submit" 
						class="default-btn" 
						:class="{'loading': loading}"
						:disabled="!valid || loading" 
						:loading="loading" 
						@click="onSubmit"
					>	
						<b-spinner v-if="loading" variant="primary" type="grow" label="Загрузка"></b-spinner>
						<span v-else>Зарегистрироваться</span>
					</button>
				</div>
			</b-form>
		</div>
	</div>
</template>

<script>
export default {
    data () {
        return {
			valid:false,
			name:'',
			email:'',
			password:'',
			confirmPassword:'',
			emailRules:[
                v => !!v || 'E-mail обязательный',
                v => /.+@.+\..+/.test(v) || 'E-mail должен быть валидным'
           ],
           passwordRules: [
                v => !!v || 'Пароль обязательный',
                v => (v && v.length >= 8) || 'Недопустимый пароль',
           ],
           confirmPasswordRules: [
                v => !!v || 'Нужно повторно ввести пароль',
                v => v === this.password || 'Пароли не совпадают',
           ]
        }
    },
    computed: {
		loading () {
            return this.$store.getters.loading
        }
    },
    methods: {
        onSubmit () {
			const user = {
				email:this.email,
				password:this.password
			}
			this.$store.dispatch('registerUser', user)
				.then(() => {
					this.$router.push('/')
				})
				.catch(() => {})
        }
    }
}
</script>