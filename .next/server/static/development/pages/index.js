module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./componentes/Header.js":
/*!*******************************!*\
  !*** ./componentes/Header.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_Header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/Header.scss */ "./componentes/styles/Header.scss");
/* harmony import */ var _styles_Header_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "@material-ui/icons/ExitToApp");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-burger-menu */ "react-burger-menu");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Riano\\Documents\\Javier\\NextJsKiosco\\componentes\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class Header extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  handleLogOut() {
    console.log("entrei aqui ");

    if (this.props.isloged) {
      const action = {
        type: "DO_LOGIN",
        value: false
      };
      this.props.dispatch(action);
    }
  }

  headersingOut() {
    if (this.props.isloged != null || this.props.isloged != false) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("input", {
        className: "inputLogout",
        id: "icon-button-file",
        type: "button",
        onClick: this.handleLogOut.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "icon-button-file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "exit",
        color: "primary",
        "aria-label": "upload picture",
        component: "span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: {
          color: "#8f8f8f"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }))));
    }
  }

  render() {
    console.log("Header props " + JSON.stringify(this.props));
    return __jsx("div", {
      className: "Header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__["scaleRotate"], {
      pageWrapId: "page-wrap",
      outerContainerId: "outer-container",
      customBurgerIcon: __jsx("img", {
        src: __webpack_require__(/*! ./image/menu.png */ "./componentes/image/menu.png"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("a", {
      id: "home",
      className: "menu-item",
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "  Home"), __jsx("a", {
      id: "maquinas",
      className: "menu-item",
      href: "/maquinas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "  Maquinas"), __jsx("a", {
      id: "transacciones",
      className: "menu-item",
      href: "/transacciones",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "  Transacciones")), __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "APP de control Kioscos "), this.headersingOut());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(state => state)(Header));

/***/ }),

/***/ "./componentes/LoginFormulario.js":
/*!****************************************!*\
  !*** ./componentes/LoginFormulario.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PlantillaG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlantillaG */ "./componentes/PlantillaG.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Riano\\Documents\\Javier\\NextJsKiosco\\componentes\\LoginFormulario.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const stylebutton = {
  background: "#e95a0c",
  borderRadius: 3,
  border: 0,
  color: 'white',
  width: '100%',
  height: 48,
  padding: '0 10px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  // marginLeft: 20,
  marginTop: 5 // marginRight: 20

};

class LoginFormulario extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static getInitialProps({
    store,
    isServer,
    pathname,
    query
  }) {
    store.dispatch({
      type: 'DO_LOGIN',
      value: null
    }); // component will be able to read from store's state when rendered

    return {
      custom: 'custom'
    }; // you can pass some custom props to component from here
  }

  constructor(props) {
    super(props);
    this.state = {
      isloged: this.props.isloged,
      usuario: "",
      pass: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlepasswordChange = this.handlepasswordChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      usuario: event.target.value
    });
  }

  handlepasswordChange(event) {
    this.setState({
      pass: event.target.value
    });
  }

  _login(data) {
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://transcar.appspot.com/usuarios/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log("Reponse" + JSON.stringify(res));
      return res;
    }).catch(err => err);
  }

  handlelogin() {
    //var HttpStatus = require('http-status-codes');
    var _userdata = {
      user_passwd: this.state.usuario + "_" + this.state.pass
    };

    this._login(_userdata).then(res => {
      console.log(res);

      if (res.status == 201) {
        const action = {
          type: "DO_LOGIN",
          value: true
        };
        this.props.dispatch(action);
        console.log("Usuario logeado ok");
      }

      if (res.status == http_status_codes__WEBPACK_IMPORTED_MODULE_4__["FORBIDDEN"]) {
        console.log("Error pasword");
        const action = {
          type: "DO_LOGIN",
          value: false
        };
        this.props.dispatch(action);
      }

      if (res.status == http_status_codes__WEBPACK_IMPORTED_MODULE_4__["INTERNAL_SERVER_ERROR"]) {
        const action = {
          type: "DO_LOGIN",
          value: false
        };
        this.props.dispatch(action);
        console.log("usuario no existe");
      }

      return res;
    }).catch(err => err);
  }

  render() {
    return __jsx(_PlantillaG__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "Inicio de sesion para el acceso a la BD "), __jsx("table", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Usuario"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      value: this.state.usuario,
      onChange: this.handleNameChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }))), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "Contrase\xF1a"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("input", {
      type: "password",
      value: this.state.pass,
      onChange: this.handlepasswordChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }))), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "contained",
      style: stylebutton,
      onClick: this.handlelogin.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "iniciar sesion"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => state)(LoginFormulario));

/***/ }),

