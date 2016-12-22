'use strict';

class MaskPropertyGroupObject extends C2J.PropertyGroupObject {
  constructor(obj) {
    super(obj);

    // native props
    this.maskMode = obj.maskMode;
    if(obj.inverted) this.inverted = obj.inverted;
    if(obj.rotoBezier) this.rotoBezier = obj.rotoBezier;
    if(obj.maskMotionBlur) this.maskMotionBlur = obj.maskMotionBlur;
    if(obj.locked) this.locked = obj.locked;
    this.color = obj.color;
    this.maskFeatherFalloff = obj.maskFeatherFalloff;
  }
}

C2J.MaskPropertyGroupObject = MaskPropertyGroupObject;
