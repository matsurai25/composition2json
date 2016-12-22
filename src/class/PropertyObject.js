'use strict';

class PropertyObject extends C2J.PropertyBaseObject {
  constructor(obj) {
    super(obj);

    // native props
    // this.propertyValueType = obj.propertyValueType;
    var value = C2J.getPropertyValue(obj);
    if(!_.isNull(value)) this.value = value;
    // this.hasMin = obj.hasMin;
    // this.hasMax = obj.hasMax;
    // this.minValue = this.hasMin ? obj.minValue : null;
    // this.maxValue = this.hasMax ? obj.maxValue : null;
    // this.isSpatial = obj.isSpatial;
    // this.canVaryOverTime = obj.canVaryOverTime;
    // this.isTimeVarying = obj.isTimeVarying;
    // if (obj.numKeys > 0) this.numKeys = obj.numKeys;
    // this.unitsText = obj.unitsText;
    if (obj.expression) this.expression = obj.expression;
    // this.canSetExpression = obj.canSetExpression;
    if (obj.expressionEnabled) this.expressionEnabled = obj.expressionEnabled;
    // this.expressionError = obj.expressionError;
    // this.selectedKeys = obj.selectedKeys;
    // this.propertyIndex = obj.propertyIndex;
    // this.dimensionsSeparated = obj.dimensionsSeparated;
    // this.isSeparationFollower = obj.isSeparationFollower;
    // this.isSeparationLeader = obj.isSeparationLeader;
    // this.separationDimension = this.isSeparationFollower ? obj.separationDimension : null;
    // this.separationLeader = this.isSeparationLeader ? obj.separationLeader : null;

    // native methods
    // this.valueAtTime = obj.valueAtTime;
    // this.setValue = obj.setValue;
    // this.setValueAtTime = obj.setValueAtTime;
    // this.setValuesAtTimes = obj.setValuesAtTimes;
    // this.setValueAtKey = obj.setValueAtKey;
    // this.nearestKeyIndex = obj.nearestKeyIndex;
    // this.keyTime = obj.keyTime;
    // this.keyValue = obj.keyValue;
    // this.addKey = obj.addKey;
    // this.removeKey = obj.removeKey;
    // this.isInterpolationTypeValid = obj.isInterpolationTypeValid;
    // this.setInterpolationTypeAtKey = obj.setInterpolationTypeAtKey;
    // this.keyInInterpolationType = obj.keyInInterpolationType;
    // this.keyOutInterpolationType = obj.keyOutInterpolationType;
    // this.setSpatialTangentsAtKey = obj.setSpatialTangentsAtKey;
    // this.keyInSpatialTangent = obj.keyInSpatialTangent;
    // this.keyOutSpatialTangent = obj.keyOutSpatialTangent;
    // this.setTemporalEaseAtKey = obj.setTemporalEaseAtKey;
    // this.keyInTemporalEase = obj.keyInTemporalEase;
    // this.keyOutTemporalEase = obj.keyOutTemporalEase;
    // this.setTemporalContinuousAtKey = obj.setTemporalContinuousAtKey;
    // this.keyTemporalContinuous = obj.keyTemporalContinuous;
    // this.setTemporalAutoBezierAtKey = obj.setTemporalAutoBezierAtKey;
    // this.keyTemporalAutoBezier = obj.keyTemporalAutoBezier;
    // this.setSpatialContinuousAtKey = obj.setSpatialContinuousAtKey;
    // this.keySpatialContinuous = obj.keySpatialContinuous;
    // this.setSpatialAutoBezierAtKey = obj.setSpatialAutoBezierAtKey;
    // this.keySpatialAutoBezier = obj.keySpatialAutoBezier;
    // this.setRovingAtKey = obj.setRovingAtKey;
    // this.keyRoving = obj.keyRoving;
    // this.setSelectedAtKey = obj.setSelectedAtKey;
    // this.keySelected = obj.keySelected;
    // this.getSeparationFollower = obj.getSeparationFollower;

    // get keyframes
    if(obj.numKeys > 0){
      delete this.value;
      this.keys = [];
      for (var i = 1; i <= obj.numKeys; i++) {
        var key = {
          time: obj.keyTime(i),
          value: C2J.getPropertyValue(obj.keyValue(i))
        };
        // マーカー
        if(C2J.getType(obj.keyValue(i)) !== 'Object'){
          // キーフレームだけ
          if(obj.propertyValueType === PropertyValueType.ThreeD_SPATIAL || obj.propertyValueType === PropertyValueType.TwoD_SPATIAL){
            key.in = obj.keyInSpatialTangent(i);
            key.out = obj.keyOutSpatialTangent(i);
          }else{
            key.in = obj.keyInTemporalEase(i);
            key.out = obj.keyOutTemporalEase(i);
          }
        }
        this.keys.push(key);
      }
    }
  }

}

C2J.PropertyObject = PropertyObject;
