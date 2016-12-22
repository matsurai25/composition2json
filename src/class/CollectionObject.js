'use strict';

class CollectionObject extends C2J.BaseObject {
  constructor(obj) {
    super(obj);

    // native props
    this.length = obj.length;

  }

  // methods
}

C2J.CollectionObject = CollectionObject;
