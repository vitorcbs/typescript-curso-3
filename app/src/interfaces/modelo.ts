import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {
    //todo mundo que aplicar a interface Modelo, é obrigado a implementar os 
    //metodos de imprimir e comparar
}