'use strict';

const util = {
  json: function(anything){
    if(anything === null || anything === 'undifiend') return null;
    return JSON.stringify(anything, null, '    ');
  },
  getType: function(anything){
    if(anything === null || anything === 'undifiend') return null;
    var objstr = String(anything);
    if(objstr.match(/\[object (.*)\]/)){
      return objstr.match(/\[object (.*)\]/)[1];
    }
    return objstr;
  },
  getObject: function(anything){
    if(anything === null || anything === 'undifiend') return null;
    var type = C2J.getType(anything);
    if(C2J[`${type}Object`]){
      return new C2J[`${type}Object`](anything);
    }
    return null;
  },
  getPropertyValue: function(obj){
    switch (obj.propertyValueType) {
      case PropertyValueType.TEXT_DOCUMENT:
        return new C2J.TextDocumentObject(obj.value);
      case PropertyValueType.SHAPE:
        return new C2J.ShapeObject(obj.value);
      case PropertyValueType.NO_VALUE:
        return null;
      default:
        return obj.value;
    }
  }
};

// C2Jに含める
_.extend(C2J, util);
