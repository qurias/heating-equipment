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


let slider = document.getElementById('sliderPrice');

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 99999,
  },
  step: 1000,

  start: [0, 999999],
  connect: true,
  behaviour: 'tap-drag',
  tooltips: true,
});


document.querySelectorAll('.filter__item--meaning-circle').forEach((elem) => {
  elem.addEventListener('click', (elem) => {
    if(elem.target.dataset.selected == "yes") {
      elem.target.dataset.selected = "no"
      elem.target.style.color = '#7E838C';
      elem.target.classList.remove('selectedColor');
      let countSelected = 0; 
      document
        .querySelectorAll('.filter__item--meaning-circle')
        .forEach((elem) => {
          
          elem.dataset.selected == 'yes'
            ? countSelected += 1
            : '';
        });
        if(countSelected == 0) {
          document
            .querySelectorAll('.filter__item--meaning-circle')
            .forEach((elem) => {
              elem.style.color = 'black'
            });
        }
    }
    else {
      elem.target.classList.add('selectedColor');
      elem.target.style.color = 'black';
      elem.target.dataset.selected = 'yes';
      document
        .querySelectorAll('.filter__item--meaning-circle')
        .forEach((elem) => {
          elem.dataset.selected == 'yes'
            ? ''
            : (elem.style.color = '#7E838C');
        });
    }
  });
});
