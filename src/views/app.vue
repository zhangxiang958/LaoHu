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