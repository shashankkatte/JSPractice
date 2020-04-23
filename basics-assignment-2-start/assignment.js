const task3Element = document.getElementById('task-3');

function displayGreeting() {
  alert('Hello! Im a function with no parameters!');
}

function greetUser(name) {
  alert('Hello! Welcome ' + name);
}

function concatenateStrings(first, second, third) {
    return first + second + third ;
}

// Lets call the functions here
displayGreeting();
greetUser('Shashank');

//Lets add an event lister here
task3Element.addEventListener('click', displayGreeting);

// lets now call the string Concatenator in an alert

alert(concatenateStrings('first part',' second part', ' third part'));

task3Element.addEventListener('mouseenter',displayGreeting);
