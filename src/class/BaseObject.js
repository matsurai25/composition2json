'use strict';

class BaseObject {
  constructor() {
  }

  getProps(){
    var props = [];
    for (var key in this) {
      if (!this.hasOwnProperty(key) || typeof this[key] == 'function') {
        continue;
      }
      props.push(key);
    }
    return props;
  }
  getMethods(){
    var methods = [];
    for (var key in this) {
      if (!this.hasOwnProperty(key) || typeof this[key] !== 'function') {
        continue;
      }
      methods.push(key);
    }
    return methods;
  }
}

C2J.BaseObject = BaseObject;
