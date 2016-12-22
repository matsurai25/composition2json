'use strict';

class CameraLayerObject extends C2J.AVLayerObject {
  constructor(obj) {
    super(obj);

    this.type = 'CameraLayerObject';
    // PropertyObjects
    var cameraOptions = C2J.getObject(obj("ADBE Camera Options Group"));
    if(obj("ADBE Camera Options Group").isModified) this.cameraOptions = cameraOptions;

  }

  // methods
}

C2J.CameraLayerObject = CameraLayerObject;
