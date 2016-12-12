<style>
	
</style>

<template>
	<div>
		<DataTable 
			tableName="用户表" 
			:tableHeader="tableHeader"  
			:tableBody="tableBody" 
			v-on:details="checkDetail"
			v-on:edit="editDetail"
			v-on:delete="deleteItem"
		/>
		<Detail 
			:tableTitle="tableTitle" 
			:itemData="itemData" 
			:notChecking="notChecking" 
			:toEdit="toEdit" 
			v-on:toBack="toBack"
			v-on:saveIt="saveIt"
		/>
	</div>
</template>

<script>
	import DataTable from '../../components/table.vue';
	import Detail 	 from '../../components/detail.vue';

	export default {
		mounted() {
			this.$http.get('http://localhost:18081/api/user').then((response) => {
				this.tableBody = response.data;
			});
		},
		data() {
			return {
				tableHeader: ['member_id', 'member_name', 'sex', 'avatar', 'team_id', 'position', 'grade', 'academy', 'major', 'class', 'email', 'tele', 'wechat', 'QQ', 'job', 'location'],
				tableBody: [],
				tableTitle: '用户详情',
				notChecking: true,
				toEdit: false,
				itemData: {}
			}
		},
		methods: {
			checkDetail(index) {
				this.itemData = this.tableBody[index];
				this.notChecking = false;
				this.toEdit = false;
			},
			editDetail(index) {
				this.itemData = this.tableBody[index];
				this.notChecking = false;
				this.toEdit = true;
			},
			deleteItem(index) {
				alert("admin delete");
			},
			toBack() {
				this.notChecking = true;
			},
			saveIt(data) {
				this.$http.put('http://localhost:18081/api/user/editUser/' + data.member_id, data,{
							emulateJSON: true
						}).then((response) => {
			
					console.log(response);
					console.log(response.data);
					if(response.data.code === 0) {

						alert("修改成功");
						this.toBack();
					} else {
						
						alert("修改失败");
					}
				});
			}
		},
		components: {
			DataTable, Detail
		}
	}
</script>