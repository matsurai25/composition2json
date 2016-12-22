'use strict';

class TextDocumentObject extends C2J.BaseObject {
  constructor(obj) {
    super(obj);

    // native props
    this.text = obj.text;
    this.font = obj.font;
    this.fontFamily = obj.fontFamily;
    // this.fontLocation = obj.fontLocation;
    if(obj.fontStyle !== 'Regular') this.fontStyle = obj.fontStyle;
    this.fontSize = obj.fontSize;
    if(!obj.applyFill) this.applyFill = obj.applyFill;
    if(!obj.applyStroke) this.applyStroke = obj.applyStroke;
    if(obj.applyFill) this.fillColor = obj.fillColor;
    if(obj.applyStroke) this.strokeColor = obj.strokeColor;
    if(obj.applyStroke) this.strokeOverFill = obj.strokeOverFill;
    if(obj.applyStroke) this.strokeWidth = obj.strokeWidth;
    if(obj.justification !== ParagraphJustification.LEFT_JUSTIFY) this.justification = obj.justification;
    if(obj.tracking !== 0) this.tracking = obj.tracking;
    if(obj.pointText) this.pointText = obj.pointText;
    if(obj.boxText) this.boxText = obj.boxText;
    if(obj.boxText) this.boxTextSize = obj.boxTextSize;
    if(obj.baselineLocs) this.baselineLocs = obj.baselineLocs;
    if(obj.fauxBold) this.fauxBold = obj.fauxBold;
    if(obj.fauxItalic) this.fauxItalic = obj.fauxItalic;
    if(obj.allCaps) this.allCaps = obj.allCaps;
    if(obj.smallCaps) this.smallCaps = obj.smallCaps;
    if(obj.superscript) this.superscript = obj.superscript;
    if(obj.subscript) this.subscript = obj.subscript;
    if(obj.verticalScale !==1) this.verticalScale = obj.verticalScale;
    if(obj.horizontalScale !==1) this.horizontalScale = obj.horizontalScale;
    if(obj.baselineShift !== 0) this.baselineShift = obj.baselineShift;
    if(obj.tsume !== 0) this.tsume = obj.tsume;
    if(obj.boxText) this.boxTextPos = obj.boxTextPos;

    // native methods
    // this.resetCharStyle = obj.resetCharStyle;
    // this.resetParagraphStyle = obj.resetParagraphStyle;
    // this.sourcePointToComp = obj.sourcePointToComp;
    // this.compPointToSource = obj.compPointToSource;

    // this.remove = obj.remove;

  }

  // methods
}

C2J.TextDocumentObject = TextDocumentObject;
