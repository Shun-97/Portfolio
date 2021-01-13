//Typing Effect https://github.com/tameemsafi/typewriterjs)

var TypeWrite1 = document.getElementById('Greeting');

var Greeting = new Typewriter(TypeWrite1, {
   loop: true,
   delay: 75,
});

Greeting
   .pauseFor(1000)
   .typeString('HELLO WORLD!')
   .pauseFor(300)
   .deleteChars(12)
   .typeString('你好世界！')
   .pauseFor(1000)
   .deleteChars(5)
   .typeString('こんばんは世界！')
   .pauseFor(1000)
   .start();

// Typing Effect for hobbies

var TypeWrite2 = document.getElementById('Hobbies');


var Hobbies = new Typewriter(TypeWrite2, {
   loop: true,
   delay: 75,
   // onCreateTextNode: customNodeCreator,
});

Hobbies
   .pauseFor(1000)
   .typeString('< CODE > I <strong class="color-blue">BUILD</strong> WEBPAGES < /CODE >')
   .pauseFor(300)
   .deleteChars(18)
   .typeString('SIMPLE APPLICATION < /CODE >')
   .pauseFor(1000)
   .deleteChars(34)
   .typeString('<strong class="color-blue">DRAW</strong> AS A HOBBY < /CODE >')
   .pauseFor(1000)
   .start();

// scrolling 
ScrollReveal({ reset: true });
ScrollReveal().reveal('.headline', { delay: 500 })
ScrollReveal().reveal('.Experience', { delay: 500 })
ScrollReveal().reveal('.Project', { delay: 500 })
ScrollReveal().reveal('.Others', { delay: 500 })