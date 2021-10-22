function validar() {
  var form = document.form;
  if (formTask.title.value == 0) {
    alert("El nombre del prestamo esta vacio");
    form.title.value = "";
    form.title.focus();
    return false;
  }
  if (formTask.description.value == 0) {
    alert("La descripción esta vacia");
    form.description.value = "";
    form.description.focus();
    return false;
  }
  if (formTask.categoria.value == 0) {
    alert("La categoria esta vacia");
    form.categoria.value = "";
    form.categoria.focus();
    return false;
  }
  if (formTask.prestador.value == 0) {
    alert("El nombre del prestador esta vacio");
    form.prestador.value = "";
    form.prestador.focus();
    return false;
  }
  if (formTask.padre.value == 0) {
    alert("El nombre del Parentezco esta vacio");
    form.padre.value = "";
    form.padre.focus();
    return false;
  }
  if (formTask.correo.value == 0) {
    alert("El correo esta vacio");
    form.correo.value = "";
    form.correo.focus();
    return false;
  }
  if (formTask.cell.value == 0) {
    alert("El celular esta vacio");
    form.cell.value = "";
    form.cell.focus();
    return false;
  }
  if (formTask.fechap.value == 0) {
    alert("La fecha del prestamo esta vacia");
    form.fechap.value = "";
    form.fechap.focus();
    return false;
  }
  if (formTask.fechad.value == 0) {
    alert("La fecha de devoción esta vacia");
    form.fechad.value = "";
    form.fechad.focus();
    return false;
  }
  form.submit();

  function mostrar() {
    document.getElementById("oculto").style.display = 'block';
  }
  
  function ocultar() {
    document.getElementById("oculto").style.display = 'none';
  }
}

document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let categoria = document.getElementById('categoria').value;
  let prestador = document.getElementById('prestador').value;
  let padre = document.getElementById('padre').value;
  let correo = document.getElementById('email').value;
  let cell = document.getElementById('cell').value;
  let fechap = document.getElementById('fechap').value;
  let fechad = document.getElementById('fechad').value;
  console.log(description)

  //Objeto que servirá para almacenar cada uno de los elementos del form
  let task = {
    title,
    description,
    prestador,
    padre,
    correo,
    cell,
    fechap,
    fechad,
    categoria
  };

  //Se verifica la existencia de algún préstamo, si lo hay pues se actualiza el LocalStorage y su contenido
  if (localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

//Funcion para eliminar el préstamo
function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

//Funcion para imprimir los elementos del form desde el localStorage
function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;
    let categoria = tasks[i].categoria;
    let prestador = tasks[i].prestador;
    let padre = tasks[i].padre;
    let correo = tasks[i].correo;
    let cell = tasks[i].cell;
    let fechap = tasks[i].fechap;
    let fechad = tasks[i].fechad;

    tasksView.innerHTML += `<div class="">
        <div id="tablas">
        <table>
        <tr>
        <th>Nombre</th> 
        <th>Descripción </th>
        <th>Categoria </th>
        <th>Prestador </th>
        <th>Parentezco </th>
        <th>Correo </th>
        <th>Celular </th>
        <th>Fecha del prestamo </th>
        <th>Fecha de devoción </th>
        <th>Acciones </th>
        </tr> 
        <tr>
        <td>${title} </td>
        <td>${description}</td>
        <td>${categoria}</td>
        <td>${prestador}</td>
        <td>${padre}</td>
        <td>${correo}</td>
        <td>${cell}</td>
        <td>${fechap}</td>
        <td>${fechad}</td>
        <td class="eliminar"><a href="#" onclick="deleteTask('${title}')" >Eliminar</a> </td>
        </tr> 
        
        </div>
      </div>`;
  }
}

getTasks();

