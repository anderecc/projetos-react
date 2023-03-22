import { useContext } from 'react';
import { AppContext } from '../context';
import { FaCheck } from 'react-icons/fa';
import styles from '../styles/formFilter.module.sass';
import cvtCurrency from '../functions/cvtCurrency';

let FormFilter = () => {
    let {
        state,
        handleSetCategory,
        handleSetCompany,
        handleSetColor,
        handleSetPrice,
        handleSetShipping,
        handleSetSearch,
        handleSetClearFilters,
    } = useContext(AppContext);

    return (
        <section className={styles.container}>
            <form
                onSubmit={(e) => e.preventDefault()}
                className={styles.content}
            >
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => handleSetSearch(e.target.value)}
                    value={state.search}
                    className={styles.search}
                />
                <section className={styles.category}>
                    <p className={styles.title}>Category</p>
                    <div>
                        <span
                            onClick={() => handleSetCategory('all')}
                            className={
                                state.category === 'all' ? styles.active : ''
                            }
                        >
                            All
                        </span>
                        <span
                            onClick={() => handleSetCategory('office')}
                            className={
                                state.category === 'office' ? styles.active : ''
                            }
                        >
                            Office
                        </span>
                        <span
                            onClick={() => handleSetCategory('living room')}
                            className={
                                state.category === 'living room'
                                    ? styles.active
                                    : ''
                            }
                        >
                            Living Room
                        </span>
                        <span
                            onClick={() => handleSetCategory('kitchen')}
                            className={
                                state.category === 'kitchen'
                                    ? styles.active
                                    : ''
                            }
                        >
                            Kitchen
                        </span>
                        <span
                            onClick={() => handleSetCategory('bedroom')}
                            className={
                                state.category === 'bedroom'
                                    ? styles.active
                                    : ''
                            }
                        >
                            Bedroom
                        </span>
                        <span
                            onClick={() => handleSetCategory('dining')}
                            className={
                                state.category === 'dining' ? styles.active : ''
                            }
                        >
                            Dining
                        </span>
                        <span
                            onClick={() => handleSetCategory('kids')}
                            className={
                                state.category === 'kids' ? styles.active : ''
                            }
                        >
                            Kids
                        </span>
                    </div>
                </section>
                <section className={styles.company}>
                    <p className={styles.title}>Company</p>
                    <select
                        name="Company"
                        onChange={(e) => handleSetCompany(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="marcos">Marcos</option>
                        <option value="liddy">Liddy</option>
                        <option value="ikea">Ikea</option>
                        <option value="caressa">Caressa</option>
                    </select>
                </section>
                <section className={styles.colors}>
                    <p className={styles.title}>Colors</p>
                    <div>
                        <span onClick={() => handleSetColor('all')}>All</span>
                        <span
                            onClick={() => handleSetColor('#ff0000')}
                            className={`${styles.color} ${
                                state.color === '#ff0000'
                                    ? styles.activeColor
                                    : ''
                            }`}
                            style={{ backgroundColor: '#F58A83' }}
                        >
                            <FaCheck></FaCheck>
                        </span>
                        <span
                            onClick={() => handleSetColor('#00ff00')}
                            className={`${styles.color} ${
                                state.color === '#00ff00'
                                    ? styles.activeColor
                                    : ''
                            }`}
                            style={{ backgroundColor: '#9FEE85' }}
                        >
                            <FaCheck></FaCheck>
                        </span>
                        <span
                            onClick={() => handleSetColor('#0000ff')}
                            className={`${styles.color} ${
                                state.color === '#0000ff'
                                    ? styles.activeColor
                                    : ''
                            }`}
                            style={{ backgroundColor: '#A09BFB' }}
                        >
                            <FaCheck></FaCheck>
                        </span>
                        <span
                            onClick={() => handleSetColor('#000')}
                            className={`${styles.color} ${
                                state.color === '#000' ? styles.activeColor : ''
                            }`}
                            style={{ backgroundColor: '#7F7F7F' }}
                        >
                            <FaCheck></FaCheck>
                        </span>
                        <span
                            onClick={() => handleSetColor('#ffb900')}
                            className={`${styles.color} ${
                                state.color === '#ffb900'
                                    ? styles.activeColor
                                    : ''
                            }`}
                            style={{ backgroundColor: '#FFD889' }}
                        >
                            <FaCheck></FaCheck>
                        </span>
                    </div>
                </section>
                <section className={styles.price}>
                    <p className={styles.title}>Price</p>
                    <div>
                        <p>$ {cvtCurrency(state.price)}</p>
                        <input
                            type="range"
                            name="price"
                            min={0}
                            max={309999}
                            value={state.price}
                            onChange={(e) => handleSetPrice(e.target.value)}
                        />
                    </div>
                </section>
                <section className={styles.shipping}>
                    <label className={styles.title}>Free shipping</label>
                    <input
                        type="checkbox"
                        name="shipping"
                        onChange={(e) =>
                            handleSetShipping(e.target.checked ? true : 'all')
                        }
                    />
                </section>
                <div>
                    <button
                        onClick={handleSetClearFilters}
                        className={styles.btn_clear}
                    >
                        Clear Filters
                    </button>
                </div>
            </form>
        </section>
    );
};

export default FormFilter;
