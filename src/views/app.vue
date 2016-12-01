<style>

</style>

<template>
	<div>
		{{message}}
		{{count}}
		<mdl-button @click.native="testMdl">asdjakl</mdl-button>
		
		<div id="wrapper">
      	<!-- Sidebar -->
      <section id="sidebar">
        <i class="icon-align-justify icon-large" id="toggle"></i>
        <ul id="dock">
          <li class="launcher">
            <i class="icon-dashboard"></i>
            <a href="dashboard.html">Dashboard</a>
          </li>
          <li class="launcher">
            <i class="icon-file-text-alt"></i>
            <a href="forms.html">Forms</a>
          </li>
          <li class="active launcher">
            <i class="icon-table"></i>
            <a href="tables.html">Tables</a>
          </li>
          <li class="launcher dropdown hover">
            <i class="icon-flag"></i>
            <a href="#">Reports</a>
            <ul class="dropdown-menu">
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
            </ul>
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
        <div id="toolbar">
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
        </div>
      </section>
    </div>
	</div>
</template>

<script>
	export default {
		created() {
			console.log("created");
		},
		mounted() {
			console.log("mounted");
			console.log(this.$el);
		},
		data() {
			return {
				message: 'Hello World',
				count: 0
			}
		},
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {

			testMdl() {
				alert("mdl");
				console.log(this.$store);
				this.$store.commit('increment');
			}
		},
		components: {
			
		}
	}
</script>