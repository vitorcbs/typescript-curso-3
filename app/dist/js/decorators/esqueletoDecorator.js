export function esqueletoDecorator() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const retorno = originalMethod.apply(this, args);
            return retorno;
        };
        return descriptor;
    };
}
