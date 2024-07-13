'use server'

import { EmissionForm } from "./types"

export async function createEmission(data: EmissionForm) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    status: 201,
    message: `Create Emission - ${data.informacoesBasicas.nomeEmissao}!`,
  };
}