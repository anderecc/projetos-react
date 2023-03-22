import { useContext } from 'react';
import AppContext from '../data/AppContext';

export default function Theme(props) {
    const context = useContext(AppContext);
    function trocaTheme(theme) {
        context.setState({ ...context, theme });
    }
    return (
        <div className="theme">
            <p>theme</p>
            <div className="theme-container">
                <div className="theme-container-option ">
                    <p>1</p>
                    <div
                        className="theme-select rounded-left theme-1"
                        onClick={(e) => trocaTheme(1)}
                    >
                        <div
                            className={`${
                                context.state.theme === 1
                                    ? 'theme-selected'
                                    : false
                            }`}
                        ></div>
                    </div>
                </div>
                <div className="theme-container-option ">
                    <p>2</p>
                    <div
                        className="theme-select theme-2"
                        onClick={(e) => trocaTheme(2)}
                    >
                        <div
                            className={`${
                                context.state.theme === 2
                                    ? 'theme-selected'
                                    : false
                            }`}
                        ></div>
                    </div>
                </div>
                <div className="theme-container-option ">
                    <p>3</p>
                    <div
                        className="theme-select rounded-right theme-3"
                        onClick={(e) => trocaTheme(3)}
                    >
                        <div
                            className={`${
                                context.state.theme === 3
                                    ? 'theme-selected'
                                    : false
                            }`}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
