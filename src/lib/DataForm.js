webpackJsonp([2,8],{

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(51)

	/* script */
	__vue_exports__ = __webpack_require__(53)

	/* template */
	var __vue_template__ = __webpack_require__(54)
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
	__vue_options__.__file = "/home/jarvis/Workspace/knowledgeSystem/app/src/views/addDataFrom/addData.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-03664300", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-03664300", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] addData.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(32)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-03664300!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./addData.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-03664300!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./addData.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports


	// module
	exports.push([module.id, "\n\n", ""]);

	// exports


/***/ },

/***/ 53:
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
		data: function data() {
			return {};
		}
	};

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;
	  return _vm._h('div', {
	    attrs: {
	      "id": "content"
	    }
	  }, [_vm._h('div', {
	    staticClass: "panel panel-default"
	  }, [_vm._h('div', {
	    staticClass: "panel-heading"
	  }, [_vm._h('i', {
	    staticClass: "icon-edit icon-large"
	  }), "\n            Form Default\n          "]), " ", _vm._h('div', {
	    staticClass: "panel-body"
	  }, [_vm._h('form', [_vm._h('fieldset', [_vm._h('legend', ["Default Inputs"]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Text field"]), " ", _vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": "Enter username",
	      "type": "text"
	    }
	  })]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Password field"]), " ", _vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": "Enter password",
	      "type": "password"
	    }
	  })]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Input field with help"]), " ", _vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".help-block"
	    }
	  }), " ", _vm._h('p', {
	    staticClass: "help-block"
	  }, ["Example block-level help text here."])]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Disabled field"]), " ", _vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "disabled": "",
	      "placeholder": "This is field is disabled!"
	    }
	  })]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Tooltip field"]), " ", _vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "data-toggle": "tooltip",
	      "placeholder": "This is field is disabled!",
	      "title": "",
	      "data-original-title": "Input tips here"
	    }
	  })]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Textarea field"]), " ", _vm._h('textarea', {
	    staticClass: "form-control",
	    attrs: {
	      "rows": "4"
	    }
	  })]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["File input"]), " ", _vm._h('input', {
	    attrs: {
	      "type": "file"
	    }
	  })]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Large field"]), " ", _vm._h('input', {
	    staticClass: "form-control input-lg",
	    attrs: {
	      "placeholder": ".input-lg",
	      "type": "text"
	    }
	  })]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Small field"]), " ", _vm._h('input', {
	    staticClass: "form-control input-sm",
	    attrs: {
	      "placeholder": ".input-sm",
	      "type": "text"
	    }
	  })]), " ", _vm._h('div', {
	    staticClass: "form-group row"
	  }, [_vm._h('div', {
	    staticClass: "col-lg-2"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Column sizing"]), " ", _vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".col-lg-2",
	      "type": "text"
	    }
	  })]), " ", _vm._h('div', {
	    staticClass: "col-lg-3"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Column sizing"]), " ", _vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".col-lg-3",
	      "type": "text"
	    }
	  })]), " ", _vm._h('div', {
	    staticClass: "col-lg-7"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Column sizing"]), " ", _vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".col-lg-7",
	      "type": "text"
	    }
	  })])])]), " ", _vm._h('fieldset', [_vm._h('legend', ["Input Validation States"]), " ", _vm._h('div', {
	    staticClass: "form-group has-warning"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Input field with help"]), " ", _vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".has-warning"
	    }
	  }), " ", _vm._h('p', {
	    staticClass: "help-block"
	  }, ["Example block-level help text here."])]), " ", _vm._h('div', {
	    staticClass: "form-group has-error"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Input field with help"]), " ", _vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".has-error"
	    }
	  }), " ", _vm._h('p', {
	    staticClass: "help-block"
	  }, ["Example block-level help text here."])]), " ", _vm._h('div', {
	    staticClass: "form-group has-success"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Input field with help"]), " ", _vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".has-success"
	    }
	  }), " ", _vm._h('p', {
	    staticClass: "help-block"
	  }, ["Example block-level help text here."])])]), " ", _vm._h('fieldset', [_vm._h('legend', ["Checkboxes and radios"]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Checkbox"]), " ", _vm._h('div', {
	    staticClass: "checkbox"
	  }, [_vm._h('input', {
	    attrs: {
	      "type": "checkbox",
	      "value": ""
	    }
	  }), "\n                    Option one is this and that—be sure to include why it's great\n                  "])]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Inline checkbox"]), " ", _vm._h('br'), " ", _vm._h('div', {
	    staticClass: "checkbox-inline"
	  }, [_vm._h('input', {
	    attrs: {
	      "type": "checkbox",
	      "value": ""
	    }
	  }), "\n                    1\n                  "]), " ", _vm._h('div', {
	    staticClass: "checkbox-inline"
	  }, [_vm._h('input', {
	    attrs: {
	      "type": "checkbox",
	      "value": ""
	    }
	  }), "\n                    2\n                  "]), " ", _vm._h('div', {
	    staticClass: "checkbox-inline"
	  }, [_vm._h('input', {
	    attrs: {
	      "type": "checkbox",
	      "value": ""
	    }
	  }), "\n                    3\n                  "])]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Radio"]), " ", _vm._h('div', {
	    staticClass: "radio"
	  }, [_vm._h('input', {
	    attrs: {
	      "checked": "",
	      "name": "options_radio",
	      "type": "radio",
	      "value": "option1"
	    }
	  }), "\n                    Option one is this and that—be sure to include why it's great\n                    ", _vm._h('br'), " ", _vm._h('input', {
	    attrs: {
	      "checked": "",
	      "name": "options_radio",
	      "type": "radio",
	      "value": "option2"
	    }
	  }), "\n                    Option two can be something else and selecting it will deselect option one\n                  "])])]), " ", _vm._h('fieldset', [_vm._h('legend', ["Selects"]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Single select"]), " ", _vm._h('select', {
	    staticClass: "form-control"
	  }, [_vm._h('option', ["1"]), " ", _vm._h('option', ["2"]), " ", _vm._h('option', ["3"]), " ", _vm._h('option', ["4"]), " ", _vm._h('option', ["5"])])]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "control-label"
	  }, ["Multiple select"]), " ", _vm._h('select', {
	    staticClass: "form-control",
	    attrs: {
	      "multiple": ""
	    }
	  }, [_vm._h('option', ["1"]), " ", _vm._h('option', ["2"]), " ", _vm._h('option', ["3"]), " ", _vm._h('option', ["4"]), " ", _vm._h('option', ["5"])])])]), " ", _vm._h('div', {
	    staticClass: "form-actions"
	  }, [_vm._h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "submit"
	    }
	  }, ["Submit"]), " ", _vm._h('a', {
	    staticClass: "btn",
	    attrs: {
	      "href": "#"
	    }
	  }, ["Cancel"])])])])]), " ", _vm._h('div', {
	    staticClass: "panel panel-default"
	  }, [_vm._h('div', {
	    staticClass: "panel-heading"
	  }, [_vm._h('i', {
	    staticClass: "icon-edit icon-large"
	  }), "\n            Form Horizontal\n          "]), " ", _vm._h('div', {
	    staticClass: "panel-body"
	  }, [_vm._h('form', {
	    staticClass: "form-horizontal"
	  }, [_vm._h('fieldset', [_vm._h('legend', ["Default inputs"]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "col-lg-2 control-label"
	  }, ["Text field"]), " ", _vm._h('div', {
	    staticClass: "col-lg-10"
	  }, [_vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": "Enter username",
	      "type": "text"
	    }
	  })])]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "col-lg-2 control-label"
	  }, ["Password field"]), " ", _vm._h('div', {
	    staticClass: "col-lg-10"
	  }, [_vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": "Enter password",
	      "type": "password"
	    }
	  })])]), " ", _vm._h('div', {
	    staticClass: "form-group"
	  }, [_vm._h('label', {
	    staticClass: "col-lg-2 control-label"
	  }, ["Input field with help"]), " ", _vm._h('div', {
	    staticClass: "col-lg-10"
	  }, [_vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".help-block"
	    }
	  }), " ", _vm._h('p', {
	    staticClass: "help-block"
	  }, ["Example block-level help text here.%fieldset"])])]), " ", _vm._h('legend', ["Validation inputs"]), " ", _vm._h('div', {
	    staticClass: "form-group has-warning"
	  }, [_vm._h('label', {
	    staticClass: "col-lg-2 control-label"
	  }, ["Text field"]), " ", _vm._h('div', {
	    staticClass: "col-lg-10"
	  }, [_vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": "Enter username",
	      "type": "text"
	    }
	  })])]), " ", _vm._h('div', {
	    staticClass: "form-group has-error"
	  }, [_vm._h('label', {
	    staticClass: "col-lg-2 control-label"
	  }, ["Password field"]), " ", _vm._h('div', {
	    staticClass: "col-lg-10"
	  }, [_vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": "Enter password",
	      "type": "password"
	    }
	  })])]), " ", _vm._h('div', {
	    staticClass: "form-group has-success"
	  }, [_vm._h('label', {
	    staticClass: "col-lg-2 control-label"
	  }, ["Input field with help"]), " ", _vm._h('div', {
	    staticClass: "col-lg-10"
	  }, [_vm._h('input', {
	    staticClass: "form-control",
	    attrs: {
	      "placeholder": ".help-block"
	    }
	  }), " ", _vm._h('p', {
	    staticClass: "help-block"
	  }, ["Example block-level help text here."])])])]), " ", _vm._h('div', {
	    staticClass: "form-actions"
	  }, [_vm._h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "submit"
	    }
	  }, ["Save"]), " ", _vm._h('a', {
	    staticClass: "btn",
	    attrs: {
	      "href": "#"
	    }
	  }, ["Cancel"])])])])])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-03664300", module.exports)
	  }
	}

/***/ }

});