<style>
	.detail {
		display: block;
		z-index: 999;
	}
	.hideDetail {
		display: none;
	}
	.back {
		display: inline-block;
	    margin-bottom: 15px;
	    padding: 6px 12px;
	    border-color: #cccccc;
	    background-color: white;
	    color: #333333;
	    font-weight: normal;
	    text-align: center;
	    vertical-align: middle;
	    cursor: pointer;
	    background-image: none;
	    border: 1px solid #cccccc;
	    white-space: nowrap;
	    padding: 6px 12px;
	    font-size: 14px;
	    line-height: 1.428571429;
	    border-radius: 4px;
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	}
</style>

<template>
	<div id="content" class="detail" v-bind:class="{ hideDetail: notChecking }">
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
                <div class="form-group" v-for="(val, key) in itemData">
                	<label class="control-label">{{ key }}</label>
                  	<input class="form-control" placeholder="null" type="text" :value="val" :disabled="!toEdit" v-if="val.length < 300">
                  	<textarea class="form-control" rows="4" :value="val" :disabled="!toEdit" v-else ></textarea>
                </div>
               <!--  <div class="form-group">
                  <label class="control-label">Textarea field</label>
                  <textarea class="form-control" rows="4"></textarea>
                </div> -->
                <!-- <div class="form-group">
                  <label class="control-label">Large field</label>
                  <input class="form-control input-lg" placeholder=".input-lg" type="text">
                </div>
                <div class="form-group">
                  <label class="control-label">Small field</label>
                  <input class="form-control input-sm" placeholder=".input-sm" type="text">
                </div>
                <div class="form-group row">
                  <div class="col-lg-2">
                    <label class="control-label">Column sizing</label>
                    <input class="form-control" placeholder=".col-lg-2" type="text">
                  </div>
                </div> -->
              </fieldset>
              <!-- <fieldset>
                <legend>Input Validation States</legend>
                <div class="form-group has-warning">
                  <label class="control-label">Input field with help</label>
                  <input class="form-control" placeholder=".has-warning">
                  <p class="help-block">Example block-level help text here.</p>
                </div>
                <div class="form-group has-error">
                  <label class="control-label">Input field with help</label>
                  <input class="form-control" placeholder=".has-error">
                  <p class="help-block">Example block-level help text here.</p>
                </div>
                <div class="form-group has-success">
                  <label class="control-label">Input field with help</label>
                  <input class="form-control" placeholder=".has-success">
                  <p class="help-block">Example block-level help text here.</p>
                </div>
              </fieldset> -->
              <!-- <fieldset>
                <legend>Selects</legend>
                <div class="form-group">
                  <label class="control-label">Single select</label>
                  <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="control-label">Multiple select</label>
                  <select class="form-control" multiple="">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </fieldset> -->
              <div class="form-actions" v-if="toEdit">
                <button class="btn btn-default" type="submit" @click="saveIt">Submit</button>
                <a class="btn" @click="toBack">Cancel</a>
              </div>
            </form>
          </div>
        </div>
	</div>
</template>

<script>
	export default {
		props: ['tableTitle', 'itemData', "notChecking", 'toEdit'],
		data() {
			return {

			}
		},
		methods: {
			toBack() {
				this.$emit('toBack');
			},
			saveIt() {
				this.$emit('saveIt');
			}
		}
	}
</script>