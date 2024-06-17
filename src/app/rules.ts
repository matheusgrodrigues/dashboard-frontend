import { z } from 'zod';

const formLoginRules = z.object({
    email: z
        .string({
            invalid_type_error: 'Email inválido',
        })
        .min(4),

    password: z
        .string({
            invalid_type_error: 'Informe a senha',
        })
        .min(3),
});

export default formLoginRules;
