$('.filter__item--title').click((elem) => {
  elem.target.closest('.filter__item').childNodes.forEach(element => {
      if(element.className == "filter__item--dpowdown") {
        if(element.dataset.open == "close") {
          element.style.height = "auto"
          element.dataset.open = 'open'
        }
        else {
          element.style.height = '0px';
          element.dataset.open = 'close';
        }
      }
  });
});