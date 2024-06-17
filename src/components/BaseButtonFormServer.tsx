import React from 'react';
import { useFormStatus } from 'react-dom';

interface BaseButtonFormServerProps {
    render: React.ReactElement;
}

const BaseButtonFormServer: React.FC<BaseButtonFormServerProps> = ({ render }) => {
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

export default BaseButtonFormServer;
