const canvas = document.querySelector("canvas"),
width = canvas.offsetWidth,
height = canvas.offsetHeight;
// 鼠标正在移动的点
let currentX = 0;
let currentY = 0;

// 选中操作中的图形在数组中的坐标, 第一个即为0
let currentIndex = -1;
// 一个画布中所有的闭合路径
// const pointArr = {
//   status: 'draw',       // 当前对象状态, 但一个对象操作完status就会转换成display  /draw 连点 /stretch 拉伸/drag 拖动/display 展示
//   coordinate: [{x: 100, y: 100}]  // 组成整个闭合区域的坐标点
//   path2d: ''        // 由coordinate的坐标点组成的path2D对象, 具体区别画布上哪个闭合区域
// }
let pointArr = [];

// 拉伸模式下目标点位的下角标
let pointTargetIndex = -1;
// 鼠标在拉伸模式下进入目标区域
let pointCanDrag = false;
// 在目标区域点击
let clickToDrag = false;

let mode = "draw";
let drawStatus = "drawing";
let isInStartPoint = false;

const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = true;
ctx.strokeStyle = "blue";
canvas.width = width;
canvas.height = height;

function newBuild() {
currentIndex = pointArr.length;
pointArr[currentIndex] = {
  status: "draw",
  coordinate: [],
  path2d: null
};
}

function stretchBtn() {
mode = "stretch";
}

function select() {
mode = "select";
}

function stretchFunc() {
const target = pointArr[currentIndex].coordinate;
pointArr[currentIndex].coordinatePath2d = [];
for (let k = 0; k < target.length; k++) {
  const path = new Path2D();
  const { x, y } = target[k];
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  path.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  pointArr[currentIndex].coordinatePath2d[k] = path;
  console.log(pointArr[currentIndex]);
}
}

function draw() {
console.log("drawStatus", drawStatus);

ctx.beginPath();

if (pointArr.length === 0) return;

for (let i = 0; i < pointArr.length; i++) {
  const { coordinate, status } = pointArr[i];
  console.log("coordinate----------", coordinate);
  if (coordinate.length === 0) return;
  ctx.beginPath();
  for (let j = 0; j < coordinate.length; j++) {
    const { x, y } = coordinate[j];
    ctx.lineTo(x, y);
  }
  ctx.stroke();

  if (status === "draw") {
    ctx.lineTo(currentX, currentY);
    ctx.lineTo(coordinate[0].x, coordinate[0].y);
    ctx.stroke();
    for (let k = 0; k < coordinate.length; k++) {
      const { x, y } = coordinate[k];
      ctx.fillStyle = k === 0 ? "#D6EAF8" : "#fff";
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
    }
  }

  if (mode === "stretch") {
    stretchFunc();
  }
}
}

const t = setInterval(() => {
if (currentIndex === -1) return;
ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
draw();
}, 10);

const path1 = new Path2D();

canvas.onmouseup = (e) => {
clickToDrag = false;
canvas.style = "cursor:default";
pointCanDrag = false;
};

canvas.onmousemove = (e) => {
const { x, y } = e;
if (mode === "draw") {
  if (
    currentIndex !== -1 &&
    pointArr[currentIndex]?.coordinate?.length > 2
  ) {
    path1.arc(
      pointArr[currentIndex].coordinate[0].x,
      pointArr[currentIndex].coordinate[0].y,
      10,
      0,
      2 * Math.PI
    );
    ctx.stroke();
    isInStartPoint = ctx.isPointInPath(path1, x, y);
  }
} else if (mode === "select" && pointArr.length > 0) {
  for (let i = 0; i < pointArr.length; i++) {
    const { path2d } = pointArr[i];
    if (ctx.isPointInPath(path2d, x, y)) {
      console.log(`我是数组中第${i}个图形`);
      currentIndex = i;
      pointArr[i] = { ...pointArr[i], status: "stretch" };
    }
  }
} else if (
  mode === "stretch" &&
  pointArr[currentIndex]?.coordinatePath2d?.length > 2
) {
  const pathArr = pointArr[currentIndex].coordinatePath2d;

  for (let i = 0; i < pathArr.length; i++) {
    console.log("我进来了么?");
    const path2d = pathArr[i];
    if (ctx.isPointInPath(path2d, x, y)) {
      console.log(`我是数组中第${i}个坐标`);
      pointTargetIndex = i;
      canvas.style = "cursor:move";
      pointCanDrag = true;

      if (clickToDrag) {
        pointArr[currentIndex].coordinate[pointTargetIndex] = { x, y };
      }
    } else {
      canvas.style = "cursor:default";
      pointCanDrag = false;
    }
  }
  // current
}

currentX = x;
currentY = y;
};

canvas.onclick = function (e) {
if (
  mode === "draw" &&
  isInStartPoint &&
  pointArr[currentIndex]?.coordinate?.length > 2
) {
  const path = new Path2D();
  for (let i = 0; i < pointArr[currentIndex].coordinate.length; i++) {
    const { x, y } = pointArr[currentIndex].coordinate[i];
    path.lineTo(x, y);
  }
  ctx.stroke();
  pointArr[currentIndex] = {
    ...pointArr[currentIndex],
    coordinate: [
      ...pointArr[currentIndex].coordinate,
      {
        x: pointArr[currentIndex].coordinate[0].x,
        y: pointArr[currentIndex].coordinate[0].y
      }
    ],
    status: "display",
    path2d: path
  };
  const t1 = setTimeout(() => {
    currentIndex = -1;
    clearTimeout(t1);
  }, 11);
} else if (mode === "draw" && currentIndex !== -1) {
  pointArr[currentIndex].coordinate.push({ x: e.x, y: e.y });
} else if (mode === "stretch" && currentIndex !== -1 && pointCanDrag) {
  clickToDrag = true;
}
};