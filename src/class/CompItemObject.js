'use strict';

class CompItemObject extends C2J.AVItemObject {
  constructor(obj) {
    super(obj);

    // native props

    this.frameDuration = obj.frameDuration;
    if(obj.dropFrame) this.dropFrame = obj.dropFrame;
    // this.workAreaStart = obj.workAreaStart;
    // this.workAreaDuration = obj.workAreaDuration;
    // this.numLayers = obj.numLayers;
    if(obj.hideShyLayers) this.hideShyLayers = obj.hideShyLayers;
    if(obj.motionBlur) this.motionBlur = obj.motionBlur;
    if(obj.draft3d) this.draft3d = obj.draft3d;
    if(obj.frameBlending) this.frameBlending = obj.frameBlending;
    if(obj.preserveNestedFrameRate) this.preserveNestedFrameRate = obj.preserveNestedFrameRate;
    if(obj.preserveNestedResolution) this.preserveNestedResolution = obj.preserveNestedResolution;
    // this.bgColor = obj.bgColor;
    // this.activeCamera = obj.activeCamera;
    this.displayStartTime = obj.displayStartTime;
    // this.resolutionFactor = obj.resolutionFactor;
    // this.shutterAngle = obj.shutterAngle;
    // this.shutterPhase = obj.shutterPhase;
    // this.motionBlurSamplesPerFrame = obj.motionBlurSamplesPerFrame;
    // this.motionBlurAdaptiveSampleLimit = obj.motionBlurAdaptiveSampleLimit;
    // this.layers = obj.layers;
    // this.selectedLayers = obj.selectedLayers;
    // this.selectedProperties = obj.selectedProperties;
    this.renderer = obj.renderer;
    // this.renderers = obj.renderers;

    // native methods
    // this.duplicate = obj.duplicate;
    // this.layer = obj.layer;
    // this.openInViewer = obj.openInViewer;

    this.layers = [];
    for (var i = 1; i <= obj.numLayers; i++) {
      var o = obj.layer(i);
      this.layers.push(C2J.getObject(o));
    }

  }

  // methods
}

C2J.CompItemObject = CompItemObject;
