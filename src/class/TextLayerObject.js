'use strict';

class TextLayerObject extends C2J.AVLayerObject {
  constructor(obj) {
    super(obj);

    this.type = 'TextLayerObject';

    // PropertyObjects
    var text = C2J.getObject(obj("ADBE Text Properties"));
    if(obj("ADBE Text Properties").isModified) this.text = text;

  }

  // methods
}

C2J.TextLayerObject = TextLayerObject;
