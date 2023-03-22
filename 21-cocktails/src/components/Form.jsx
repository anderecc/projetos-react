import { useContext } from 'react';
import { AppContext } from '../context';
import styles from '../styles/form.module.sass';

let Form = () => {
    let { state, handleFormValue } = useContext(AppContext);
    return (
        <form className={styles.container} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="input">Search Your Favorite Cocktail</label>
            <input
                type="text"
                value={state.search}
                onChange={handleFormValue}
            />
        </form>
    );
};

export default Form;
