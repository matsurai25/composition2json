'use strict';

// make namespace
$.global.window = {}; // for escape error
$.global.C2J = global.C2J = {};

// make modern environment
$.global.Object = {};
try {
  require('es5-shim/es5-shim.min.js');
  require('es5-shim/es5-sham.min.js');
} catch (error) {
  // ExtendScriptはすべてのグローバル変数を次回実行時も記憶している。
  // es5-shimでグローバルのDateオブジェクトをprototype拡張するが、次回実行時も保持したままになっている。
  // その関係で、2度目の読み込みでDate.prototype.toISOStringが例外を投げる。
  $.writeln('Caught an error:', error);
}

$.global._ = window._ = require('underscore');
$.global.JSON = require('JSON2');

// class
require('./loader.js');

// start mainstream

require('../src/main.js');
