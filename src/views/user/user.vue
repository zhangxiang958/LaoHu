<style>
	
</style>

<template>
	<div>
		<DataTable tableName="用户表" :tableHeader="tableHeader"  :tableBody="tableBody" />
	</div>
</template>

<script>
	import DataTable from '../../components/table.vue';

	export default {
		mounted() {
			this.$http.get('http://localhost:18081/api/user').then((response) => {
				this.tableBody = response.data;
			});
		},
		data() {
			return {
				tableHeader: ['member_id', 'member_name', 'sex', 'avatar', 'team_id', 'position', 'grade', 'academy', 'major', 'class', 'email', 'tele', 'wechat', 'QQ', 'job', 'location'],
				tableBody: []
			}
		},
		components: {
			DataTable
		}
	}
</script>