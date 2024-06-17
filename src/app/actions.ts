'use server';

import { redirect } from 'next/navigation';

import { validateFormRules } from '../core/utils/actions/action-rules';
import { getRoute } from '../core/utils/routes';

import formLoginServerRules from './rules';

/*
    TODO: Abordagem server
        O servidor está validando os dados recebidos com e sem javascript habilitados, e devolve os erros no front ou segue adiante.

    Problema:
        O usuario consegue clicar em enviar e validar os dados no servidor mesmo tendo erros no frontend.
        Os campos são preenchidos com os ultimos erros, porém, não some ao digitar a informação correta.

    Solução:
        Adicionar validação no client com onChange ou onKeyUp (melhor) para comparar com o schema do zod (o mesmo usado pelo server), para atualizar os erros no client.
        Não permitir clicar no botão submit enquanto houver erros para serem corrigidos no form do client.
        Quando todos os erros forem corrigidos, liberar o click no botão para validar novamente os dados no server e prosseguir no fluxo do sistema.
*/

export const loginAction = async (prevState: unknown, queryData: FormData) => {
    const data = Object.fromEntries(queryData);

    const validateRules = await validateFormRules({ payload: data, rules: formLoginServerRules });

    console.log(validateRules);
    return validateRules ?? redirect(getRoute('paginas').path);
};
