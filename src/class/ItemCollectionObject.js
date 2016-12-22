'use strict';

class ItemCollectionObject extends C2J.CollectionObject {
  constructor(obj) {
    super(obj);

    // native props
    this.addFolder = function(name){
      return C2J.getObject(obj.addFolder(name));
    };
    this.addComp = function(option){
      return C2J.getObject(obj.addComp(name));
    };

  }

  // methods
}

C2J.ItemCollectionObject = ItemCollectionObject;
