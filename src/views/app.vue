<style>

</style>

<template>
	<div>
		{{message}}
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
				message: 'Hello World'
			}
		},
		methods: {
			testMdl() {
				alert("mdl");
			}
		},
		components: {
			
		}
	}
</script>