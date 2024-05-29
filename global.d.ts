import baseLayoutMessage from './src/config/messages/components/baseLayout/pt-BR.json';
import dashboardMessage from './src/config/messages/pages/dashboard/pt-BR.json';
import loginMessage from './src/config/messages/pages/login/pt-BR.json';
import paginas from './src/config/messages/pages/dashboard/paginas/pt-BR.json';

type Messages = typeof baseLayoutMessage & typeof dashboardMessage & typeof loginMessage & typeof paginas;

declare global {
    interface IntlMessages extends Messages {}
}
