// Create a registration system
var objUsuarios = [
	{
		username: 'user',
		password: 'password123'
	}
]

function login() {
	
	var username = document.getElementById('username').value	
	var password = document.getElementById('password').value

	// recorrer todos los objetos de usuario y comprobar si el nombre de usuario y la contraseña son correctos
	for(var i = 0; i < objUsuarios.length; i++) {
		// check to 
		if(username == objUsuarios[i].username && password == objUsuarios[i].password) {
			console.log('El usuario ' + '"' + username + '"' + ' se ha logueado con exito!!')			
			break
		} else {			
			console.log('usuario o contraseña incorrectos')
		}			
	}
}

// funcion para registrar usuarios
function registrarUsuario() {
	
	var rgtUsername = document.getElementById('nuevoUsuario').value
	var rgtPassword = document.getElementById('nuevoPassword').value
	
    // almacenar los nuevos datos del usuario en un objeto
	var newUser = {
		username: rgtUsername,
		password: rgtPassword
	}
	// bucle para ver si el nombre de usuario ya existe, o la contraseña es muy corta
	for(var i = 0; i < objUsuarios.length; i++) {
		// comprobamos si el nuevo nombre de usuario es igual a cualquier nombre de usuario q ya ha sido creado
		if(registrarUsuario == objUsuarios[i].username) {			
			alert('El nombre de usuario ya existe, elija otro')			
			break		
		} else if (rgtPassword.length < 8) {			
			alert('La contraseña es muy corta, debe incluir 8 o más characters')			
			break
		}
	}

    alert('usuario registrado correctamente')
	// añadimos el nuevo objeto array usuarios
	objUsuarios.push(newUser)
	console.log(objUsuarios)
}