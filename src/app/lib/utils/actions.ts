'use server';

import { ZodObject, ZodRawShape } from 'zod';

interface ValidateFormRulesProps {
    payload: Record<string, FormDataEntryValue>;
    rules: ZodObject<ZodRawShape>;
}

export const validateFormRules = async ({ payload, rules }: ValidateFormRulesProps) => {
    const validatedFields = rules.safeParse(payload);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }
};
