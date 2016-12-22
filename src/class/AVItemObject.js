'use strict';

class AVItemObject extends C2J.ItemObject {
  constructor(obj) {
    super(obj);

    // native props
    this.width = obj.width;
    this.height = obj.height;
    if(obj.pixelAspect != 1) this.pixelAspect = obj.pixelAspect;
    this.frameRate = obj.frameRate;
    if(obj.frameDuration != 1) this.frameDuration = obj.frameDuration;
    this.duration = obj.duration;
    if(obj.useProxy) this.useProxy = obj.useProxy;
    if(obj.useProxy) this.proxySource = C2J.getObject(obj.proxySource);
    // this.time = obj.time;
    // this.usedIn = obj.usedIn;
    if(!obj.hasVideo) this.hasVideo = obj.hasVideo;
    if(obj.hasAudio) this.hasAudio = obj.hasAudio;
    if(obj.footageMissing) this.footageMissing = obj.footageMissing;

    // native methods
    this.setProxy = obj.setProxy;
    this.setProxyWithSequence = obj.setProxyWithSequence;
    this.setProxyWithSolid = obj.setProxyWithSolid;
    this.setProxyWithPlaceholder = obj.setProxyWithPlaceholder;
    this.setProxyToNone = obj.setProxyToNone;

  }

  // methods
}
C2J.AVItemObject = AVItemObject;
