'use strict';

class LightLayerObject extends C2J.AVLayerObject {
  constructor(obj) {
    super(obj);

    // native props
    this.type = 'LightLayerObject';
    if(obj.lightType) this.lightType = obj.lightType;

    // PropertyObjects
    var lightOptions = C2J.getObject(obj("ADBE Light Options Group"));
    if(obj("ADBE Light Options Group").isModified) this.lightOptions = lightOptions;

  }

  // methods
}

C2J.LightLayerObject = LightLayerObject;
