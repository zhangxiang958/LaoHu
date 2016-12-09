<style>
	.dashboard-container {
		margin: 15px 3%;
		min-width: 300px;
		text-indent: 10px;
		background-color: #cef3f5;
		color: #000;
		font-weight: 900;
		font-size: 30px;
		line-height: 80px;
		vertical-align: middle;
	}
	.useage-container {
		overflow: hidden;
	}
	.dashboard-tag {
		margin-left: -15px;
		float: left;
		width: 30%;
		background-color: #5ba0a3;
		line-height: 80px;
		color: #fff;
		font-size: 20px;
		text-align: center;
		text-indent: 0;
	}
</style>

<template>
	<div id="content">
		<div class="page-header">
            <h4>系统总览</h4>
        </div>
        <div class="useage-container">
        	<div class="col-md-5 dashboard-container">
				<div class="dashboard-tag">
					文章
				</div>
				123124543
			</div>
			<div class="col-md-5 dashboard-container">
				<div class="dashboard-tag">
					评论
				</div>
				23123123123
			</div>
			<div class="col-md-5 dashboard-container">
				<div class="dashboard-tag">
					用户
				</div>
				asdadasdas
			</div>
			<div class="col-md-5 dashboard-container">
				<div class="dashboard-tag">
					团队
				</div>
				1231232
			</div>
        </div>
		
		<div class="page-header">
           	<h4>User statics</h4>
        </div>
	</div>
</template>

<script>
	export default {
		mounted() {

		},
		data() {
			return {

			}
		}
	}
</script>