export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value; //guarda o metodo original
    descriptor.value = function (...args: Array<any>) {
      let divisor = 1
      let unidade = 'milisegundos'
      if (emSegundos) {
        divisor = 1000
        unidade = 'segundos'
      }
      //sobrescreve o metodo
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args); //passa cada item do array pro metodo
      const t2 = performance.now();
      console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);
      retorno;
    };

    return descriptor;
  };
}
 