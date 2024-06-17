import { z } from 'zod';

const formLoginRules = z.object({
    email: z
        .string({
            invalid_type_error: 'Email inválido',
        })
        .min(4),
});

export default formLoginRules;
