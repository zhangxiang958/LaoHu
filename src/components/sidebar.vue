<style>
	.breadcrumb {
		margin-bottom: 20px;
    	list-style: none;
    	background-color: #ecf0f1;
	}
	.breadcrumb > li {
		display: inline-block;
	}
	.breadcrumb > li + li:before {
		content: "/\00a0";
    	padding: 0 5px;
    	color: #cccccc;
	}
	.launcher .icon-table {

	}
</style>

<template>
	<div>
		<section id="sidebar">
	        <i class="icon-align-justify icon-large" id="toggle"></i>
	        <ul id="dock">
	          <router-link  tag="li" to="/" class="launcher" exact>
	            <i class="icon-dashboard"></i>
	            <a>控制台</a>
	          </router-link>
	          <router-link  tag="li" to="/addData" class="launcher">
	            <i class="icon-file-text-alt"></i>
	            <a>数据表单</a>
	          </router-link>
	          <router-link  tag="li" to="/admin" class="launcher">
	            <i class="icon-table icon-large"></i>
	            <a>管理员</a>
	          </router-link>
	          <router-link  tag="li" to="/article" class="launcher">
	            <i class="icon-table icon-large"></i>
	            <a>博文</a>
	          </router-link>
	          <router-link  tag="li" to="/user" class="launcher">
	            <i class="icon-table icon-large"></i>
	            <a>用户</a>
	          </router-link>
	          <router-link  tag="li" to="/comment" class="launcher">
	            <i class="icon-table icon-large"></i>
	            <a>评论</a>
	          </router-link>
	          <li class="launcher dropdown hover">
	            <i class="icon-flag"></i>
	            <a href="#">Reports</a>
	            <!-- <ul class="dropdown-menu">
	              <li class="dropdown-header">Launcher description</li>
	              <li>
	                <a href="#">Action</a>
	              </li>
	              <li>
	                <a href="#">Another action</a>
	              </li>
	              <li>
	                <a href="#">Something else here</a>
	              </li>
	            </ul> -->
	          </li>
	          <li class="launcher">
	            <i class="icon-bookmark"></i>
	            <a href="#">Bookmarks</a>
	          </li>
	          <li class="launcher">
	            <i class="icon-cloud"></i>
	            <a href="#">Backup</a>
	          </li>
	          <li class="launcher">
	            <i class="icon-bug"></i>
	            <a href="#">Feedback</a>
	          </li>
	        </ul>
	        <div data-toggle="tooltip" id="beaker" title="" data-original-title="Made by lab2023"></div>
	    </section>
	   	<section id="tools">
	        <ul class="breadcrumb" id="breadcrumb">
	          <li class="title">Tables</li>
	          <li><a href="#">Lorem</a></li>
	          <li class="active"><a href="#">ipsum</a></li>
	        </ul>
	        <!-- <div id="toolbar">
	          <div class="btn-group">
	            <a class="btn" data-toggle="toolbar-tooltip" href="#" title="" data-original-title="Building">
	              <i class="icon-building"></i>
	            </a>
	            <a class="btn" data-toggle="toolbar-tooltip" href="#" title="" data-original-title="Laptop">
	              <i class="icon-laptop"></i>
	            </a>
	            <a class="btn" data-toggle="toolbar-tooltip" href="#" title="" data-original-title="Calendar">
	              <i class="icon-calendar"></i>
	              <span class="badge">3</span>
	            </a>
	            <a class="btn" data-toggle="toolbar-tooltip" href="#" title="" data-original-title="Lemon">
	              <i class="icon-lemon"></i>
	            </a>
	          </div>
	        </div> -->
	    </section>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>