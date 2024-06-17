'use server';

import { redirect } from 'next/navigation';

import { validateFormRules } from '../core/utils/actions';
import { getRoute } from '../core/utils/routes';

import formLoginRules from './rules';

export const loginAction = async (prevState: unknown, queryData: FormData) => {
    const data = Object.fromEntries(queryData);

    const validateRules = await validateFormRules({ payload: data, rules: formLoginRules });

    return validateRules ?? redirect(getRoute('paginas').path);
};
