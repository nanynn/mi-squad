function MiembroSquad(nombre, edad, hobbies){
	this.nombre = nombre;
	this.edad = edad;
	this.hobbies = hobbies;
}

var arrSquad = [];

//cada miembro del squad sumado de a uno 
var josefa = new MiembroSquad("Josefa Herrera", 20,['bailar pop', 'ver series', 'codear']);
arrSquad.push(josefa);

var mai = new MiembroSquad('Maibeet Torres', 14, ['juegos rpg', 'leer', 'andar en bici']);
arrSquad.push(mai);

var caro = new MiembroSquad('Carolina Quintana', 31, ['patinar', 'comer sushi','acariciar a mi gata']);
arrSquad.push(caro);

var anais = new MiembroSquad('Anais Araya ', 20, ['estar con la amelia', 'ver netflix', 'pololiar']);
arrSquad.push(anais);

var muri = new MiembroSquad('Muriel Bahamondes', 25, ['fumar hierba', 'jugar pool', 'navegar en internet']);
arrSquad.push(muri);

var simone = new MiembroSquad('Simona Ulloa', 29,['ver netflix', 'escuchar música', 'tomar chela']);
arrSquad.push(simone);

var dulce = new MiembroSquad('Dulce Frau', 21, ['cocinar', 'leer', 'subir montañas']);
arrSquad.push(dulce);

var sandra; //no dió sus datos

function Comentarios(id,comentario,likes){
	this.id = id;
	this.comentario = comentario;
	this.like = likes;
}

function mostrarDatos(){
	var lista =document.getElementById('integrante');

		arrSquad.forEach(function(element){
		var squad = document.createElement('div');
		squad.innerHTML += '<br>Nombre: '+ element.nombre + '<br>Edad: '+ element.edad + '<br>Hobbies: ';

			var lis = document.createElement('ul');
				element.hobbies.forEach(function(e){
				lis.innerHTML += "<li>" + e + "</li>";
				})
			squad.appendChild(lis);

			var coment = document.createElement('textarea');
			coment.class="palabras";
			squad.appendChild(coment);

			var boton = document.createElement('button');
			boton.onclick="dejarComent()";
			boton.innerHTML += 'Agregar comentario';
			squad.appendChild(boton);

			var corazon = document.createElement('button');
			corazon.onclick = "sumarLike()";
			corazon.innerHTML += '<i class="fa fa-heart" aria-hidden="true"></i>';
			squad.appendChild(corazon);

			var espacioComentario = document.createElement('div');
			squad.appendChild(espacioComentario);

	lista.appendChild(squad);
	})
}
mostrarDatos();


function dejarComent(){
	var comentar = document.getElementsByClassName('palabras');
	var espacioComentario = document.getElementById('div');
	comentar.value;
	comentar[0].innerHTML += espacioComentario.value;
	
}

function sumarLike(){
	var numero = 0;
	numero ++;
}