/***/ "./componentes/PiedePagina.js":
/*!************************************!*\
  !*** ./componentes/PiedePagina.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Riano\\Documents\\Javier\\NextJsKiosco\\componentes\\PiedePagina.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const PiedePagina = () => __jsx("div", {
  className: "piedePag",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "el footer del a  aplicacion");

/* harmony default export */ __webpack_exports__["default"] = (PiedePagina);

/***/ }),

/***/ "./componentes/PlantillaG.js":
/*!***********************************!*\
  !*** ./componentes/PlantillaG.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_PlantillaG_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/PlantillaG.scss */ "./componentes/styles/PlantillaG.scss");
/* harmony import */ var _styles_PlantillaG_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_PlantillaG_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./componentes/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PiedePagina__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PiedePagina */ "./componentes/PiedePagina.js");
var _jsxFileName = "C:\\Users\\Riano\\Documents\\Javier\\NextJsKiosco\\componentes\\PlantillaG.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const PlantillaG = props => {
  const tituloWebApp = "TransCaribe Admin";
  return __jsx("div", {
    className: "plantillaG",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "TransCaribe"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("div", {
    id: "outer-container",
    className: "Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("img", {
    className: "imgLogo",
    src: __webpack_require__(/*! ./image/logotras.png */ "./componentes/image/logotras.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("main", {
    id: "page-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, props.children)), __jsx(_PiedePagina__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PlantillaG);

/***/ }),

/***/ "./componentes/image/logotras.png":
/*!****************************************!*\
  !*** ./componentes/image/logotras.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAABiCAMAAABJReA0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzlDMUI3Njk5N0M2MTFFNDk4REJDNzgyNEFFODRFM0EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzlDMUI3NkE5N0M2MTFFNDk4REJDNzgyNEFFODRFM0EiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OUMxQjc2Nzk3QzYxMUU0OThEQkM3ODI0QUU4NEUzQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3OUMxQjc2ODk3QzYxMUU0OThEQkM3ODI0QUU4NEUzQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkgIH3MAAAGAUExURfGYaPOjd9HR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"

/***/ }),

/***/ "./componentes/image/menu.png":
/*!************************************!*\
  !*** ./componentes/image/menu.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkAhIBLAtu8OdRAAAAxElEQVRIx2NgGGjAyMBQKsHQyeDM8Jth44+6yZ9INqBQmuU8gyiUd5PbpOELA0Maq0A1Q+R/UQJ6X/1f/qmNhbUPSaH6lxqGCgYGvsb/lURYLsjYwM/G9N8DRdCDgYGBgSmBaB8kMWET/f+faAP+MjFsRwmS7QwMDAz/FxJtwEIWxqL/jgxiUO6N/y0MDAwMn+r5fjJGwkVxBiLDMu42RgaGUon/HYzODL8ZNzLUdX0m2u5BA0ZT4mhKHBxgNCWOpsTBAQD2RY0iXEIBigAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMi0xOFQwMTo0NDoxMSswMDowMILkNVgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDItMThUMDE6NDQ6MTErMDA6MDDzuY3kAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./componentes/styles/Header.scss":
/*!****************************************!*\
  !*** ./componentes/styles/Header.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./componentes/styles/PlantillaG.scss":
/*!********************************************!*\
  !*** ./componentes/styles/PlantillaG.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _componentes_PlantillaG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componentes/PlantillaG */ "./componentes/PlantillaG.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-table */ "material-table");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/AddBox */ "@material-ui/icons/AddBox");
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "@material-ui/icons/ArrowDownward");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Clear */ "@material-ui/icons/Clear");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/DeleteOutline */ "@material-ui/icons/DeleteOutline");
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "@material-ui/icons/FilterList");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/FirstPage */ "@material-ui/icons/FirstPage");
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/LastPage */ "@material-ui/icons/LastPage");
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Remove */ "@material-ui/icons/Remove");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/SaveAlt */ "@material-ui/icons/SaveAlt");
/* harmony import */ var _material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/ViewColumn */ "@material-ui/icons/ViewColumn");
/* harmony import */ var _material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _componentes_LoginFormulario__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../componentes/LoginFormulario */ "./componentes/LoginFormulario.js");
var _jsxFileName = "C:\\Users\\Riano\\Documents\\Javier\\NextJsKiosco\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

























const tableIcons = {
  Add: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }))),
  Check: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }))),
  Clear: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }))),
  Delete: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_9___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }))),
  DetailPanel: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }))),
  Edit: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }))),
  Export: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_15___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }))),
  Filter: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_11___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }))),
  FirstPage: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_12___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }))),
  LastPage: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_13___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }))),
  NextPage: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }))),
  PreviousPage: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }))),
  ResetSearch: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }))),
  Search: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }))),
  SortArrow: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }))),
  ThirdStateCheck: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_14___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }))),
  ViewColumn: Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(_material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_17___default.a, _extends({}, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })))
};
const stylebutton = {
  background: "#e95a0c",
  borderRadius: 3,
  border: 0,
  color: 'white',
  width: '100%',
  height: 48,
  padding: '0 10px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  // marginLeft: 20,
  marginTop: 5 // marginRight: 20

};

