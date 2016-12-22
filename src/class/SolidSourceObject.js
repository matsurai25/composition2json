'use strict';

class SolidSourceObject extends C2J.FootageSourceObject {
  constructor(obj) {
    super(obj);

    // native props
    this.type = 'SolidSourceObject';
    this.color = obj.color;

  }

}

C2J.SolidSourceObject = SolidSourceObject;
