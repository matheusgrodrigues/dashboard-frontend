'use server';

import { ZodObject, ZodRawShape } from 'zod';

interface ValidateFormServerSchemaProps {
    formDataEntryValue: Record<string, FormDataEntryValue>;
    rules: ZodObject<ZodRawShape>;
}

const validateFormServerRules = async ({ formDataEntryValue, rules }: ValidateFormServerSchemaProps) => {
    const validatedFields = rules.safeParse({
        email: formDataEntryValue.email,
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }
};

export default validateFormServerRules;
