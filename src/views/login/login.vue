<style>
	.login-wrapper {
	    margin: 10% auto;
		padding: 20px;
	    border: 1px solid rgba(0,0,0,0.3);
	    width: 300px;
	    background-color: #ecf0f1;
	    border-radius: 15px;
	    -webkit-border-radius: 15px;
	    -moz-border-radius: 15px;
	    -ms-border-radius: 15px;
	    -o-border-radius: 15px;
	    box-shadow: 0 0 0 2px rgba(0,0,0,0.04);
	    -webkit-box-shadow: 0 0 0 2px rgba(0,0,0,0.04);
	}
	.login-row {
		margin-left: -15px;
    	margin-right: -15px;
	}
	.login-row h3 {
		color: #2c3e50;;
		text-align: center;
	}
	.login-row h5 {
		margin: 0 auto;
		margin-bottom: 15px;
		width: 80%;
		border-bottom: 1px solid rgba(0, 0, 0, .1);
		text-align: center;
	}
	.logo-icon {
		position: relative;
    	margin: auto;
    	padding: 15px;
		width: 75px;
    	height: 75px;
    	border-radius: 50%;
    	background: #2c3e50;
	}
	.logo-icon i[class*='icon-'] {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	    display: inline;
	    color: #1abc9c;
	    font-size: 140%;
	    line-height: normal;
	    vertical-align: baseline;
	    background-image: none;
	    background-position: 0% 0%;
	    background-repeat: repeat;
	    font-weight: normal;
	    font-style: normal;
	    text-decoration: inherit;
	    -webkit-font-smoothing: antialiased;
	}
	.icon-beer:before {
		content: "ADMIN";
    	display: inline-block;
		text-decoration: inherit;
    	cursor: default;
    	speak: none;
	}
	.form-container {
		margin: 0 auto;
		width: 80%;
		padding: 10px;
		text-align: center;
	}
	.form-wrapper {
		width: 100%;
	}
	.form-control {
		display: block;
		margin-bottom: 10px;
	    padding: 6px 12px;
	    width: 100%;
	    height: 34px;
	    font-size: 14px;
	    line-height: 1.428571429;
	    color: #555555;
	    background-color: white;
	    background-image: none;
	    border: 1px solid #cccccc;
	    border-radius: 4px;
	    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
	    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
	    -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
	    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
	    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
	}
	.sign {
		display: inline-block;
	    margin-bottom: 15px;
		padding: 6px 12px;
    	border-color: #cccccc;
    	background-color: white;
		color: #333333;
	    font-weight: normal;
	    text-align: center;
	    vertical-align: middle;
	    cursor: pointer;
	    background-image: none;
	    border: 1px solid transparent;
	    white-space: nowrap;
	    padding: 6px 12px;
	    font-size: 14px;
	    line-height: 1.428571429;
	    border-radius: 4px;
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	}
	.forgot {
		color: #222;
	}
	.forgot:hover {
		color: #1abc9c;
		cursor: pointer;
	}
	.login-message {
		height: 25px;
		font-size: 14px;
		color: #ff4081;
	}
</style>

<template>
	<div class="login-wrapper">
		<div class="login-row">
			<div class="logo-icon">
                <i class="icon-beer"></i>
              </div>
			<h3>LaoHu</h3>
		</div>
		<div class="login-row">
			<h5>Login to Your Account</h5>
			<form class="form-container">
				<div class="login-message">
					{{ loginMessage }}
				</div>
	            <fieldset>
	              <div class="form-wrapper">
	                <input class="form-control" placeholder="Account" type="text" v-model="accounts">
	              </div>
	              <div class="form-wrapper">
	                <input class="form-control" placeholder="Password" type="password" v-model="password">
	              </div>
	              <div>
	                <div class="checkbox">
	                  <label>
	                    <input type="checkbox">Remember Me on this computer
	                  </label>
	                </div>
	                <a class="sign" @click="SignIn">Sign in</a>
	                <br>
	                <a class="forgot">Forgot Password?</a>
	              </div>
	            </fieldset>
          	</form>

		</div>
	</div>
</template>

<script>
	import Utility from 'utility';

	export default {
		created() {
			console.log(Utility.md5('123'));
		},
		mounted() {

		},
		data() {
			return {
				accounts: '',
				password: '',
				loginMessage: ''
			}
		},
		methods: {
			SignIn: function(){
				console.log(this.accounts);
				console.log(this.password);
				var that = this;
				if(!this.accounts || !this.password) {
					return;
				} else {
					var body = {
						'accounts': this.accounts,
						'password': Utility.md5(this.password)
					};
					this.$http.post('http://localhost:18081/api/admin', body,
						{
							emulateJSON: true
						}).then(function(response){
							console.log(response.data);
							console.log(response.data.code);
							var code = response.data.code;
							if(code === 0) {
								that.loginMessage = '';
								that.$store.commit('USER_SIGININ', response.data);
								that.$router.replace({ path: '/' });
								
							} else {
								that.loginMessage = '帐号或密码错误,请重新输入';
							}
					});
				}
				
			}
		},
		components: {

		}
	}
</script>