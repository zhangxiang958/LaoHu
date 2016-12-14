<style>
	.addItem {
		display: block;
		z-index: 999;
	}
	.hideAdd {
		display: none;
	}
</style>

<template>
	<div id="content" class="addItem" v-bind:class="{ hideAdd: notAdding }">
		<a class="back" @click="toBack"> backToTable </a>
		<div class="panel panel-default" >
          <div class="panel-heading">
            <i class="icon-edit icon-large"></i>
            {{ tableTitle }}
          </div>
          <div class="panel-body">
            <form>
              <fieldset>
                <legend>Default Inputs</legend>
                <div class="form-group" v-for="(val, key) in tableHeader">
                	<label class="control-label">{{ key }}</label>
                  	<textarea class="form-control" rows="4"  v-if="key == ''" v-on:input="changeValue($event, key)"></textarea>
                  	<input class="form-control" placeholder="null" type="text" v-else v-on:input="changeValue($event, key)">                	
                </div>
              </fieldset>
              <div class="form-actions">
                <button class="btn btn-default" type="submit" @click="addThis">Submit</button>
                <a class="btn" @click="toBack">Cancel</a>
              </div>
            </form>
          </div>
        </div>
	</div>
</template>

<script>
	export default {
		props: ['tableHeader', "notAdding"],
		mounted() {
		},
		data() {
			return {
				editItem: {}
			}
		},
		methods: {
			changeValue(event, key) {
				this.editItem = this.tableHeader;
				// console.log(event);
				// console.log(event.target.value);
				// console.log(key);
				// console.log(this.editItem[key]);

				this.editItem[key] = event.target.value;

				console.log(this.editItem);
			},
			toBack() {
				this.$emit('toBack');
			},
			addThis() {
				if(JSON.stringify(this.editItem) == "{}") {
					alert("请修改数据项");
					return;
				} else {
					this.$emit('add', this.editItem);
				}
			}
		}
	}
</script>