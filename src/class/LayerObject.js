'use strict';

class LayerObject extends C2J.BaseObject {
  constructor(obj) {
    super(obj);

    // native props
    this.index = obj.index;
    this.name = obj.name;
    if(!_.isEmpty(obj.parent)) this.parent = obj.parent.index;
    // this.time = obj.time;
    if(!_.isEmpty(obj.startTime)) this.startTime = obj.startTime;
    if(obj.stretch !== 100) this.stretch = obj.stretch;
    if(!_.isEmpty(obj.inPoint)) this.inPoint = obj.inPoint;
    if(!_.isEmpty(obj.outPoint)) this.outPoint = obj.outPoint;
    // this.enabled = obj.enabled;
    if(obj.solo) this.solo = obj.solo;
    if(obj.shy) this.shy = obj.shy;
    // this.locked = obj.locked;
    // this.hasVideo = obj.hasVideo;
    // this.active = obj.active;
    if(obj.nullLayer) this.nullLayer = obj.nullLayer;
    // this.selectedProperties = obj.selectedProperties;
    if(!_.isEmpty(obj.comment)) this.comment = obj.comment;
    // this.containingComp = obj.containingComp;
    // this.isNameSet = obj.isNameSet;

    // native methods
    // this.remove = obj.remove;
    // this.moveToBeginning = obj.moveToBeginning;
    // this.moveToEnd = obj.moveToEnd;
    // this.moveAfter = obj.moveAfter;
    // this.moveBefore = obj.moveBefore;
    // this.duplicate = obj.duplicate;
    // this.copyToComp = obj.copyToComp;
    // this.activeAtTime = obj.activeAtTime;
    // this.setParentWithJump = obj.setParentWithJump;
    // this.applyPreset = obj.applyPreset;

  }

  // methods
}

C2J.LayerObject = LayerObject;
