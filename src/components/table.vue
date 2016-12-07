<style>
	table {
		table-layout: fixed;
		word-break: break-all; 
		word-wrap: break-word;
	}
	td {
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow:ellipsis;
		-o-text-overflow:ellipsis;
		-moz-text-overflow: ellipsis;
		-webkit-text-overflow: ellipsis;
	}
</style>

<template>
	<div id="content">
        <div class="panel panel-default grid">
          <div class="panel-heading">
            <i class="icon-table icon-large"></i>
            {{ tableName }}
            <div class="panel-tools">
              <div class="btn-group">
                <a class="btn" href="#">
                  <i class="icon-wrench"></i>
                  Settings
                </a>
                <a class="btn" href="#">
                  <i class="icon-filter"></i>
                  Filters
                </a>
                <a class="btn" data-toggle="toolbar-tooltip" href="#" title="" data-original-title="Reload">
                  <i class="icon-refresh"></i>
                </a>
              </div>
              <div class="badge">3 record</div>
            </div>
          </div>
          <div class="panel-body filters">
            <div class="row">
              <div class="col-md-9">
                Add your custom filters here...
              </div>
              <div class="col-md-3">
                <div class="input-group">
                  <input class="form-control" placeholder="Quick search..." type="text">
                  <span class="input-group-btn">
                    <button class="btn" type="button">
                      <i class="icon-search"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
              	<th v-for="item in tableHeader">
              		<div class="td-container">
                		{{ item }}
              		</div>
                </th>
                <th class="actions">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
            	<!-- success/danger/warning/active/disabled -->
              <tr v-for="item in tableBody">
                <td v-for="value in item">
                	{{ value }}
                </td>
                <td class="action">
                  <a class="btn btn-success" data-toggle="tooltip" href="#" title="" data-original-title="Zoom">
                    <i class="icon-zoom-in"></i>
                  </a>
                  <a class="btn btn-info" href="#">
                    <i class="icon-edit"></i>
                  </a>
                  <a class="btn btn-danger" href="#">
                    <i class="icon-trash"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="panel-footer">
            <ul class="pagination pagination-sm">
              <li>
                <a href="#">«</a>
              </li>
              <li class="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">6</a>
              </li>
              <li>
                <a href="#">7</a>
              </li>
              <li>
                <a href="#">8</a>
              </li>
              <li>
                <a href="#">»</a>
              </li>
            </ul>
            <div class="pull-right">
              Showing 1 to 10 of 32 entries
            </div>
          </div>
        </div>
    </div>
</template>

<script>
	export default {
		props: ['tableName', 'tableHeader', 'tableBody'],
		mounted() {
		},
		data() {
			return {

			}
		}
	}
</script>