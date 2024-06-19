'use server';

import { validateFormRules } from '../core/utils/actions';

import formLoginRules from './rules';

import { signIn } from '../auth';

export const loginAction = async (prevState: unknown, queryData: FormData) => {
    const data = Object.fromEntries(queryData);

    const validateRules = await validateFormRules({ payload: data, rules: formLoginRules });

    if (validateRules) {
        return validateRules;
    } else {
        return await signIn('credentials', data);
    }
};