class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      columns: [{
        title: "Id Maquina",
        field: "id_maquina"
      }, {
        title: "Nombre Maquina",
        field: "nombre"
      }, {
        title: "Ip Maquina",
        field: "ip_maquina"
      }, {
        title: "No Tarjetas",
        field: "n_tarjetas"
      }],
      maquinas: [],
      isloged: this.props.isloged
    };

    this._loadMaquinas();
  }

  async _loadMaquinas() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_19___default()('https://transcar.appspot.com/maquinas/');
    const data = await res.json(); //console.log(`Show data fetched. Count: ${data.length}`  );

    this.setState({
      maquinas: [...this.state.maquinas, ...data] // une autre sintaxys  films: this.state.films.concat(data.results)
      // films: data.results,  // une autre sintaxys  films: this.state.films.concat(data.results)

    }); //  console.log("Rowsusu"+this.state.numRows)
  }

  renderbassedonLoginState() {
    console.log("HOla soy las propps" + this.props.isloged);

    if (!this.props.isloged) {
      return __jsx(_componentes_LoginFormulario__WEBPACK_IMPORTED_MODULE_22__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      });
    } else {
      return __jsx(_componentes_PlantillaG__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx(material_table__WEBPACK_IMPORTED_MODULE_2___default.a, {
        icons: tableIcons,
        title: "Kioscos Transcaribe",
        columns: this.state.columns,
        data: this.state.maquinas,
        actions: [{
          icon: _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_18___default.a,
          tooltip: 'Ver Detalle',
          onClick: (event, rowData) => //alert("You saved " + rowData.name)window.location.href
          window.location.href = `/maquina/${rowData.nombre}`
        }],
        editable: {
          /* onRowAdd: newData =>
             new Promise(resolve => {
               setTimeout(() => {
                 resolve();
                 this.setState(prevState => {
                   const data = [...prevState.data];
                   data.push(newData);
                   return { ...prevState, data };
                 });
               }, 600);
             }),
           onRowUpdate: (newData, oldData) =>
             new Promise(resolve => {
               setTimeout(() => {
                 resolve();
                 if (oldData) {
                   this.setState(prevState => {
                     const data = [...prevState.data];
                     data[data.indexOf(oldData)] = newData;
                     return { ...prevState, data };
                   });
                 }
               }, 600);
             }),*/
          onRowDelete: oldData => new Promise(resolve => {
            setTimeout(() => {
              resolve();
              this.setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return _objectSpread({}, prevState, {
                  data
                });
              });
            }, 600);
          })
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }));
    }
  }

  render() {
    console.log("Islog : " + this.props.isloged);
    console.log("REndericze el index");
    return this.renderbassedonLoginState();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_20__["connect"])(state => state)(Index));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Riano\Documents\Javier\NextJsKiosco\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/AddBox":
/*!********************************************!*\
  !*** external "@material-ui/icons/AddBox" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddBox");

/***/ }),

/***/ "@material-ui/icons/ArrowDownward":
/*!***************************************************!*\
  !*** external "@material-ui/icons/ArrowDownward" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDownward");

/***/ }),

/***/ "@material-ui/icons/Check":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Check" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/Clear":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Clear" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Clear");

/***/ }),

/***/ "@material-ui/icons/DeleteOutline":
/*!***************************************************!*\
  !*** external "@material-ui/icons/DeleteOutline" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DeleteOutline");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "@material-ui/icons/ExitToApp":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ExitToApp" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "@material-ui/icons/FilterList":
/*!************************************************!*\
  !*** external "@material-ui/icons/FilterList" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterList");

/***/ }),

/***/ "@material-ui/icons/FirstPage":
/*!***********************************************!*\
  !*** external "@material-ui/icons/FirstPage" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FirstPage");

/***/ }),

/***/ "@material-ui/icons/LastPage":
/*!**********************************************!*\
  !*** external "@material-ui/icons/LastPage" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LastPage");

/***/ }),

/***/ "@material-ui/icons/Remove":
/*!********************************************!*\
  !*** external "@material-ui/icons/Remove" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Remove");

/***/ }),

/***/ "@material-ui/icons/SaveAlt":
/*!*********************************************!*\
  !*** external "@material-ui/icons/SaveAlt" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SaveAlt");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/icons/ViewColumn":
/*!************************************************!*\
  !*** external "@material-ui/icons/ViewColumn" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewColumn");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "material-table":
/*!*********************************!*\
  !*** external "material-table" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-table");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-burger-menu":
/*!************************************!*\
  !*** external "react-burger-menu" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map