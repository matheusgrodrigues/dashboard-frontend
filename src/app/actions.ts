'use server';

import { FieldValues } from 'react-hook-form';

export const loginAction = async (data: FieldValues) => {
    return data;
};

export const loginActionV2 = async (prevState: unknown, queryData: FormData) => {
    const data = Object.fromEntries(queryData);

    return data;
};
