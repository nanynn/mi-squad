function MiembroSquad(nombre, apellido, edad, hobbies){
	this.nombre = nombre;
	this.edad = edad;
	this.hobbies = hobbies;
}

var arrSquad = [];

var josefa = new MiembroSquad('Josefa Herrera', 'edad',['bailar pop', 'ver series', 'codear']);
arrSquad.push(josefa);

var mai = new MiembroSquad('Maibeet Torres', 'edad', ['juegos rpg', 'leer', 'andar en bici']);
arrSquad.push(mai);

var caro = new MiembroSquad('Carolina Quintana', 'edad', ['patinar', 'comer sushi', '']);
arrSquad.push(caro);

var anais;
var muri;
var simone;
var sandra; 
var dulce;





var lista =document.getElementById('integrante');

lista.innerHTML += josefa.nombre + josefa.edad + "<li>"josefa.hobbies"</li>";