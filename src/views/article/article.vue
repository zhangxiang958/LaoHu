<style>
	
</style>

<template>
	<div>
		<DataTable tableName="博文表" :tableHeader="tableHeader"  :tableBody="tableBody" />
	</div>
</template>

<script>
	import DataTable from '../../components/table.vue';

	export default {
		mounted() {
			this.$http.get('http://localhost:18081/api/article').then((response) => {

				this.tableBody = response.data;
			});
		},
		data() {
			return {
				tableHeader: ['article_id', 'title', 'author', 'publish_time', 'link', 'summary', 'article_body', 'pageView', 'praise'],
				tableBody: []
			}
		},
		components: {
			DataTable
		}
	}
</script>