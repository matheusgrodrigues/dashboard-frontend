import { FormHTMLAttributes, createContext } from 'react';
import { useFormState } from 'react-dom';

interface BaseFormServerContextProps {
    state: unknown;
}

export const BaseFormServerContext = createContext({} as BaseFormServerContextProps);

interface BaseFormServerProps extends React.DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    initialState: unknown;
    formAction: (prevState: unknown, formData: FormData) => void;
    children: React.ReactNode;
    permalink?: string;
}

const BaseFormServer: React.FC<BaseFormServerProps> = ({ initialState, formAction, children, permalink, ...props }) => {
    const [state, action] = useFormState(formAction, initialState);

    return (
        <BaseFormServerContext.Provider value={{ state }}>
            <form {...props} action={action}>
                {children}
            </form>
        </BaseFormServerContext.Provider>
    );
};

export default BaseFormServer;
