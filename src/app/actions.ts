'use server';

import { redirect } from 'next/navigation';
import { FieldValues } from 'react-hook-form';

import validateFormServerRules from '../core/utils/actions/action-rules';
import { getRoute } from '../core/utils/routes';

import formLoginRules from './rules';

export const loginClientAction = async (data: FieldValues) => {
    return data;
};

export const loginServerAction = async (prevState: unknown, queryData: FormData) => {
    const data = Object.fromEntries(queryData);

    const validateRules = await validateFormServerRules({ formDataEntryValue: data, rules: formLoginRules });

    return validateRules ?? redirect(getRoute('paginas').path);
};
