import React, { forwardRef, useImperativeHandle } from "react";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import {
   UseFormRegisterReturn,
   UseFormRegister,
   useFormContext,
   UseFormReturn,
   useController,
   SubmitHandler,
   FormProvider,
   FieldValues,
   Controller,
   useForm,
} from "react-hook-form";

export interface BaseFormRef extends UseFormReturn<FieldValues, any, undefined> {}

interface BaseFormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
   validationSchema: yup.ObjectSchema<{ [key: string]: any }>;
   children: React.ReactNode;
   onSubmit: SubmitHandler<any>;
}

const BaseForm: React.ForwardRefRenderFunction<BaseFormRef, BaseFormProps> = (
   { validationSchema, onSubmit, children, ...props },
   ref
) => {
   const methods = useForm<FieldValues>({
      resolver: yupResolver(validationSchema),
   });

   useImperativeHandle(ref, () => ({ ...methods }), [methods]);

   return (
      <FormProvider {...methods}>
         <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
            {children}
         </form>
      </FormProvider>
   );
};

export type { UseFormRegisterReturn, UseFormRegister, SubmitHandler, FieldValues };

export { useFormContext, useForm, useController, Controller };

export default forwardRef(BaseForm);
