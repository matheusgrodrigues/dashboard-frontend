import { FormHTMLAttributes, createContext } from 'react';
import { useFormState } from 'react-dom';

interface BaseFormContextProps {
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

    return (
        <BaseFormContext.Provider value={{ state }}>
            <form {...props} action={action}>
                {children}
            </form>
        </BaseFormContext.Provider>
    );
};

export default BaseForm;
