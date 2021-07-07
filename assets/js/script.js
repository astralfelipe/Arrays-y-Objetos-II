var radiologia = [
    {hora: "11:00", especialista: "Ignacio Schulz", paciente: "Francisca Rojas", RUT: "9878782-1", prevision: "Fonasa"},
    {hora: "11:30", especialista: "Federico Subercaseaux", paciente: "Pamela Estrada", RUT: "15345241-3", prevision: "Isapre"},
    {hora: "15:00", especialista: "Fernando Wurthz", paciente: "Armando Luna", RUT: "16445345-9", prevision: "Isapre"},
    {hora: "15:30", especialista: "Ana María Godoy", paciente: "Manuel Godoy", RUT: "17666419-0", prevision: "Fonasa"},
    {hora: "16:00", especialista: "Patricia Suazo", paciente: "Ramón Ulloa", RUT: "14989389-K", prevision: "Fonasa"},
]

// Se utiliza el método shift para eliminar el primer elemento del array radiologia
radiologia.shift();


// Se utiliza el método pop para eliminar el útlimo elemento del array radiologia
radiologia.pop();

var tabla = document.getElementById("tabla_radiologia");

for(var i=0; i<radiologia.length; i++){
    tabla.innerHTML += `
    <tr>
        <td>${radiologia[i].hora}</td>
        <td>${radiologia[i].especialista}</td>
        <td>${radiologia[i].paciente}</td>
        <td>${radiologia[i].RUT}</td>
        <td>${radiologia[i].prevision}</td>
    </tr>
    `;
}

var traumatologia = [
    {hora: "08:00", especialista: "Maria Paz Altuzarra", paciente: "Paula Sánchez", RUT: "15554774-5", prevision: "Fonasa"},
    {hora: "10:00", especialista: "Raúl Araya", paciente: "Angélica Navas", RUT: "15444147-9", prevision: "Isapre"},
    {hora: "10:30", especialista: "María Arriagada", paciente: "Ana Klapp", RUT: "17879423-9", prevision: "Isapre"},
    {hora: "11:00", especialista: "Alejandro Badilla", paciente: "Felipe Mardonez", RUT: "1547423-6", prevision: "Isapre"},
    {hora: "11:30", especialista: "Cecilia Budnik", paciente: "Diego Marre", RUT: "16554741-K", prevision: "Fonasa"},
    {hora: "12:00", especialista: "Arturo Cavagnaro", paciente: "Cecilia Mendez", RUT: "9747535-8", prevision: "Isapre"},
    {hora: "12:30", especialista: "Andrés Kanacri", paciente: "Marcial Suazo", RUT: "11254785-5", prevision: "Isapre"},
]

// Se crea un nuevo array donde se agrupan los objetos pertenecientes a la variable nuevoTramuatologia
var nuevoTraumatologia = [
    {hora: "09:00", especialista: "René Poblete", paciente: "Ana Gellona", RUT: "13123329-7", prevision: "Isapre"},
    {hora: "09:30", especialista: "María Solar", paciente: "Ramiro Andrade", RUT: "12221451-K", prevision: "Fonasa"},
    {hora: "10:00", especialista: "Raúl Loyola", paciente: "Carmen Isla", RUT: "10112348-3", prevision: "Isapre"},
    {hora: "10:30", especialista: "Antonio Larenas", paciente: "Pablo Loayza", RUT: "13453234-1", prevision: "Isapre"},
    {hora: "12:00", especialista: "Matias Aravena", paciente: "Susana Poblete", RUT: "14345656-6", prevision: "Fonasa"},
]

// Se crea la variable Traumatologia Final la cual resulta de la concatenación del array traumatologia con nuevotraumatologia
var traumatologiaFinal = traumatologia.concat(nuevoTraumatologia)


// Se utiliza el método sort para ordenar los items del array que se generará
traumatologiaFinal.sort (function(a,b){
    if (a.hora > b.hora){
        return 1
    }
    if (a.hora < b.hora){
        return -1
    }
    return 0
})

var tabla = document.getElementById("tabla_traumatologia");

for(var i=0; i<traumatologiaFinal.length; i++){
    tabla.innerHTML += `
    <tr>
        <td>${traumatologiaFinal[i].hora}</td>
        <td>${traumatologiaFinal[i].especialista}</td>
        <td>${traumatologiaFinal[i].paciente}</td>
        <td>${traumatologiaFinal[i].RUT}</td>
        <td>${traumatologiaFinal[i].prevision}</td>
    </tr>
    `;
}

