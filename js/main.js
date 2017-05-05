function MiembroSquad(nombre, edad, hobbies){
	this.nombre = nombre;
	this.edad = edad;
	this.hobbies = hobbies;
}

var arrSquad = [];

var josefa = new MiembroSquad("Josefa Herrera", 20,['bailar pop', 'ver series', 'codear']);
arrSquad.push(josefa);

arrSquad.forEach(function(element){
	return element.hobbies;

	element.hobbies.forEach(function(e){
		lista.innerHTML += "<li>" + e + "</li>";
	})
})

var mai = new MiembroSquad('Maibeet Torres', 14, ['juegos rpg', 'leer', 'andar en bici']);
arrSquad.push(mai);

var caro = new MiembroSquad('Carolina Quintana', 31, ['patinar', 'comer sushi','acariciar a mi gata']);
arrSquad.push(caro);

var anais = new MiembroSquad('Anais ', 20, ['estar con la amelia', 'ver netflix', 'pololiar']);
arrSquad.push(anais);

var muri = new MiembroSquad('Muriel Bahamondes', 25, ['fumar hierba', 'jugar pool', 'navegar en internet']);
arrSquad.push(muri);

var simone = new MiembroSquad('Simona Ulloa', 29,['ver netflix', 'escuchar música', 'tomar chela']);
arrSquad.push(simone);

var sandra; 

var dulce = new MiembroSquad('Dulce', 15, ['cocinar', 'leer', 'subir montañas']);
arrSquad.push(dulce);




var esp = document.getElementById('espacio');

var lista =document.getElementById('integrante');

arrSquad.forEach(function(element){
	return element.hobbies;

	element.hobbies.forEach(function(e){
		lista.innerHTML += "<li>" + e + "</li>";
	})
})


esp.innerHTML += '<br>Nombre: '+ josefa.nombre + '<br>Edad: '+ josefa.edad + '<br>Hobbies: ' + josefa.hobbies+'<br>';
esp.innerHTML += '<br>Nombre: '+ mai.nombre + '<br>Edad: '+ mai.edad + '<br>Hobbies: ' + mai.hobbies+'<br>';
esp.innerHTML += '<br>Nombre: '+ caro.nombre + '<br>Edad: '+ caro.edad + '<br>Hobbies: ' + caro.hobbies+'<br>';
esp.innerHTML += '<br>Nombre: '+ anais.nombre + '<br>Edad: '+ anais.edad + '<br>Hobbies: ' + anais.hobbies+'<br>';
esp.innerHTML += '<br>Nombre: '+ muri.nombre + '<br>Edad: '+ muri.edad + '<br>Hobbies: ' + muri.hobbies+'<br>';
esp.innerHTML += '<br>Nombre: '+ simone.nombre + '<br>Edad: '+ simone.edad + '<br>Hobbies: ' + simone.hobbies+'<br>';
esp.innerHTML += '<br>Nombre: '+ dulce.nombre + '<br>Edad: '+ dulce.edad + '<br>Hobbies: ' + dulce.hobbies+'<br>';










