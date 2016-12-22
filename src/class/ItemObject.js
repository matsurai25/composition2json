'use strict';

class ItemObject extends C2J.BaseObject {
  constructor(obj) {
    super(obj);

    // native props
    this.name = obj.name;
    if(!_.isEmpty(obj.comment)) this.comment = obj.comment;
    this.id = obj.id;
    // this.parentFolder = obj.parentFolder;
    // this.selected = obj.selected;
    // this.typeName = obj.typeName;
    // this.label = obj.label;

    // native methods
    // this.remove = obj.remove;

  }

  // methods
}

C2J.ItemObject = ItemObject;
