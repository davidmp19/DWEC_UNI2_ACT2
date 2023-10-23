function separaNumeros(...cosas) {
    const numerosEnteros = [];
        for(const num of cosas){
            if (Number.isInteger(num)) {
        numerosEnteros.push(num);
      }
    }
  
    return numerosEnteros;
  }


  console.log(separaNumeros(10, "hola", 7, "hola", 42, "hola", -5));