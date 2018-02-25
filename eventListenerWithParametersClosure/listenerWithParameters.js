function promptForName() {
  return prompt("What's your name?");
}

// See http://www.jstips.co/en/javascript/passing-arguments-to-callback-functions/
function printNameToConsole(name) {
  return function() {
    console.log('Your name is:', name);
  };
}

function addEventListenerForHeader() {
  var name = promptForName();
  var headerEl = document.querySelector('h1');
  headerEl.addEventListener('mouseover', printNameToConsole(name));
}

addEventListenerForHeader();
