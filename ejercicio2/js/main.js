import Instituto from "./Instituto.js";

const instituto = new Instituto("1", "Instituto1");
instituto.agregarGrupo("A", 30);
instituto.agregarGrupo("B", 25);

console.log("Código del instituto:", instituto.getCodInstituto());
console.log("Número total de alumnos:", instituto.numeroTotalAlumnos());
console.log(instituto.mostrarGrupos());