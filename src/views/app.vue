<style>

</style>

<template>
	<div>
		{{message}}
		{{count}}
		<mdl-button @click.native="testMdl">asdjakl</mdl-button>
		
	</div>
</template>

<script>
	export default {
		created() {
			console.log("created");
			this.$http.get('http://localhost:18081', {
				body: {
					test: '123123'
				}
			}).then(function(response){
				console.log("fuck");
				console.log(response);
				console.log(response.data);
				console.log(response.data.test);
			});
		},
		mounted() {
			console.log("mounted");
			console.log(this.$el);
		},
		data() {
			return {
				message: 'Hello World',
				count: 0
			}
		},
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {

			testMdl() {
				alert("mdl");
				console.log(this.$store);
				this.$store.commit('increment');
			}
		},
		components: {
			
		}
	}
</script>