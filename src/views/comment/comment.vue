<style>
	
</style>

<template>
	<div>
		<DataTable 
			tableName="评论表" 
			:tableHeader="tableHeader"  
			:tableBody="tableBody" 
		/>
	</div>
</template>

<script>
	import DataTable from '../../components/table.vue';

	export default {
		mounted() {
			this.$http.get('http://localhost:18081/api/comment').then((response) => {
				this.tableBody = response.data;
			});
		},
		data() {
			return {
				tableHeader: [''],
				tableBody: []
			}
		},
		components: {
			DataTable
		}
	}
</script>