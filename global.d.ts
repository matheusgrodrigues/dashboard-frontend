import dashboardMessage from './src/config/messages/pages/dashboard/pt-BR.json';
import loginMessage from './src/config/messages/pages/login/pt-BR.json';
import paginas from './src/config/messages/pages/dashboard/paginas/pt-BR.json';

type Messages = typeof dashboardMessage & typeof loginMessage & typeof paginas;

declare global {
    interface IntlMessages extends Messages {}
}
