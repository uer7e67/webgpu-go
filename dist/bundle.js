/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shaders_wgsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shaders.wgsl */ \"./src/shaders.wgsl\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nif (navigator.gpu) {\n    console.log(\"支持WEB GPU\");\n}\nelse {\n    console.log(\"不支持WEB GPU\");\n}\nfunction aaa() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const adapter = yield navigator.gpu.requestAdapter();\n        const device = yield adapter.requestDevice();\n        console.log(device);\n        const format = \"bgra8unorm\";\n        const canvas = document.getElementById(\"gfx-main\");\n        if (!canvas) {\n            console.log(\" ================ canvas is null ============= \");\n            return;\n        }\n        const context = canvas.getContext(\"webgpu\");\n        if (!context) {\n            return;\n        }\n        const bindGroupLayout = device.createBindGroupLayout({\n            entries: [],\n        });\n        const bindGroup = device.createBindGroup({\n            layout: bindGroupLayout,\n            entries: []\n        });\n        const pipelineLayout = device.createPipelineLayout({\n            bindGroupLayouts: [bindGroupLayout]\n        });\n        const pipeline = device.createRenderPipeline({\n            vertex: {\n                module: device.createShaderModule({\n                    code: _shaders_wgsl__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n                }),\n                entryPoint: \"vs_main\"\n            },\n            fragment: {\n                module: device.createShaderModule({\n                    code: _shaders_wgsl__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n                }),\n                entryPoint: \"fs_main\",\n                targets: [{\n                        format: format\n                    }]\n            },\n            primitive: {\n                topology: \"triangle-list\"\n            },\n            layout: pipelineLayout\n        });\n        const commandEncoder = device.createCommandEncoder();\n        const textureView = context.getCurrentTexture().createView();\n        const renderpass = commandEncoder.beginRenderPass({\n            colorAttachments: [{\n                    view: textureView,\n                    clearValue: { r: 0.5, g: 0.0, b: 0.25, a: 1.0 },\n                    loadOp: \"clear\",\n                    storeOp: \"store\"\n                }]\n        });\n        renderpass.setPipeline(pipeline);\n        renderpass.setBindGroup(0, bindGroup);\n        renderpass.draw(3, 1, 0, 0);\n        renderpass.end();\n        device.queue.submit([commandEncoder.finish()]);\n    });\n}\naaa();\n\n\n//# sourceURL=webpack://webgpu/./src/index.ts?");

/***/ }),

/***/ "./src/shaders.wgsl":
/*!**************************!*\
  !*** ./src/shaders.wgsl ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"struct Fragment {\\r\\n    @builtin(position) Position : vec4<f32>,\\r\\n    @location(0) Color : vec4<f32>\\r\\n};\\r\\n\\r\\n@vertex\\r\\nfn vs_main(@builtin(vertex_index) v_id: u32) -> Fragment {\\r\\n\\r\\n    //pre-bake positions and colors, for now.\\r\\n    var positions = array<vec2<f32>, 3> (\\r\\n        vec2<f32>( 0.0,  0.5),\\r\\n        vec2<f32>(-0.5, -0.5),\\r\\n        vec2<f32>( 0.5, -0.5)\\r\\n    );\\r\\n\\r\\n    var colors = array<vec3<f32>, 3> (\\r\\n        vec3<f32>(1.0, 0.0, 0.0),\\r\\n        vec3<f32>(0.0, 1.0, 0.0),\\r\\n        vec3<f32>(0.0, 0.0, 1.0)\\r\\n    );\\r\\n\\r\\n    var output : Fragment;\\r\\n    output.Position = vec4<f32>(positions[v_id], 0.0, 1.0);\\r\\n    output.Color = vec4<f32>(colors[v_id], 1.0);\\r\\n\\r\\n    return output;\\r\\n}\\r\\n\\r\\n@fragment\\r\\nfn fs_main(@location(0) Color: vec4<f32>) -> @location(0) vec4<f32> {\\r\\n    return Color;\\r\\n}\");\n\n//# sourceURL=webpack://webgpu/./src/shaders.wgsl?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;