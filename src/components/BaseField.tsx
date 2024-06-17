import React, { useCallback, useContext } from 'react';

import { BaseFormContext } from './BaseForm';

export type BaseFieldError = {
    errors: { [key: string]: [string] };
};

interface BaseFieldProps {
    render: React.ReactElement;
}

const BaseField: React.FC<BaseFieldProps> = ({ render }) => {
    const { state } = useContext(BaseFormContext);

    const getStateErrors = state as BaseFieldError;

    const checkHasError = useCallback(
        () =>
            getStateErrors &&
            getStateErrors.errors &&
            getStateErrors.errors[render.props.name] &&
            getStateErrors.errors[render.props.name].length > 0,
        [getStateErrors, render]
    );

    const getHelperText = useCallback(() => {
        if (checkHasError()) {
            const message = getStateErrors.errors[render.props.name]?.toString();
            const firstLetter = message?.toString()[0].toUpperCase();
            const restString = message?.toString().slice(1, message.length);

            return `${firstLetter}${restString}`;
        }
    }, [getStateErrors, checkHasError, render]);

    const updateErrorMessage: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        e.preventDefault();
        e.currentTarget.form?.requestSubmit();
    }, []);

    return (
        <>
            {checkHasError()
                ? React.cloneElement(render, {
                      ...render.props,
                      helperText: getHelperText(),
                      onChange: updateErrorMessage,
                      error: true,
                  })
                : React.cloneElement(render, {
                      ...render.props,
                  })}
        </>
    );
};

export default BaseField;
