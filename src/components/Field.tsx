import React, { HTMLInputTypeAttribute, useCallback } from "react";

import { Controller, useFormContext } from "./Form";

interface FieldProps {
   render: React.ReactElement;
   name: string;
   type?: HTMLInputTypeAttribute;
   id?: string;
}

export const Field: React.FC<FieldProps> = ({ render, name, type, id }) => {
   const { control, formState } = useFormContext();

   const getHelperText = useCallback(() => {
      const message = formState.errors[name]?.message?.toString();

      const firstLetter = message?.toString()[0].toUpperCase();
      const restString = message?.toString().slice(1, message.length);

      return `${firstLetter}${restString}`;
   }, [formState, name]);

   return (
      <Controller
         defaultValue={""}
         control={control}
         render={({ field }) => {
            const props =
               type === "checkbox"
                  ? { ...field, ref: null, checked: field.value, onCheckedChange: field.onChange }
                  : { ...field, ref: null, onChange: field.onChange };

            return (
               <>
                  {formState.errors && formState.errors[name]
                     ? React.cloneElement(render, {
                          ...props,
                          id: id ?? name,
                          error: true,
                          helperText: getHelperText(),
                       })
                     : React.cloneElement(render, {
                          ...props,
                          id: id ?? name,
                       })}
               </>
            );
         }}
         name={name}
      />
   );
};

export default Field;
