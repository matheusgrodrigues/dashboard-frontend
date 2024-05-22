import * as yup from "yup";

yup.setLocale({
   mixed: {
      required: "${path} é um campo obrigatório.",
   },
});

import regex from "@/core/utils/regex";

const formLoginRules = yup.object({
   password: yup.string().required(),
   email: yup.string().required().matches(regex.email, "E-mail inválido"),
});

export default formLoginRules;
