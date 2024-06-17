import React, { useCallback, useContext } from 'react';

import { BaseFormServerContext } from './BaseFormServer';

export type BaseFieldServerError = {
    errors: { [key: string]: [string] };
};

interface BaseFieldServerProps {
    render: React.ReactElement;
}

const BaseFieldServer: React.FC<BaseFieldServerProps> = ({ render }) => {
    const { state } = useContext(BaseFormServerContext);

    const getStateErrors = state as BaseFieldServerError;

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

    return (
        <>
            {checkHasError()
                ? React.cloneElement(render, {
                      ...render.props,
                      helperText: getHelperText(),
                      error: true,
                  })
                : React.cloneElement(render, {
                      ...render.props,
                  })}
        </>
    );
};

export default BaseFieldServer;
