'use server';

import { FieldValues } from 'react-hook-form';

import validateFormServerRules from '../core/utils/actions/action-rules';

import formLoginRules from './rules';

export const loginClientAction = async (data: FieldValues) => {
    return data;
};

export const loginServerAction = async (prevState: unknown, queryData: FormData) => {
    const data = Object.fromEntries(queryData);

    const validateRules = validateFormServerRules({ formDataEntryValue: data, rules: formLoginRules });

    return validateRules ?? data;
};
