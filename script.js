let id = 1;
let intervalId;

onLoad();

function onLoad() {
  displayImages(id);
  startInterval();
}

function startInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    onRightClick();
  }, 3000);
}

function displayImages(id) {
  let frame = document.querySelector(".container");
  frame.innerHTML = `
    <button class="left w-[10%] lg:w-[4%] h-[100%] flex items-center justify-center bg-white text-2xl absolute left-0 opacity-0 hover:opacity-[0.5]" onclick="onLeftClick()"><i class="fa-solid fa-chevron-left"></i></button>
    <div class="images w-[100%] h-[100%] bg-[url('${getElement(
      id
    )}')] bg-cover"></div>
    <button class="right w-[10%] lg:w-[4%] h-[100%] flex items-center justify-center bg-white text-2xl absolute right-0 opacity-0 hover:opacity-[0.5]" onclick="onRightClick()"><i class="fa-solid fa-chevron-right"></i></button>
  `;
}

function getElement(idx) {
  for (let i = 0; i < imageList.length; i++) {
    if (idx == imageList[i].id) {
      return imageList[i].source;
    }
  }
}

let leftB = document.querySelector(".left");
let rightB = document.querySelector(".right");

function onLeftClick() {
  if (id == 1) {
    id = imageList.length;
  } else {
    id--;
  }
  displayImages(id);
  startInterval();
}
function onRightClick() {
  if (id == imageList.length) {
    id = 1;
  } else {
    id++;
  }
  displayImages(id);
  startInterval();
}
