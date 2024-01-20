import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerGSAPPlugins } from "./utils/registerGSAP.ts";

import { I18nextProvider } from "react-i18next";
import { Provider } from 'react-redux';

import store from './utils/store';
import i18n from "./utils/i18n.ts";

registerGSAPPlugins();
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <App/>
        </I18nextProvider>
    </Provider>)
