<style>
	
</style>

<template>
	<div>
		<DataTable 
			tableName="用户表" 
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
				notAdding: true,
				toEdit: false,
				itemData: {},
				template: {
					member_name: '',
					sex: '',
					avatar: '',
					team_id: '',
					position: '',
					grade: '',
					academy: '',
					major: '',
					class: '',
					email: '',
					tele: '',
					wechat: '',
					QQ: '',
					job: '',
					location: ''
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

					this.$http.delete('http://localhost:18081/api/user/deleteUser/' + this.tableBody[index].member_id, {
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
			},
			addThis(editItem) {
				this.$http.post('http://localhost:18081/api/user/addUser', editItem,
					{
						emulateJSON: true
					}).then(function(response){
						console.log(response.data);
						console.log(response.data.code);
						var code = response.data.code;
						if(code === 0) {
							
							this.$http.get('http://localhost:18081/api/user').then((response) => {
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