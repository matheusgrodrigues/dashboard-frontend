import React, { HTMLInputTypeAttribute, useCallback } from 'react';

import { Controller, useFormContext } from './BaseForm';

interface BaseFieldProps {
    children: React.ReactElement;
    name: string;
    type?: HTMLInputTypeAttribute;
}

export const BaseField: React.FC<BaseFieldProps> = ({ children, name, type }) => {
    const { control, formState } = useFormContext();

    const getHelperText = useCallback(() => {
        const message = formState.errors[name]?.message?.toString();

        const firstLetter = message?.toString()[0].toUpperCase();
        const restString = message?.toString().slice(1, message.length);

        return `${firstLetter}${restString}`;
    }, [formState, name]);

    return (
        <Controller
            defaultValue={''}
            control={control}
            render={({ field }) => {
                const props =
                    type === 'checkbox'
                        ? { ...field, ref: null, checked: field.value, onCheckedChange: field.onChange }
                        : { ...field, ref: null, onChange: field.onChange };

                return (
                    <>
                        {formState.errors && formState.errors[name]
                            ? React.cloneElement(children, {
                                  ...props,
                                  helperText: getHelperText(),
                                  error: true,
                              })
                            : React.cloneElement(children, {
                                  ...props,
                              })}
                    </>
                );
            }}
            name={name}
        />
    );
};

export default BaseField;
