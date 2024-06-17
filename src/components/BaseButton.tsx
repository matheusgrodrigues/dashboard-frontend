import React from 'react';
import { useFormStatus } from 'react-dom';

interface BaseButtonProps {
    render: React.ReactElement;
}

const BaseButton: React.FC<BaseButtonProps> = ({ render }) => {
    const { pending } = useFormStatus();

    return (
        <>
            {React.cloneElement(render, {
                ...render.props,
                disabled: pending,
            })}
        </>
    );
};

export default BaseButton;
