import React, { useContext } from 'react';
import { useFormStatus } from 'react-dom';

import { BaseFormContext } from './BaseForm';
import { BaseFieldError } from './BaseField';

interface BaseButtonProps {
    render: React.ReactElement;
}

const BaseButton: React.FC<BaseButtonProps> = ({ render }) => {
    const { pending } = useFormStatus();

    const { state } = useContext(BaseFormContext);

    const getStateErrors = state as BaseFieldError;

    return (
        <>
            {React.cloneElement(render, {
                ...render.props,
                disabled: getStateErrors || pending,
            })}
        </>
    );
};

export default BaseButton;
