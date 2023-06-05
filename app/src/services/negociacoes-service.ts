import { negociacoesDoDia } from "../interfaces/negociacao-do-dia";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
  public obterNegociacoes(): Promise<Negociacao[]> {
     return fetch("http://localhost:8080/dados")
      .then((response) => response.json())
      .then((dados: negociacoesDoDia[]) => {
        return dados.map((dadosHoje) => {
          return new Negociacao(
            new Date(),
            dadosHoje.vezes,
            dadosHoje.montante
          );
        });
      });
  }
}

