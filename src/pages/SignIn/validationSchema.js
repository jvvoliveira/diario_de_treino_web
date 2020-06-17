import * as Yup from "yup";

export const validationLogin = Yup.object().shape({
  email: Yup.string().email("Insira um email válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string().required("A senha é obrigatória")
});

export const validationRegister = Yup.object().shape({
  email: Yup.string().email("Insira um email válido")
    .required("O e-mail é obrigatório"),
  name: Yup.string().required("O nome é obrigatório"),
  password: Yup.string().min(6, "Insira no mínimo 6 caracteres").required("A senha é obrigatória"),
  confirmPassword: Yup.string()
    .when('password', (password, field) => password ? field.required("A confirmação da senha é obrigatória")
      .oneOf([Yup.ref('password')], "As senhas não estão iguais") : field),
});