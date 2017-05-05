function MiembroSquad(nombre, edad, hobbies, id){
	this.nombre = nombre;
	this.edad = edad;
	this.hobbies = hobbies;
}

var arrSquad = [];

var josefa = new MiembroSquad("Josefa Herrera", 20,['bailar pop', 'ver series', 'codear'], 'miembro0');
arrSquad.push(josefa);

var mai = new MiembroSquad('Maibeet Torres', 14, ['juegos rpg', 'leer', 'andar en bici'], 'miembro1');
arrSquad.push(mai);

var caro = new MiembroSquad('Carolina Quintana', 31, ['patinar', 'comer sushi','acariciar a mi gata'], 'miembro2');
arrSquad.push(caro);

var anais = new MiembroSquad('Anais Araya ', 20, ['estar con la amelia', 'ver netflix', 'pololiar'], 'miembro3');
arrSquad.push(anais);

var muri = new MiembroSquad('Muriel Bahamondes', 25, ['fumar hierba', 'jugar pool', 'navegar en internet'], 'miembro4');
arrSquad.push(muri);

var simone = new MiembroSquad('Simona Ulloa', 29,['ver netflix', 'escuchar música', 'tomar chela'], 'miembro5');
arrSquad.push(simone);

var sandra; 

var dulce = new MiembroSquad('Dulce', 15, ['cocinar', 'leer', 'subir montañas'], 'miembro6');
arrSquad.push(dulce);


var lista =document.getElementById('integrante');

arrSquad.forEach(function(element){
	lista.innerHTML += '<br>Nombre: '+ element.nombre + '<br>Edad: '+ element.edad + '<br>Hobbies: ' + '<ul>';

	element.hobbies.forEach(function(e){
	lista.innerHTML += "<li>" + e + "</li>";
	})
	lista.innerHTML += '</ul>';
})

/*lista.innerHTML += '<br>Nombre: '+ josefa.nombre + '<br>Edad: '+ josefa.edad + '<br>Hobbies: ' + josefa.hobbies+'<br>';
lista.innerHTML += '<br>Nombre: '+ mai.nombre + '<br>Edad: '+ mai.edad + '<br>Hobbies: ' + mai.hobbies+'<br>';
lista.innerHTML += '<br>Nombre: '+ caro.nombre + '<br>Edad: '+ caro.edad + '<br>Hobbies: ' + caro.hobbies+'<br>';
lista.innerHTML += '<br>Nombre: '+ anais.nombre + '<br>Edad: '+ anais.edad + '<br>Hobbies: ' + anais.hobbies+'<br>';
lista.innerHTML += '<br>Nombre: '+ muri.nombre + '<br>Edad: '+ muri.edad + '<br>Hobbies: ' + muri.hobbies+'<br>';
lista.innerHTML += '<br>Nombre: '+ simone.nombre + '<br>Edad: '+ simone.edad + '<br>Hobbies: ' + simone.hobbies+'<br>';
lista.innerHTML += '<br>Nombre: '+ dulce.nombre + '<br>Edad: '+ dulce.edad + '<br>Hobbies: ' + dulce.hobbies+'<br>';*/










