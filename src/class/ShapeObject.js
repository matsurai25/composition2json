'use strict';

class ShapeObject extends C2J.BaseObject {
  constructor(obj) {
    super(obj);

    // native props
    this.closed = obj.closed;
    this.vertices = obj.vertices;
    this.inTangents = obj.inTangents;
    this.outTangents = obj.outTangents;
    if(!_.isEmpty(obj.featherSegLocs)) this.featherSegLocs = obj.featherSegLocs;
    if(!_.isEmpty(obj.featherRelSegLocs)) this.featherRelSegLocs = obj.featherRelSegLocs;
    if(!_.isEmpty(obj.featherRadii)) this.featherRadii = obj.featherRadii;
    if(!_.isEmpty(obj.featherInterps)) this.featherInterps = obj.featherInterps;
    if(!_.isEmpty(obj.featherTensions)) this.featherTensions = obj.featherTensions;
    if(!_.isEmpty(obj.featherTypes)) this.featherTypes = obj.featherTypes;
    if(!_.isEmpty(obj.featherRelCornerAngles)) this.featherRelCornerAngles = obj.featherRelCornerAngles;
  }
}

C2J.ShapeObject = ShapeObject;
