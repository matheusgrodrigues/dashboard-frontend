'use server';

import { redirect } from 'next/navigation';
import { FieldValues } from 'react-hook-form';

import validateFormServerRules from '../core/utils/actions/action-rules';
import { getRoute } from '../core/utils/routes';

import formLoginRules from './rules-temp-zod';

/*
    TODO: Abordagem client.

    Problema: 
        se validar apenas no cliente, se um usuario desativar o javascript e enviar, ele enviará dados inválidos.
        
    Solução: 
        Tratar os FieldValues do frontend aqui no servidor com zod.
        Devolver os erros para o frontend.
        O Frontend irá receber os erros, e atualizar of FormErrors, para re-enviar novamente o form.
        Se tudo estiver ok, sem erro no client e no server, o formulario submete normalmente.
*/
export const loginClientAction = async (data: FieldValues) => {
    return data;
};

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
export const loginServerAction = async (prevState: unknown, queryData: FormData) => {
    const data = Object.fromEntries(queryData);

    const validateRules = await validateFormServerRules({ formDataEntryValue: data, rules: formLoginRules });

    return validateRules ?? redirect(getRoute('paginas').path);
};
