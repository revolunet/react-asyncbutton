(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-asyncbutton"] = factory(require("react"));
	else
		root["react-asyncbutton"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _componentsAsyncButton = __webpack_require__(1);
	
	var _componentsAsyncButton2 = _interopRequireDefault(_componentsAsyncButton);

	exports['default'] = _componentsAsyncButton2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _browserRequest = __webpack_require__(3);
	
	var _browserRequest2 = _interopRequireDefault(_browserRequest);
	
	// button that fire a get request and display progress (aka poor man ladda button)
	
	var AsyncButton = (function (_Component) {
	  _inherits(AsyncButton, _Component);
	
	  _createClass(AsyncButton, null, [{
	    key: 'propTypes',
	    value: {
	      url: _react.PropTypes.string.isRequired,
	      title: _react.PropTypes.string,
	      labels: _react.PropTypes.object,
	      onError: _react.PropTypes.func,
	      onSuccess: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      title: '',
	      labels: {
	        'default': 'Click Me',
	        pending: 'Updating',
	        success: 'Done!',
	        error: 'Error'
	      }
	    },
	    enumerable: true
	  }, {
	    key: 'STATUS',
	    value: {
	      'default': 'default',
	      pending: 'pending',
	      success: 'success',
	      error: 'error'
	    },
	    enumerable: true
	  }]);
	
	  function AsyncButton() {
	    _classCallCheck(this, AsyncButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    _get(Object.getPrototypeOf(AsyncButton.prototype), 'constructor', this).apply(this, args);
	    this.state = {
	      status: AsyncButton.STATUS['default']
	    };
	    this.onClick = this.onClick.bind(this);
	  }
	
	  _createClass(AsyncButton, [{
	    key: 'onClick',
	    value: function onClick() {
	      var _this = this;
	
	      if (this.state.status === AsyncButton.STATUS.pending) {
	        return;
	      }
	      if (this.state.status === AsyncButton.STATUS.success || this.state.status === AsyncButton.STATUS.error) {
	        this.setState({
	          status: AsyncButton.STATUS['default']
	        });
	        return;
	      }
	      this.setState({
	        status: AsyncButton.STATUS.pending
	      }, function () {
	        // do req + success / failure
	        (0, _browserRequest2['default'])({
	          uri: _this.props.url,
	          method: 'GET',
	          json: true,
	          timeout: 30000
	        }, function (err, res) {
	          if (err) {
	            _this.setState({
	              status: AsyncButton.STATUS.error
	            });
	            if (_this.props.onError) {
	              _this.props.onError(err);
	            }
	          } else {
	            _this.setState({
	              status: AsyncButton.STATUS.success
	            });
	            if (_this.props.onSuccess) {
	              _this.props.onSuccess(res);
	            }
	          }
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var buttonStyle = {
	        fontSize: 14,
	        borderRadius: 5,
	        background: '#eee',
	        minWidth: 130
	      };
	      var disabled = this.state.status === AsyncButton.STATUS.pending;
	      var label = this.props.labels[this.state.status];
	      return _react2['default'].createElement(
	        'button',
	        {
	          title: this.props.title,
	          style: buttonStyle,
	          disabled: disabled,
	          onClick: this.onClick
	        },
	        label
	      );
	    }
	  }]);
	
	  return AsyncButton;
	})(_react.Component);
	
	exports['default'] = AsyncButton;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Browser Request
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//     http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	
	// UMD HEADER START 
	(function (root, factory) {
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like enviroments that support module.exports,
	        // like Node.
	        module.exports = factory();
	    } else {
	        // Browser globals (root is window)
	        root.returnExports = factory();
	  }
	}(this, function () {
	// UMD HEADER END
	
	var XHR = XMLHttpRequest
	if (!XHR) throw new Error('missing XMLHttpRequest')
	request.log = {
	  'trace': noop, 'debug': noop, 'info': noop, 'warn': noop, 'error': noop
	}
	
	var DEFAULT_TIMEOUT = 3 * 60 * 1000 // 3 minutes
	
	//
	// request
	//
	
	function request(options, callback) {
	  // The entry-point to the API: prep the options object and pass the real work to run_xhr.
	  if(typeof callback !== 'function')
	    throw new Error('Bad callback given: ' + callback)
	
	  if(!options)
	    throw new Error('No options given')
	
	  var options_onResponse = options.onResponse; // Save this for later.
	
	  if(typeof options === 'string')
	    options = {'uri':options};
	  else
	    options = JSON.parse(JSON.stringify(options)); // Use a duplicate for mutating.
	
	  options.onResponse = options_onResponse // And put it back.
	
	  if (options.verbose) request.log = getLogger();
	
	  if(options.url) {
	    options.uri = options.url;
	    delete options.url;
	  }
	
	  if(!options.uri && options.uri !== "")
	    throw new Error("options.uri is a required argument");
	
	  if(typeof options.uri != "string")
	    throw new Error("options.uri must be a string");
	
	  var unsupported_options = ['proxy', '_redirectsFollowed', 'maxRedirects', 'followRedirect']
	  for (var i = 0; i < unsupported_options.length; i++)
	    if(options[ unsupported_options[i] ])
	      throw new Error("options." + unsupported_options[i] + " is not supported")
	
	  options.callback = callback
	  options.method = options.method || 'GET';
	  options.headers = options.headers || {};
	  options.body    = options.body || null
	  options.timeout = options.timeout || request.DEFAULT_TIMEOUT
	
	  if(options.headers.host)
	    throw new Error("Options.headers.host is not supported");
	
	  if(options.json) {
	    options.headers.accept = options.headers.accept || 'application/json'
	    if(options.method !== 'GET')
	      options.headers['content-type'] = 'application/json'
	
	    if(typeof options.json !== 'boolean')
	      options.body = JSON.stringify(options.json)
	    else if(typeof options.body !== 'string')
	      options.body = JSON.stringify(options.body)
	  }
	  
	  //BEGIN QS Hack
	  var serialize = function(obj) {
	    var str = [];
	    for(var p in obj)
	      if (obj.hasOwnProperty(p)) {
	        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
	      }
	    return str.join("&");
	  }
	  
	  if(options.qs){
	    var qs = (typeof options.qs == 'string')? options.qs : serialize(options.qs);
	    if(options.uri.indexOf('?') !== -1){ //no get params
	        options.uri = options.uri+'&'+qs;
	    }else{ //existing get params
	        options.uri = options.uri+'?'+qs;
	    }
	  }
	  //END QS Hack
	  
	  //BEGIN FORM Hack
	  var multipart = function(obj) {
	    //todo: support file type (useful?)
	    var result = {};
	    result.boundry = '-------------------------------'+Math.floor(Math.random()*1000000000);
	    var lines = [];
	    for(var p in obj){
	        if (obj.hasOwnProperty(p)) {
	            lines.push(
	                '--'+result.boundry+"\n"+
	                'Content-Disposition: form-data; name="'+p+'"'+"\n"+
	                "\n"+
	                obj[p]+"\n"
	            );
	        }
	    }
	    lines.push( '--'+result.boundry+'--' );
	    result.body = lines.join('');
	    result.length = result.body.length;
	    result.type = 'multipart/form-data; boundary='+result.boundry;
	    return result;
	  }
	  
	  if(options.form){
	    if(typeof options.form == 'string') throw('form name unsupported');
	    if(options.method === 'POST'){
	        var encoding = (options.encoding || 'application/x-www-form-urlencoded').toLowerCase();
	        options.headers['content-type'] = encoding;
	        switch(encoding){
	            case 'application/x-www-form-urlencoded':
	                options.body = serialize(options.form).replace(/%20/g, "+");
	                break;
	            case 'multipart/form-data':
	                var multi = multipart(options.form);
	                //options.headers['content-length'] = multi.length;
	                options.body = multi.body;
	                options.headers['content-type'] = multi.type;
	                break;
	            default : throw new Error('unsupported encoding:'+encoding);
	        }
	    }
	  }
	  //END FORM Hack
	
	  // If onResponse is boolean true, call back immediately when the response is known,
	  // not when the full request is complete.
	  options.onResponse = options.onResponse || noop
	  if(options.onResponse === true) {
	    options.onResponse = callback
	    options.callback = noop
	  }
	
	  // XXX Browsers do not like this.
	  //if(options.body)
	  //  options.headers['content-length'] = options.body.length;
	
	  // HTTP basic authentication
	  if(!options.headers.authorization && options.auth)
	    options.headers.authorization = 'Basic ' + b64_enc(options.auth.username + ':' + options.auth.password);
	
	  return run_xhr(options)
	}
	
	var req_seq = 0
	function run_xhr(options) {
	  var xhr = new XHR
	    , timed_out = false
	    , is_cors = is_crossDomain(options.uri)
	    , supports_cors = ('withCredentials' in xhr)
	
	  req_seq += 1
	  xhr.seq_id = req_seq
	  xhr.id = req_seq + ': ' + options.method + ' ' + options.uri
	  xhr._id = xhr.id // I know I will type "_id" from habit all the time.
	
	  if(is_cors && !supports_cors) {
	    var cors_err = new Error('Browser does not support cross-origin request: ' + options.uri)
	    cors_err.cors = 'unsupported'
	    return options.callback(cors_err, xhr)
	  }
	
	  xhr.timeoutTimer = setTimeout(too_late, options.timeout)
	  function too_late() {
	    timed_out = true
	    var er = new Error('ETIMEDOUT')
	    er.code = 'ETIMEDOUT'
	    er.duration = options.timeout
	
	    request.log.error('Timeout', { 'id':xhr._id, 'milliseconds':options.timeout })
	    return options.callback(er, xhr)
	  }
	
	  // Some states can be skipped over, so remember what is still incomplete.
	  var did = {'response':false, 'loading':false, 'end':false}
	
	  xhr.onreadystatechange = on_state_change
	  xhr.open(options.method, options.uri, true) // asynchronous
	  if(is_cors)
	    xhr.withCredentials = !! options.withCredentials
	  xhr.send(options.body)
	  return xhr
	
	  function on_state_change(event) {
	    if(timed_out)
	      return request.log.debug('Ignoring timed out state change', {'state':xhr.readyState, 'id':xhr.id})
	
	    request.log.debug('State change', {'state':xhr.readyState, 'id':xhr.id, 'timed_out':timed_out})
	
	    if(xhr.readyState === XHR.OPENED) {
	      request.log.debug('Request started', {'id':xhr.id})
	      for (var key in options.headers)
	        xhr.setRequestHeader(key, options.headers[key])
	    }
	
	    else if(xhr.readyState === XHR.HEADERS_RECEIVED)
	      on_response()
	
	    else if(xhr.readyState === XHR.LOADING) {
	      on_response()
	      on_loading()
	    }
	
	    else if(xhr.readyState === XHR.DONE) {
	      on_response()
	      on_loading()
	      on_end()
	    }
	  }
	
	  function on_response() {
	    if(did.response)
	      return
	
	    did.response = true
	    request.log.debug('Got response', {'id':xhr.id, 'status':xhr.status})
	    clearTimeout(xhr.timeoutTimer)
	    xhr.statusCode = xhr.status // Node request compatibility
	
	    // Detect failed CORS requests.
	    if(is_cors && xhr.statusCode == 0) {
	      var cors_err = new Error('CORS request rejected: ' + options.uri)
	      cors_err.cors = 'rejected'
	
	      // Do not process this request further.
	      did.loading = true
	      did.end = true
	
	      return options.callback(cors_err, xhr)
	    }
	
	    options.onResponse(null, xhr)
	  }
	
	  function on_loading() {
	    if(did.loading)
	      return
	
	    did.loading = true
	    request.log.debug('Response body loading', {'id':xhr.id})
	    // TODO: Maybe simulate "data" events by watching xhr.responseText
	  }
	
	  function on_end() {
	    if(did.end)
	      return
	
	    did.end = true
	    request.log.debug('Request done', {'id':xhr.id})
	
	    xhr.body = xhr.responseText
	    if(options.json) {
	      try        { xhr.body = JSON.parse(xhr.responseText) }
	      catch (er) { return options.callback(er, xhr)        }
	    }
	
	    options.callback(null, xhr, xhr.body)
	  }
	
	} // request
	
	request.withCredentials = false;
	request.DEFAULT_TIMEOUT = DEFAULT_TIMEOUT;
	
	//
	// defaults
	//
	
	request.defaults = function(options, requester) {
	  var def = function (method) {
	    var d = function (params, callback) {
	      if(typeof params === 'string')
	        params = {'uri': params};
	      else {
	        params = JSON.parse(JSON.stringify(params));
	      }
	      for (var i in options) {
	        if (params[i] === undefined) params[i] = options[i]
	      }
	      return method(params, callback)
	    }
	    return d
	  }
	  var de = def(request)
	  de.get = def(request.get)
	  de.post = def(request.post)
	  de.put = def(request.put)
	  de.head = def(request.head)
	  return de
	}
	
	//
	// HTTP method shortcuts
	//
	
	var shortcuts = [ 'get', 'put', 'post', 'head' ];
	shortcuts.forEach(function(shortcut) {
	  var method = shortcut.toUpperCase();
	  var func   = shortcut.toLowerCase();
	
	  request[func] = function(opts) {
	    if(typeof opts === 'string')
	      opts = {'method':method, 'uri':opts};
	    else {
	      opts = JSON.parse(JSON.stringify(opts));
	      opts.method = method;
	    }
	
	    var args = [opts].concat(Array.prototype.slice.apply(arguments, [1]));
	    return request.apply(this, args);
	  }
	})
	
	//
	// CouchDB shortcut
	//
	
	request.couch = function(options, callback) {
	  if(typeof options === 'string')
	    options = {'uri':options}
	
	  // Just use the request API to do JSON.
	  options.json = true
	  if(options.body)
	    options.json = options.body
	  delete options.body
	
	  callback = callback || noop
	
	  var xhr = request(options, couch_handler)
	  return xhr
	
	  function couch_handler(er, resp, body) {
	    if(er)
	      return callback(er, resp, body)
	
	    if((resp.statusCode < 200 || resp.statusCode > 299) && body.error) {
	      // The body is a Couch JSON object indicating the error.
	      er = new Error('CouchDB error: ' + (body.error.reason || body.error.error))
	      for (var key in body)
	        er[key] = body[key]
	      return callback(er, resp, body);
	    }
	
	    return callback(er, resp, body);
	  }
	}
	
	//
	// Utility
	//
	
	function noop() {}
	
	function getLogger() {
	  var logger = {}
	    , levels = ['trace', 'debug', 'info', 'warn', 'error']
	    , level, i
	
	  for(i = 0; i < levels.length; i++) {
	    level = levels[i]
	
	    logger[level] = noop
	    if(typeof console !== 'undefined' && console && console[level])
	      logger[level] = formatted(console, level)
	  }
	
	  return logger
	}
	
	function formatted(obj, method) {
	  return formatted_logger
	
	  function formatted_logger(str, context) {
	    if(typeof context === 'object')
	      str += ' ' + JSON.stringify(context)
	
	    return obj[method].call(obj, str)
	  }
	}
	
	// Return whether a URL is a cross-domain request.
	function is_crossDomain(url) {
	  var rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/
	
	  // jQuery #8138, IE may throw an exception when accessing
	  // a field from window.location if document.domain has been set
	  var ajaxLocation
	  try { ajaxLocation = location.href }
	  catch (e) {
	    // Use the href attribute of an A element since IE will modify it given document.location
	    ajaxLocation = document.createElement( "a" );
	    ajaxLocation.href = "";
	    ajaxLocation = ajaxLocation.href;
	  }
	
	  var ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || []
	    , parts = rurl.exec(url.toLowerCase() )
	
	  var result = !!(
	    parts &&
	    (  parts[1] != ajaxLocParts[1]
	    || parts[2] != ajaxLocParts[2]
	    || (parts[3] || (parts[1] === "http:" ? 80 : 443)) != (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? 80 : 443))
	    )
	  )
	
	  //console.debug('is_crossDomain('+url+') -> ' + result)
	  return result
	}
	
	// MIT License from http://phpjs.org/functions/base64_encode:358
	function b64_enc (data) {
	    // Encodes string using MIME base64 algorithm
	    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, enc="", tmp_arr = [];
	
	    if (!data) {
	        return data;
	    }
	
	    // assume utf8 data
	    // data = this.utf8_encode(data+'');
	
	    do { // pack three octets into four hexets
	        o1 = data.charCodeAt(i++);
	        o2 = data.charCodeAt(i++);
	        o3 = data.charCodeAt(i++);
	
	        bits = o1<<16 | o2<<8 | o3;
	
	        h1 = bits>>18 & 0x3f;
	        h2 = bits>>12 & 0x3f;
	        h3 = bits>>6 & 0x3f;
	        h4 = bits & 0x3f;
	
	        // use hexets to index into b64, and append result to encoded string
	        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
	    } while (i < data.length);
	
	    enc = tmp_arr.join('');
	
	    switch (data.length % 3) {
	        case 1:
	            enc = enc.slice(0, -2) + '==';
	        break;
	        case 2:
	            enc = enc.slice(0, -1) + '=';
	        break;
	    }
	
	    return enc;
	}
	    return request;
	//UMD FOOTER START
	}));
	//UMD FOOTER END


/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map