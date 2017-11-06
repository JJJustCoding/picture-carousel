function initImagesClickEvent() {
  var imgs = document.querySelectorAll('img');
  for(var img of imgs) {
    img.addEventListener('click', function(event) {
      window.open(event.target.src);
    })
  }
}

function initButtonClickEvent(autoGoTime) {
  var buttons = document.querySelectorAll('.button');
  for(var button of buttons) {
    button.addEventListener('click', function(event) {
      var index = parseInt(event.target.innerHTML);
      var container = document.querySelector('.container');
      container.style.left = (index - 1) * (-200) + 'px';
      clearInterval(autoGoTime);
    })
  }
}

window.onload = function() {
  let autoGoTime = setInterval(autoGo, 2500);
  initImagesClickEvent();
  initButtonClickEvent(autoGoTime);
}

function autoGo() {
  let timer = setInterval(function() {
    const container = document.querySelector('.container');
    const pictureWidth = 200;
    const speed = pictureWidth/200;
    const containerWidth = container.offsetWidth;
    let currentLeftOffset = parseInt(container.style.left) || 0;
    let newLeftOffset = currentLeftOffset - speed;
    if (-newLeftOffset >= parseInt(containerWidth - 200)) {
      newLeftOffset = 0;
    }
    container.style.left = newLeftOffset + 'px';
    if (newLeftOffset % 200 == 0) {
      clearInterval(timer);
      return;
    }
  }, 10);
}
