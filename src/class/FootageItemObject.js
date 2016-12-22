'use strict';

class FootageItemObject extends C2J.AVItemObject{
  constructor(obj) {
    super(obj);
    // native props
    if(obj.file) this.file = obj.file;
    this.mainSource = C2J.getObject(obj.mainSource);

    // native methods
    // this.replace = obj.replace;
    // this.replaceWithSequence = obj.replaceWithSequence;
    // this.replaceWithPlaceholder = obj.replaceWithPlaceholder;
    // this.replaceWithSolid = obj.replaceWithSolid;
    // this.openInViewer = obj.openInViewer;

  }

  // methods
}

C2J.FootageItemObject = FootageItemObject;
