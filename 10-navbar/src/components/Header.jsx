import { useContext } from 'react';
import { AppContext } from '../context';
import ItemLink from './ItemLink';
import '../styles/header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

let Header = () => {
    let { state, handleMenuOpenOrClose } = useContext(AppContext);

    let renderItems = (items) => {
        return items.map((link) => {
            return (
                <ItemLink
                    key={link.id}
                    url={link.url}
                    text={link.text ? link.text : link.icon}
                    classNa={link.text ? 'link' : 'social'}
                    targ={link.icon ? true : false}
                />
            );
        });
    };

    return (
        <div className="header-container">
            <div className="header-content">
                <h5 className="logo">
                    C<span>oooooo</span>der
                </h5>

                {state.width === 'desktop' ? (
                    <>
                        <ul className="links-container">
                            {state.links ? renderItems(state.links) : <></>}
                        </ul>
                        <ul className="social-container">
                            {state.social ? renderItems(state.social) : <></>}
                        </ul>
                    </>
                ) : (
                    <>
                        {!state.menu ? (
                            <FaBars
                                className="button "
                                onClick={() =>
                                    handleMenuOpenOrClose(!state.menu)
                                }
                            />
                        ) : (
                            <FaTimes
                                className="button "
                                onClick={() =>
                                    handleMenuOpenOrClose(!state.menu)
                                }
                            />
                        )}
                    </>
                )}
            </div>
            {state.menu && state.width === 'mobile' ? (
                <>
                    <ul className="links-container menu-open">
                        {state.links ? renderItems(state.links) : <></>}
                        <ul className="social-container">
                            {state.social ? renderItems(state.social) : <></>}
                        </ul>
                    </ul>
                </>
            ) : (
                <>
                    <ul className="links-container menu-close">
                        {state.links ? renderItems(state.links) : <></>}
                        <ul className="social-container">
                            {state.social ? renderItems(state.social) : <></>}
                        </ul>
                    </ul>
                </>
            )}
        </div>
    );
};

export default Header;
