webpackJsonp([1,2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(14)

	/* script */
	__vue_exports__ = __webpack_require__(16)

	/* template */
	var __vue_template__ = __webpack_require__(17)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/jarvis/Workspace/knowledgeSystem/app/src/views/login/login.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3bb0cfb2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3bb0cfb2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] login.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3bb0cfb2!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3bb0cfb2!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "\n.login-wrapper {\n\t    margin: 10% auto;\n\t\tpadding: 20px;\n\t    border: 1px solid rgba(0,0,0,0.3);\n\t    width: 300px;\n\t    background-color: #ecf0f1;\n\t    border-radius: 15px;\n\t    -webkit-border-radius: 15px;\n\t    -moz-border-radius: 15px;\n\t    -ms-border-radius: 15px;\n\t    -o-border-radius: 15px;\n\t    box-shadow: 0 0 0 2px rgba(0,0,0,0.04);\n\t    -webkit-box-shadow: 0 0 0 2px rgba(0,0,0,0.04);\n}\n.login-row {\n\t\tmargin-left: -15px;\n    \tmargin-right: -15px;\n}\n.login-row h3 {\n\t\tcolor: #2c3e50;;\n\t\ttext-align: center;\n}\n.login-row h5 {\n\t\tmargin: 0 auto;\n\t\tmargin-bottom: 15px;\n\t\twidth: 80%;\n\t\tborder-bottom: 1px solid rgba(0, 0, 0, .1);\n\t\ttext-align: center;\n}\n.logo-icon {\n\t\tposition: relative;\n    \tmargin: auto;\n    \tpadding: 15px;\n\t\twidth: 75px;\n    \theight: 75px;\n    \tborder-radius: 50%;\n    \tbackground: #2c3e50;\n}\n.logo-icon i[class*='icon-'] {\n\t\tposition: absolute;\n\t\tleft: 50%;\n\t\ttop: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t    display: inline;\n\t    color: #1abc9c;\n\t    font-size: 140%;\n\t    line-height: normal;\n\t    vertical-align: baseline;\n\t    background-image: none;\n\t    background-position: 0% 0%;\n\t    background-repeat: repeat;\n\t    font-weight: normal;\n\t    font-style: normal;\n\t    text-decoration: inherit;\n\t    -webkit-font-smoothing: antialiased;\n}\n.icon-beer:before {\n\t\tcontent: \"ADMIN\";\n    \tdisplay: inline-block;\n\t\ttext-decoration: inherit;\n    \tcursor: default;\n    \tspeak: none;\n}\n.form-container {\n\t\tmargin: 0 auto;\n\t\twidth: 80%;\n\t\tpadding: 10px;\n\t\ttext-align: center;\n}\n.form-wrapper {\n\t\twidth: 90%;\n}\n.form-control {\n\t\tdisplay: block;\n\t\tmargin-bottom: 10px;\n\t    padding: 6px 12px;\n\t    width: 100%;\n\t    height: 34px;\n\t    font-size: 14px;\n\t    line-height: 1.428571429;\n\t    color: #555555;\n\t    background-color: white;\n\t    background-image: none;\n\t    border: 1px solid #cccccc;\n\t    border-radius: 4px;\n\t    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n\t    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n\t    -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n\t    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n\t    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.sign {\n\t\tdisplay: inline-block;\n\t    margin-bottom: 15px;\n\t\tpadding: 6px 12px;\n    \tborder-color: #cccccc;\n    \tbackground-color: white;\n\t\tcolor: #333333;\n\t    font-weight: normal;\n\t    text-align: center;\n\t    vertical-align: middle;\n\t    cursor: pointer;\n\t    background-image: none;\n\t    border: 1px solid transparent;\n\t    white-space: nowrap;\n\t    padding: 6px 12px;\n\t    font-size: 14px;\n\t    line-height: 1.428571429;\n\t    border-radius: 4px;\n\t    -webkit-user-select: none;\n\t    -moz-user-select: none;\n\t    -ms-user-select: none;\n\t    user-select: none;\n}\n.checkbox {\n\t\tdisplay: inline-block;\n    \tmax-width: 100%;\n    \tmargin-bottom: 15px;\n\t\tpadding-left: 20px;\n\t\tfont-size: 14px;\n    \tfont-weight: normal;\n    \tcursor: pointer;\n}\n", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		created: function created() {},
		mounted: function mounted() {},
		data: function data() {
			return {};
		},

		components: {}
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "login-wrapper"
	  }, [_vm._h('div', {
	    staticClass: "login-row"
	  }, [_vm._h('div', {
	    staticClass: "logo-icon"
	  }, [_vm._h('i', {
	    staticClass: "icon-beer"
	  })]), " ", _vm._h('h3', ["LaoHu"])]), " ", _vm._h('div', {
	    staticClass: "login-row"
	  }, [_vm._h('h5', ["Login to Your Account"]), " ", _vm._h('form', {
	    staticClass: "form-container"
	  }, [_vm._h('fieldset', [_vm._h('div', {
	    staticClass: "form-wrapper"
	  }, [_vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": "Account",
	      "type": "text"
	    }
	  })]), " ", _vm._h('div', {
	    staticClass: "form-wrapper"
	  }, [_vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": "Password",
	      "type": "password"
	    }
	  })]), " ", _vm._h('div', [_vm._h('div', {
	    staticClass: "checkbox"
	  }, [_vm._h('label', [_vm._h('input', {
	    attrs: {
	      "type": "checkbox"
	    }
	  }), "\n\t                    Remember me on this computer\n\t                  "])]), " ", _vm._h('a', {
	    staticClass: "sign"
	  }, ["Sign in"]), " ", _vm._h('br'), " ", _vm._h('a', ["Forgot password?"])])])])])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3bb0cfb2", module.exports)
	  }
	}

/***/ }
]);