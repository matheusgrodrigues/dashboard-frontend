import React, { useCallback, useContext, useEffect, useState } from 'react';

import { BaseFormContext } from './BaseForm';

export type BaseFieldError = {
    errors: { [key: string]: [string] };
};

interface BaseFieldProps {
    render: React.ReactElement;
}

const BaseField: React.FC<BaseFieldProps> = ({ render }) => {
    const { submitButtonRef, state } = useContext(BaseFormContext);

    const [stateErrors, setStateErrors] = useState<BaseFieldError>();

    const checkHasError = useCallback(
        () =>
            stateErrors &&
            stateErrors.errors &&
            stateErrors.errors[render.props.name] &&
            stateErrors.errors[render.props.name].length > 0,
        [stateErrors, render]
    );

    const handleDisableSubmitButton = useCallback(
        () =>
            checkHasError() ? submitButtonRef.current?.setDisabled(true) : submitButtonRef.current?.setDisabled(false),
        [submitButtonRef, checkHasError]
    );

    const updateErrorMessage: React.KeyboardEventHandler<HTMLInputElement | HTMLDivElement> = useCallback(
        (e) => {
            e.preventDefault();

            if (stateErrors) {
                const newErrors = { ...stateErrors };
                delete newErrors.errors[render.props.name];

                handleDisableSubmitButton();

                setStateErrors(newErrors);
            }
        },
        [handleDisableSubmitButton, stateErrors, render]
    );

    useEffect(() => {
        const loadServerErrors = () => {
            setStateErrors(state as BaseFieldError);
            handleDisableSubmitButton();
        };

        loadServerErrors();

        return () => {
            setStateErrors(undefined);
        };
    }, [handleDisableSubmitButton, state]);

    return (
        <>
            {React.cloneElement(render, {
                ...render.props,
                helperText: checkHasError() && stateErrors?.errors[render.props.name],
                onKeyUp: updateErrorMessage,
                error: checkHasError(),
            })}
        </>
    );
};

export default BaseField;