var dental = [
    {hora: "08:30", especialista: "Andrea Zúñiga", paciente: "Marcela Retamal", RUT: "11123425-6", prevision: "Isapre"},
    {hora: "11:00", especialista: "María Paz Zañartu", paciente: "Angel Muñoz", RUT: "9878789-2", prevision: "Isapre"},
    {hora: "11:30", especialista: "Scarlett Witting", paciente: "Mario Kast", RUT: "7998789-5", prevision: "Fonasa"},
    {hora: "13:00", especialista: "Francisco von Teuber", paciente: "Karin Fernández", RUT: "18887662-K", prevision: "Fonasa"},
    {hora: "13:30", especialista: "Eduardo Viñuela", paciente: "Hugo Sánchez", RUT: "17665461-4", prevision: "Fonasa"},
    {hora: "14:00", especialista: "Raquel Villaseca", paciente: "Ana Sepúlveda", RUT: "14441281-0", prevision: "Isapre"},
]

var tabla = document.getElementById("tabla_dental");

for(var i=0; i<dental.length; i++){
    tabla.innerHTML += `
    <tr>
        <td>${dental[i].hora}</td>
        <td>${dental[i].especialista}</td>
        <td>${dental[i].paciente}</td>
        <td>${dental[i].RUT}</td>
        <td>${dental[i].prevision}</td>
    </tr>
    `;
}


// Se utiliza el método filter para filtrar en el array dental aquellos pacientes usuarios de Isapre
var dentalIsapre = dental.filter(function(filtroIsapre){
    return filtroIsapre.prevision == "Isapre";
});


// Se utiliza el método filter para filtrar en el array traumatologia aquellos pacientes usuarios de Fonasa
var traumatologiaFonasa = traumatologiaFinal.filter(function(filtroFonasa){
    return filtroFonasa.prevision == "Fonasa";
})

// Se utiliza la version con los puntos para concatenar los elementos y generar un array donde estén todas las consultas
var consultasTotal = [...radiologia, ...traumatologia, ...dental]

document.write(`<br>`);
document.write(`<h3 class="font-weight-bold" style="margin-left: 400px">Primera y Última atención.</h3>`);
document.write(`<br>`);
document.write(`<p style="margin-left: 400px">Primera Atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última Atención: ${radiologia[radiologia.length-1].paciente} - ${radiologia[radiologia.length-1].prevision}</p>`);
document.write(`<p style="margin-left: 400px">Primera Atención: ${traumatologiaFinal[0].paciente} - ${traumatologiaFinal[0].prevision} | Última Atención: ${traumatologiaFinal[traumatologiaFinal.length-1].paciente} - ${traumatologiaFinal[traumatologiaFinal.length-1].prevision}</p>`);
document.write(`<p style="margin-left: 400px">Primera Atención: ${dental[0].paciente} - ${dental[0].prevision} | Última Atención: ${dental[4].paciente} - ${dental[4].prevision}</p>`);
document.write(`<br>`);
document.write(`<h3 class="font-weight-bold" style="margin-left: 400px">Consultas médicas área Dental.</h3>`);
document.write(`<br>`);

// Se ocupa el método for each para que liste todos los objetos del array dental
dental.forEach(paciente=>{
    document.write(`<p style="margin-left: 400px">${paciente.hora} - ${paciente.especialista} - ${paciente.paciente} - ${paciente.RUT} - ${paciente.prevision}</p>`);
});
document.write(`<br>`);
document.write(`<h3 class="font-weight-bold" style="margin-left: 400px">Nombres de pacientes.</h3>`);
document.write(`<br>`);

// Se ocupa el método for each para que liste todos los objetos del array consultasTotal
consultasTotal.forEach(dato=>{
    document.write(`<p style="margin-left: 400px">${dato.paciente}</p>`);
});
document.write(`<br>`);
document.write(`<h3 class="font-weight-bold" style="margin-left: 400px">Pacientes de área Dental con Isapre</h3>`);
document.write(`<br>`);

// Se ocupa el método for each para que liste todos los objetos de la función filter del array dental (Nombre del paciente)
// y que sea usuario de Isapre
dentalIsapre.forEach(Isapre=>{
    document.write(`<p style="margin-left: 400px">${Isapre.paciente} - ${Isapre.prevision}</p>`);
});
document.write(`<br>`);
document.write(`<h3 class="font-weight-bold" style="margin-left: 400px">Pacientes de área Traumatología con Fonasa</h3>`);
document.write(`<br>`);

// Se ocupa método for each para que liste todos los objetos de la función filter del 
// array traumatologia (nombre del paciente y que sea usuario de Fonasa)
traumatologiaFonasa.forEach(Fonasa=>{
    document.write(`<p style="margin-left: 400px">${Fonasa.paciente} - ${Fonasa.prevision}</p>`);
});

