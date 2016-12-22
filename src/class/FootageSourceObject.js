'use strict';

class FootageSourceObject extends C2J.BaseObject {
  constructor(obj) {
    super(obj);

    // native props
    this.hasAlpha = obj.hasAlpha;
    this.alphaMode = obj.alphaMode;
    // this.premulColor = obj.premulColor;
    // this.invertAlpha = obj.invertAlpha;
    this.isStill = obj.isStill;
    // this.fieldSeparationType = obj.fieldSeparationType;
    // this.highQualityFieldSeparation = obj.highQualityFieldSeparation;
    // this.removePulldown = obj.removePulldown;
    // this.loop = obj.loop;
    // this.nativeFrameRate = obj.nativeFrameRate;
    // this.displayFrameRate = obj.displayFrameRate;
    // this.conformFrameRate = obj.conformFrameRate;

    // native methods
    this.guessAlphaMode = obj.guessAlphaMode;
    this.guessPulldown = obj.guessPulldown;
  }

  // methods
}

C2J.FootageSourceObject = FootageSourceObject;
