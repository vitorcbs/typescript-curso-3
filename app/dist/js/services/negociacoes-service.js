import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoes() {
        return fetch("http://localhost:8080/dados")
            .then((response) => response.json())
            .then((dados) => {
            return dados.map((dadosHoje) => {
                return new Negociacao(new Date(), dadosHoje.vezes, dadosHoje.montante);
            });
        });
    }
}
