'use strict';
var file = File.saveDialog("保存するファイル名を入れてください");
if(file){
  var activeitem = app.project.activeItem;
  var l = C2J.getObject(activeitem);
  file.open("w");
  file.encoding = "UTF-8";
  file.lineFeed = "Unix";
  file.write(C2J.json(l));
  file.close();
  alert(`jsonを出力しました。`);
}
