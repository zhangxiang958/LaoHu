<style>
	
</style>

<template>
	<div>
		<DataTable 
			tableName="博文表" 
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
			this.$http.get('http://localhost:18081/api/article').then((response) => {

				this.tableBody = response.data;
			});
		},
		data() {
			return {
				tableHeader: ['article_id', 'title', 'author', 'publish_time', 'link', 'summary', 'article_body', 'pageView', 'praise'],
				tableBody: [],
				tableTitle: '博文详情',
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
				this.$http.put('http://localhost:18081/api/article/editArticle/' + data.article_id, data, {
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