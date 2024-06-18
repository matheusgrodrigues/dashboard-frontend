import { FormHTMLAttributes, createContext, useRef } from 'react';
import { useFormState } from 'react-dom';
import { BaseButtonRef } from './BaseButton';

interface BaseFormContextProps {
    submitButtonRef: React.RefObject<BaseButtonRef>;
    state: unknown;
}

export const BaseFormContext = createContext({} as BaseFormContextProps);

interface BaseFormProps extends React.DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    initialState: unknown;
    formAction: (prevState: unknown, formData: FormData) => void;
    children: React.ReactNode;
    permalink?: string;
}

const BaseForm: React.FC<BaseFormProps> = ({ initialState, formAction, children, permalink, ...props }) => {
    const [state, action] = useFormState(formAction, initialState);

    const submitButtonRef = useRef<BaseButtonRef>(null);

    return (
        <BaseFormContext.Provider value={{ submitButtonRef, state }}>
            <form {...props} action={action}>
                {children}
            </form>
        </BaseFormContext.Provider>
    );
};

export default BaseForm;
