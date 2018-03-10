var ourEventListener = () => {
  var el = document.getElementById('myElement');
  el.addEventListener('click', () => {
    console.log('1st paragraph clicked!');
  });
};

var secondEventListener = () => {
  d3.select('#myElement2').on('click', () => {
    console.log('Second paragraph clicked!');
    console.log(d3.select('#myElement2').text());
  });
};

var inputEventListener = () => {
  d3.select('#submitButton').on('click', () => {
    var i = d3.select('#myInput');
    console.log(i.attr('value'));
  });
};

ourEventListener();
secondEventListener();
inputEventListener();
