let id = 1;
let intervalId;

onLoad();

function onLoad(){
  displayImages(id);
  startInterval();
}

function startInterval(){
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    onRightClick();
  }, 3000);
}

function displayImages(id){
  let frame = document.querySelector('.container');
  frame.innerHTML = `
    <button class="left" onclick="onLeftClick()"> < </button>
    <div class="images">
      <img src="${getElement(id)}" alt="item images${id}" class="image"/>
    </div>
    <button class="right" onclick="onRightClick()"> > </button>
  `;
}

function getElement(idx){
  for(let i = 0; i < imageList.length; i++){
    if(idx == imageList[i].id){
      return imageList[i].source;
    }
  }
};

let left_btn = document.querySelector('.left');

let right_btn = document.querySelector('.right');

function onLeftClick(){
  if(id == 1){
    id = imageList.length;
  }
  else{
    id--;
  }
  displayImages(id);
  startInterval();
};

function onRightClick(){
  if(id == imageList.length){
    id = 1;
  }
  else{
    id++;
  }
  displayImages(id);
  startInterval();
};