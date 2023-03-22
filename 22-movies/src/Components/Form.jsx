import { useContext } from 'react';
import { AppContext } from '../Context';
import styles from '../Styles/form.module.sass';

let Form = () => {
    let { state, handleSetSearch } = useContext(AppContext);
    return (
        <form className={styles.container}>
            <label>Search a movie.</label>
            <input
                type="text"
                value={state.search}
                onChange={handleSetSearch}
            />
        </form>
    );
};

export default Form;
