// nomeie 3 propriedades ou métodos de strings
// toString
// toLowerCase
// toUpperCase

// nomeie 5 propriedades ou métodos de elementos do DOM 
// addEventListener
// animate
// append
// hide
// show

 

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
document.body.addEventListener("keydown", function (ev) {

	// function to check the detection
	ev = ev || window.event; // Event object 'ev'
	var key = ev.which || ev.keyCode; // Detecting keyCode
	
	// Detecting Ctrl
	var ctrl = ev.ctrlKey ? ev.ctrlKey : ((key === 17)
		? true : false);

	// If key pressed is V and if ctrl is true.
	if (key == 86 && ctrl) {
		// print in console.
		console.log("Ctrl+V is pressed.");
	}
	else if (key == 67 && ctrl) {

		// If key pressed is C and if ctrl is true.
		// print in console.
		console.log("Ctrl+C is pressed.");
	}

}, false);
