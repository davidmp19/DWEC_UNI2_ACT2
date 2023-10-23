import Grupo from "./Grupo.js";

export default class Instituto {
    constructor(codInstituto, nombre) {
      this.codInstituto = codInstituto;
      this.nombre = nombre;
      this.grupos = [];
    }
    getCodInstituto() {
    return this.codInstituto;
  }
  agregarGrupo(codGrupo, numAlum) {
    const nuevoGrupo = new Grupo(codGrupo, numAlum);
    this.grupos.push(nuevoGrupo);
  }
 numeroTotalAlumnos() {
    var totalAlumnos = 0;
    for (const grupo of this.grupos) {
      totalAlumnos += grupo.numAlum;
    }
    return totalAlumnos;
  }
  mostrarGrupos() {
    console.log("Grupos en el instituto:");
    for (const grupo of this.grupos) {
      console.log("Código de grupo: " + grupo.codGrupo + " Número de alumnos:" +grupo.numAlum);
    }
  }
}