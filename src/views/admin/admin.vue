<style>
	
</style>

<template>
	<div>
		<DataTable 
			tableName="管理员表" 
			:tableHeader="tableHeader"  
			:tableBody="tableBody"
			v-on:addItem="addItem"
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
		<AddItem
			:tableHeader="template"
			:notAdding="notAdding"
			v-on:add="addThis" 
			v-on:toBack="toBack"
		/>
	</div>
</template>

<script>
	import DataTable from '../../components/table.vue';
	import Detail 	 from '../../components/detail.vue';
	import AddItem 	 from '../../components/addItem.vue';

	import Utility from 'utility';	

	export default {
		mounted() {
			this.$http.get('http://localhost:18081/api/admin/getAdmin').then((response) => {
			
				this.tableBody = response.data;
			});
		},
		data() {
			return {
				tableHeader: ['admin_id', 'accounts', 'password'],
				tableBody: [],
				tableTitle: '管理员详情',
				notChecking: true,
				notAdding: true,
				toEdit: false,
				itemData: {},
				template: {
					accounts: '',
					password: ''
				}
			}
		},
		methods: {
			addItem() {
				// this.itemData = this.tableBody[index];
				this.notAdding = false;
			},
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
				console.log(this.tableBody[index].article_id);
				if(confirm("确定删除吗?")) {

					this.$http.delete('http://localhost:18081/api/admin/deleteAdmin/' + this.tableBody[index].admin_id, {
						emulateJSON: true
					}).then((response) => {
			
						console.log(response);
						console.log(response.data);
						if(response.data.code === 0) {
							this.tableBody.splice(index, 1);
							alert("删除成功");
						} else {
							
							alert("删除失败");
						}
					});
				} else {
					return;
				}
			},
			toBack() {

				this.notChecking = true;
				this.notAdding = true;
			},
			saveIt(data) {
				console.log(data);

				this.$http.put('http://localhost:18081/api/admin/editAdmin/' + data.admin_id, data, {
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
			},
			addThis(editItem) {
				console.log(editItem);

				editItem.password =  Utility.md5(editItem.password);

				this.$http.post('http://localhost:18081/api/admin/addAdmin', editItem,
					{
						emulateJSON: true
					}).then(function(response){
						console.log(response.data);
						console.log(response.data.code);
						var code = response.data.code;
						if(code === 0) {

							this.$http.get('http://localhost:18081/api/admin/getAdmin').then((response) => {
			
								this.tableBody = response.data;
							});

							alert("添加成功");
							this.toBack();
						} else {
							
							alert("添加失败");
						}
				});
				
			}
		},
		components: {
			DataTable, Detail, AddItem
		}
	}
</script>