var can = document.getElementById("canvas");  //Get canvas
var ctx = can.getContext('2d');
var canSave = document.getElementById("canvasSave");  //Get saved canvas
var ctxSave = canSave.getContext('2d');
var canDraw = false;    //trigger state

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
          //draw points
          makearc(ctx, piX, piY, GetRandomNum(2, 2), 0, 180, 'rgba(255,105,180,1)');
          pointArr.push({x: piX, y: piY});
          canvasSave(pointArr);//save points and lines to another canvas
          saveCanvas();//Generate canvas
      }else {
          piX = pointX;
          piY = pointY;
          makearc(ctx, piX, piY, GetRandomNum(2, 2), 0, 180, 'rgba(255,105,180,1)');
          pointArr.push({x: piX, y: piY});
          canvasSave(pointArr);//sync points and lines
      }
  }
});

/*After clicked once*/
$(can).mousemove(function (e) {
  if (e.offsetX || e.layerX) {
      pointX = e.offsetX == undefined ? e.layerX : e.offsetX;
      pointY = e.offsetY == undefined ? e.layerY : e.offsetY;
      var piX,piY;
      /*Clean the canvas*/
      ctx.clearRect(0, 0, can.width, can.height);
      /*Following points*/
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
          /*Start the draw process*/
          ctx.beginPath();
          ctx.moveTo (pointArr[0].x, pointArr[0].y);
          if (pointArr.length > 1){
              for (var i = 1; i < pointArr.length; i++){
                  ctx.lineTo(pointArr[i].x, pointArr[i].y);
              }
          }
          ctx.lineTo(piX, piY);
          ctx.fillStyle = 'rgba(220,20,60,1)';//Fill color
          ctx.fill();//Fill the close area
          ctx.stroke();//Draw
      }
  }
});

/*Clean the selected area*/
$('#items[3]').click(function () {
  ctx.clearRect(0, 0, can.width, can.height);
  ctxSave.clearRect(0, 0, canSave.width, canSave.height);
  pointArr = [];
});

//Save the generated points and lines
export function canvasSave(pointArr){
  ctxSave.clearRect(0, 0, ctxSave.width, ctxSave.height);
  ctxSave.beginPath();
  if (pointArr.length > 1){
      ctxSave.moveTo (pointArr[0].x, pointArr[0].y);
      for (var i = 1; i < pointArr.length; i++){
          ctxSave.lineTo(pointArr[i].x, pointArr[i].y);
          ctxSave.fillStyle = 'rgba(220,20,60,1)';
          //ctxSave.fill();
          ctxSave.stroke();//Re-draw
      }
      ctxSave.closePath();
  }
}

/*Generate a canva and end drawing*/
export function saveCanvas() {
  ctx.clearRect(0, 0, can.width, can.height);
  ctxSave.closePath();//End the path state. Connect the head and tail to get a close shape.
  ctxSave.fill();//Fill the shape
  ctxSave.stroke();//Re-draw
  pointArr = [];
}

/*Whether this canva is empty*/
export function isCanvasBlank(canvas) {
  var blank = document.createElement('canvas');//创建一个空canvas对象
  blank.width = canvas.width;
  blank.height = canvas.height;
  return canvas.toDataURL() == blank.toDataURL();//为空 返回true
}

/*canvas generates the circle*/
export function GetRandomNum(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  return (Min + Math.round(Rand * Range));
}

export function makearc(ctx, x, y, r, s, e, color) {
  ctx.clearRect(0, 0, 199, 202);//clean
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, r, s, e);
  ctx.fill();
}

export{can,ctx,canSave,ctxSave};