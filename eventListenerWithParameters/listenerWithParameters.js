function promptForName() {
  return prompt("What's your name?");
}

function printNameToConsole(name) {
  console.log('Your name is:', name);
}

function addEventListenerForHeader() {
  var name = promptForName();
  var headerEl = document.querySelector('h1');
  headerEl.addEventListener('mouseover', function() {
    printNameToConsole(name);
  });
}

addEventListenerForHeader();
