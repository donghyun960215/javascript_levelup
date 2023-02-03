// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/array.js":[function(require,module,exports) {
var numbers = [1, 2, 3, 4];
var fruits = ['Apple', 'Banana', 'Cherry'];

// .length()
// 배열 안에 갯수확인
// console.log(numbers.length)
// console.log(fruits.length)
// console.log([1,2].length)
// console.log([].length)

// .concat()
// 원본에 배열데이터에는 손상이 없으며 합쳐져서 새로운 배열데이터가 생긴다
// console.log(numbers.concat(fruits))
// console.log(numbers)
// console.log(fruits)

//.forEach()
//.forEach메소드가 붙어있는 배열데이터의 아이템갯수 만큼 콜백함수가 반복적으로 실행된다.
// 따로 반환되는 값은 없다.
// fruits.forEach(function (item, index, array) {
//   console.log(item, index ,array)
// })

// .map
// 인수로 사용하는 콜백에 내부에서 반환하는 하나의 데이터를 가지고
// 그 데이터드를 모아놓은 새로운 데이터를 만들어 반환한다. 원본 데이터의 변환 없이.
// const a = fruits.forEach(function (fruit, index) {
//   console.log(`${fruit} - ${index}`)
// })
// console.log(a)

// const b = fruits.map(function (fruit, index){
//   // return `${fruit} - ${index}`
//   return {
//   id: index,
//   name: fruit
//   }
// })
// console.log(b)

// 화살표 함수 사용 
// const a = fruits.forEach( (fruit, index) => {
//   console.log(`${fruit} - ${index}`)
// })
// console.log(a)

// const b = fruits.map( (fruit, index) => ({
//   id: index,
//   name: fruit
//   }))
// console.log(b)

// .filter()
// 배열데이터 안에 들어있는 각각의 아이템들을 특정한 기준에 의해서 필터링을 한다
// 원본데이터의 변화없이 필터된 새로운 데이터를 반환한다
// 
// const a = numbers.map(number => number < 3)
// console.log(a)
// const b = numbers.filter(number => number < 3)
// console.log(b)

// .find() findIndex()
// .find() 콜백 내에서 몬가를 찾으면 반복이 멈춘다. 그 찾아진 배열의 아이템이 반환이된다.
// .findIndex() 찾아진 배열의 index 반환
// const a = fruits.find(function(fruit){
//   return /^C/.test(fruit)
// })
// console.log(a)
// const b = fruits.findIndex(fruit =>  /^C/.test(fruit))
// console.log(b)

// .includes()
// 배열데이터 부분에 인수로사용된 특정한데이터가 포함이 되어있는지 확인하는메소드
// const a = numbers.includes(3)
// console.log(a)
// const b = fruits.includes('Dong')
// console.log(b)

// .push() .unshift()
// 원본 수정됨 주의!!!
// .push() 사용되는 배열에 가장 뒤에 특정한 인수 내용을 밀어 넣는다.
// .unshift() 사용되는 배열에 가장 앞에 특정한 인수 내용을 밀어 넣는다.
// numbers.push(5)
// console.log(numbers)
// numbers.unshift(0)
// console.log(numbers)

// .reverse()
// 원본 수정됨 주의!
// 배열데이터를 거꾸로 뒤집는다.
// numbers.reverse()
// fruits.reverse()
// console.log(numbers)
// console.log(fruits)

// .splice()
// 원본 수정됨 주의!

// 첫번째 인수 번호에서 아이템 두번째인수만큼 지워라
// numbers.splice(2, 1)
// 인덱스 번호 2번에서 아이템을 1개만 지워라

// numbers.splice(2, 0, 999)
// 인덱스 번호 2번에서 아이템을 0개만 지워라(변환없음),그리고 999를 끼워넣어라

//특정한 인덱스 번호의 아이템을 제거하는 용도로도 사용되는데 그 자리에다가 끼워넣는 용도로 
// 사용도 가능하다

// console.log(numbers)

// fruits.splice(2, 0, 'dong')
// console.log(fruits)
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64454" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/array.js"], null)
//# sourceMappingURL=/array.f5726e9c.js.map