import { useState } from 'react';
import Layout from './components/Layout';
import Theme from './components/Theme';
import AppContext, { data } from './data/AppContext';

export default function Calculadora(props) {
    const [state, setState] = useState(data);
    const theme =
        state.theme === 1
            ? 'theme-calc-1'
            : state.theme === 2
            ? 'theme-calc-2'
            : 'theme-calc-3';

    return (
        <AppContext.Provider value={{ state, setState }}>
            <div className={`calculadora ${theme}`}>
                <div className="calculadora-container">
                    <div className="calculadora-header">
                        <p className="logo">calc</p>
                        <Theme />
                    </div>
                    <Layout />
                </div>
            </div>
        </AppContext.Provider>
    );
}
