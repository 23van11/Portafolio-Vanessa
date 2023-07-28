let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy estudiante de Ingeniería en Computación en la Universidad Autónoma del Estado de México, apasionada por la Astronomía, Tecnología, Programación y Bases de Datos.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
