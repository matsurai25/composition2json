'use strict';

class FolderItemObject extends C2J.ItemObject {
  constructor(obj) {
    super(obj);

    // native props
    this.items = obj.items;
    this.numItems = obj.numItems;

    // native methods
    this.item = obj.item;

  }

  // methods
}

C2J.FolderItemObject = FolderItemObject;
