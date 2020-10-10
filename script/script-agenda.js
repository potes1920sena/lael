$(document).ready(function () {
  $(".formulario").hide();
  //variable de las instancias
  var contactos = new Array();
  //define propiedades del objeto contacto
  function contacto() {
    this.nombre = "";
    this.apellido = "";
    this.telefono = "";
    this.email = "";
    this.asunto = "";
  }

  $(document).on("click", "#agregarContacto", function () {
    $(".formulario").show();
    $("#txtNombre").focus();
  });


  $(document).on("click", "#agendarContacto", function () {
    con = new contacto();
    con.nombre = document.getElementById("txtNombre").value;
    con.apellido = document.getElementById("txtApellido").value;
    con.telefono = document.getElementById("txtTelefono").value;
    con.email = document.getElementById("txtEmail").value;
    con.asunto = document.getElementById("txtAsunto").value;
    contactos[contactos.length] = con;
    $(".formulario").hide();
    ocultarContactos();
    mostrarContactos();
  });

  function borrar(id_contacto) {
    if (confirm("Estas seguro de querer eliminar este contacto")) {
      newCon = new Array();
      for (x = 0; x < contactos.length; x++) {
        if (x != id_contacto) {
          newCon[newCon.length] = contactos[x];
        }
      }
      contactos = newCon;
      mostrarContactos();
    }
  }

  function ocultarContactos() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAsunto").value = "";
    alert(contactos.length);
  }
  function mostrarContactos() {
    document.getElementById("misContactos").innerHTML = "";
    for (x = 0; x < contactos.length; x++) {
      con = contactos[x];
      div = document.createElement("div");
      div.setAttribute("class", "contacto");
      div.innerHTML =
        "Usuario : " +
        con.nombre +
        " " +
        con.apellido +
        "</br>" +
        "Telefono : " +
        con.telefono +
        "</br>" +
        "E-mail : " +
        con.email +
        "</br>" +
        "Asunto : " +
        con.asunto +
        "</br>" +
        "<button id='editar("+x+")'>Edit</button>" +
        "<button id='borrar("+x+")'>Eliminar</button>";
      document.getElementById("misContactos").appendChild(div);
    }
  }
});
