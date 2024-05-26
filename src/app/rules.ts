import * as yup from 'yup';

import regex from '../core/utils/regex';

yup.setLocale({
    mixed: {
        required: '${path} é um campo obrigatório.',
    },
});

const formLoginRules = yup.object({
    password: yup.string().required(),
    email: yup.string().required().matches(regex.email, 'E-mail inválido'),
});

export default formLoginRules;
