var can = document.getElementById("canvas");  //Get canvas named canvas
var ctx = can.getContext('2d');
var canSave = document.getElementById("canvasSave");  //Get saved canvas
var ctxSave = canSave.getContext('2d');

var pointX, pointY;
var pointArr = [];//Array saves the coordinates

ctx.strokeStyle = 'rgba(128,0,128,1)';//outer-line color
ctx.lineWidth = 3;//line width
//After draw auto-fill
ctxSave.strokeStyle = 'rgba(255,105,180,1)';//outer-line color after draw
ctxSave.lineWidth = 4;

var oIndex = -1;//value{-1,1} whether mouse is in the start point

/*If click then draw*/
$(can).click(function (e) {
  if (e.offsetX || e.layerX) {
      pointX = e.offsetX == undefined ? e.layerX : e.offsetX;
      pointY = e.offsetY == undefined ? e.layerY : e.offsetY;
      var piX,piY;
      if(oIndex > 0 && pointArr.length > 0){
          piX = pointArr[0].x;
          piY = pointArr[0].y;
          //画点
          makearc(ctx, piX, piY, GetRandomNum(2, 2), 0, 180, 'rgba(255,105,180,1)');
          pointArr.push({x: piX, y: piY});
          canvasSave(pointArr);//保存点线同步到另一个canvas
          saveCanvas();//生成画布
      }else {
          piX = pointX;
          piY = pointY;
          makearc(ctx, piX, piY, GetRandomNum(2, 2), 0, 180, 'rgba(255,105,180,1)');
          pointArr.push({x: piX, y: piY});
          canvasSave(pointArr);//保存点线同步到另一个canvas
      }
  }
});

/*  */
$(can).mousemove(function (e) {
  if (e.offsetX || e.layerX) {
      pointX = e.offsetX == undefined ? e.layerX : e.offsetX;
      pointY = e.offsetY == undefined ? e.layerY : e.offsetY;
      var piX,piY;
      /*清空画布*/
      ctx.clearRect(0, 0, can.width, can.height);
      /*鼠标下跟随的圆点*/
      makearc(ctx, pointX, pointY, GetRandomNum(4, 4), 0, 180, 'rgba(255,105,180,1)');

      if (pointArr.length > 0) {
          if((pointX > pointArr[0].x-15 && pointX < pointArr[0].x+15) && (pointY > pointArr[0].y-15 && pointY < pointArr[0].y+15)){
              if(pointArr.length>1){
                  piX = pointArr[0].x;
                  piY = pointArr[0].y;
                  ctx.clearRect(0, 0, can.width, can.height);
                  makearc(ctx, piX, piY, GetRandomNum(4, 4), 0, 180, 'rgba(255,105,180,1)');
                  oIndex = 1;
              }
          }else {
              piX = pointX;
              piY = pointY;
              oIndex = -1;
          }
          /*开始绘制*/
          ctx.beginPath();
          ctx.moveTo (pointArr[0].x, pointArr[0].y);
          if (pointArr.length > 1){
              for (var i = 1; i < pointArr.length; i++){
                  ctx.lineTo(pointArr[i].x, pointArr[i].y);
              }
          }
          ctx.lineTo(piX, piY);
          ctx.fillStyle = 'rgba(220,20,60,1)';//填充颜色
          ctx.fill();//填充
          ctx.stroke();//绘制
      }
  }
});

// 存储已生成的点线
function canvasSave(pointArr){
  ctxSave.clearRect(0, 0, ctxSave.width, ctxSave.height);
  ctxSave.beginPath();
  if (pointArr.length > 1){
      ctxSave.moveTo (pointArr[0].x, pointArr[0].y);
      for (var i = 1; i < pointArr.length; i++){
          ctxSave.lineTo(pointArr[i].x, pointArr[i].y);
          ctxSave.fillStyle = 'rgba(220,20,60,1)';//填充颜色
          //ctxSave.fill();
          ctxSave.stroke();//绘制
      }
      ctxSave.closePath();
  }
}

/*生成画布 结束绘画*/
function saveCanvas() {
  ctx.clearRect(0, 0, can.width, can.height);
  ctxSave.closePath();//结束路径状态，结束当前路径，如果是一个未封闭的图形，会自动将首尾相连封闭起来
  ctxSave.fill();//填充
  ctxSave.stroke();//绘制
  pointArr = [];
}

/*清空选区*/
$('#deleteCanvas').click(function () {
  ctx.clearRect(0, 0, can.width, can.height);
  ctxSave.clearRect(0, 0, canSave.width, canSave.height);
  pointArr = [];
});

/*验证canvas画布是否为空函数*/
function isCanvasBlank(canvas) {
  var blank = document.createElement('canvas');//创建一个空canvas对象
  blank.width = canvas.width;
  blank.height = canvas.height;
  return canvas.toDataURL() == blank.toDataURL();//为空 返回true
}

/*canvas生成圆点*/
function GetRandomNum(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  return (Min + Math.round(Rand * Range));
}
function makearc(ctx, x, y, r, s, e, color) {
  ctx.clearRect(0, 0, 199, 202);//清空画布
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, r, s, e);
  ctx.fill();
}
