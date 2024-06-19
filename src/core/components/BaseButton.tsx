import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useFormStatus } from 'react-dom';

export interface BaseButtonRef {
    setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

interface BaseButtonProps {
    render: React.ReactElement;
}

const BaseButton: React.ForwardRefRenderFunction<BaseButtonRef, BaseButtonProps> = ({ render }, ref) => {
    const [disabled, setDisabled] = useState(false);

    const { pending } = useFormStatus();

    useImperativeHandle(
        ref,
        () => ({
            setDisabled,
        }),
        []
    );

    return (
        <>
            {React.cloneElement(render, {
                ...render.props,
                disabled: pending || disabled,
            })}
        </>
    );
};

export default forwardRef(BaseButton);
