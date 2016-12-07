<style>
	
</style>

<template>
	<div>
		<DataTable tableName="管理员表" :tableHeader="tableHeader"  :tableBody="tableBody" />
	</div>
</template>

<script>
	import DataTable from '../../components/table.vue';

	export default {
		mounted() {
			this.$http.get('http://localhost:18081/api/admin/getAdmin').then((response) => {
			
				this.tableBody = response.data;
			});
		},
		data() {
			return {
				tableHeader: ['admin_id', 'accounts', 'password'],
				tableBody: []
			}
		},
		components: {
			DataTable
		}
	}
</script>