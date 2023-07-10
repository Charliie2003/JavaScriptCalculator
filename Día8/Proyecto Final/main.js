let empleados=[];
function cargarEmpleado() {
    let legajo = document.getElementById("legajo").value;
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let cargo = document.getElementById("cargo").value;
function Empleado(legajo, nombre, apellido, fechaNacimiento, cargo){
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.cargo = cargo;
}

    let empleado = new Empleado(legajo,nombre,apellido,fechaNacimiento,cargo);
    empleados.push(empleado);
    alert("Empleado guardado correctamente")
    limpiarCampos();
    
}
function mostrarAlert(){
    let listado = "";
    for(empleado of empleados){
        for(let propiedad in empleado){
            listado = listado + propiedad.toUpperCase() + ": " + empleado[propiedad] + " / "
        }
        listado = listado + "\n";
    }
    alert(listado);
}
function limpiarCampos(){
    let legajo = document.getElementById("legajo");
    let nombre = document.getElementById("Nombre");
    let apellido = document.getElementById("Apellido");
    let fechaNacimiento = document.getElementById("fechaNacimiento");
    let cargo = document.getElementById("cargo");
    legajo.value = " ";
    nombre.value = " ";
    apellido.value = " ";
    fechaNacimiento.value = " ";
    cargo.value = " ";
}