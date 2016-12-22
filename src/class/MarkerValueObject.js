'use strict';

class MarkerValueObject extends C2J.BaseObject {
  constructor(obj) {
    super(obj);
    if(!_.isEmpty(obj.comment)) this.comment = obj.comment;
    if(!_.isEmpty(obj.duration)) this.duration = obj.duration;
    if(!_.isEmpty(obj.chapter)) this.chapter = obj.chapter;
    if(!_.isEmpty(obj.cuePointName)) this.cuePointName = obj.cuePointName;
    if(!_.isEmpty(obj.eventCuePoint)) this.eventCuePoint = obj.eventCuePoint;
    if(!_.isEmpty(obj.url)) this.url = obj.url;
    if(!_.isEmpty(obj.frameTarget)) this.frameTarget = obj.frameTarget;
  }
}

C2J.MarkerValueObject = MarkerValueObject;
