<style>
	.testCss {
		color: #f00;
	}
</style>

<template>
	<div class="testCss">
		djaskldjskadjksladjs
		{{message}}
	</div>
</template>

<script>
	module.exports = {
		data: function(){
			return {
				message: 'Hello world'
			}
		}
	}
</script>