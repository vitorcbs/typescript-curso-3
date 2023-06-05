export function esqueletoDecorator() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value
        descriptor.value = function (...args: any[]) {
            const retorno = originalMethod.apply(this, args)
            return retorno
        }
        return descriptor
    }
}