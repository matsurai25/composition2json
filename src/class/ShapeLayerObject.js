'use strict';

class ShapeLayerObject extends C2J.AVLayerObject {
  constructor(obj) {
    super(obj);

    this.type = 'ShapeLayerObject';

    // PropertyObjects
    var contents = C2J.getObject(obj("ADBE Root Vectors Group"));
    if(obj("ADBE Root Vectors Group").isModified) this.contents = contents;

  }

  // methods
}

C2J.ShapeLayerObject = ShapeLayerObject;
