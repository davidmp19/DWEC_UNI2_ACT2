class Instituto {
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
      totalAlumnos += grupo.numAlumnos;
    }
    return totalAlumnos;
  }
}
class Grupo{
constructor(codGrupo,numAlum){
    this.codGrupo=codGrupo;
    this.numAlum=numAlum;
} 

}

const instituto = new Instituto("1", "Instituto1");
instituto.agregarGrupo("A", 30);
instituto.agregarGrupo("B", 25);

console.log("Código del instituto:", instituto.getCodInstituto());
console.log("Número total de alumnos:", instituto.numeroTotalAlumnos());