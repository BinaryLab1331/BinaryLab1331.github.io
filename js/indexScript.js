var text = ['안녕, 세상!','Hola, Mundo!', '你好, 世界!', 'こんにちは, せかい!','Hello, world!'];
function callMe(){
  var changeText = document.getElementById('changeText');
  var curIdx = text.indexOf(changeText.innerHTML);
  changeText.innerHTML = text[(curIdx+1)%text.length];
}
setInterval(callMe,800);