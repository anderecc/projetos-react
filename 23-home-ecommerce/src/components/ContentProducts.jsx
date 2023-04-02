import { useContext } from 'react';
import { FaBars, FaThLarge } from 'react-icons/fa';
import { AppContext } from '../context';
import CardDetailed from './CardDetailed';
import CardSimple from './CardSimple';
import styles from '../styles/products/contentProducts.module.sass';
import Loading from './Loading';

let ContentProducts = () => {
    let { state, handleSetSort, handleSetTypeCard } = useContext(AppContext);

    let renderItems = () => {
        return state.data.length !== 0
            ? // eslint-disable-next-line array-callback-return
              state.data.map((item) => {
                  if (
                      /** NO FILTERS */
                      state.search === '' &&
                      state.category === 'all' &&
                      state.company === 'all' &&
                      state.color === 'all' &&
                      state.price >= item.price &&
                      state.shipping === 'all'
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** ALL FILTERS */
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === item.category &&
                      state.company === item.company &&
                      item.colors.includes(state.color) &&
                      state.price >= item.price &&
                      state.shipping === item.shipping
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** SEARCH */
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === 'all' &&
                      state.company === 'all' &&
                      state.color === 'all' &&
                      state.price >= item.price &&
                      state.shipping === 'all'
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** SEARCH + CAT*/
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === item.category &&
                      state.company === 'all' &&
                      state.color === 'all' &&
                      state.price >= item.price &&
                      state.shipping === 'all'
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** SEARCH + CAT + COM*/
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === item.category &&
                      state.company === item.company &&
                      state.color === 'all' &&
                      state.price >= item.price &&
                      state.shipping === 'all'
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** SEARCH + CAT + COL*/
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === item.category &&
                      state.company === 'all' &&
                      item.colors.includes(state.color) &&
                      state.price >= item.price &&
                      state.shipping === 'all'
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** SEARCH + CAT + SHIP*/
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === item.category &&
                      state.company === 'all' &&
                      state.color === 'all' &&
                      state.price >= item.price &&
                      state.shipping === item.shipping
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** SEARCH + CAT + COM + COL*/
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === item.category &&
                      state.company === item.company &&
                      item.colors.includes(state.color) &&
                      state.price >= item.price &&
                      state.shipping === 'all'
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** SEARCH + CAT + COM + SHIP*/
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === item.category &&
                      state.company === item.company &&
                      state.color === 'all' &&
                      state.price >= item.price &&
                      state.shipping === item.shipping
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** SEARCH + COM*/
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === 'all' &&
                      state.company === item.company &&
                      state.color === 'all' &&
                      state.price >= item.price &&
                      state.shipping === 'all'
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** SEARCH + COM + COL*/
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === 'all' &&
                      state.company === item.company &&
                      item.colors.includes(state.color) &&
                      state.price >= item.price &&
                      state.shipping === 'all'
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** SEARCH + COM + SHIP*/
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === 'all' &&
                      state.company === item.company &&
                      state.color === 'all' &&
                      state.price >= item.price &&
                      state.shipping === item.shipping
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** SEARCH + COM + COL + SHIP*/
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === 'all' &&
                      state.company === item.company &&
                      item.colors.includes(state.color) &&
                      state.price >= item.price &&
                      state.shipping === item.shipping
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** SEARCH + COL*/
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === 'all' &&
                      state.company === 'all' &&
                      item.colors.includes(state.color) &&
                      state.price >= item.price &&
                      state.shipping === 'all'
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** SEARCH + COL + SHIP*/
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === 'all' &&
                      state.company === 'all' &&
                      item.colors.includes(state.color) &&
                      state.price >= item.price &&
                      state.shipping === item.shipping
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** SEARCH + COL + CAT + SHIP*/
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === item.category &&
                      state.company === 'all' &&
                      item.colors.includes(state.color) &&
                      state.price >= item.price &&
                      state.shipping === item.shipping
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  } else if (
                      /** SEARCH + SHIP*/
                      item.name
                          .toLowerCase()
                          .includes(state.search.toLowerCase()) &&
                      state.category === 'all' &&
                      state.company === 'all' &&
                      state.color === 'all' &&
                      state.price >= item.price &&
                      state.shipping === item.shipping
                  ) {
                      return state.typeCard === 'detailed' ? (
                          <CardDetailed
                              key={item.id}
                              props={item}
                          ></CardDetailed>
                      ) : state.typeCard === 'simple' ? (
                          <CardSimple key={item.id} props={item}></CardSimple>
                      ) : null;
                  }
              })
            : null;
    };

    return (
        <div className={styles.container}>
            <section className={styles.sort_container}>
                <div className={styles.buttons_container}>
                    <span
                        className={`${styles.bars} ${
                            state.typeCard === 'detailed' ? styles.active : ''
                        }`}
                        onClick={() => handleSetTypeCard('detailed')}
                    >
                        <FaBars></FaBars>
                    </span>
                    <span
                        className={`${styles.large} ${
                            state.typeCard === 'simple' ? styles.active : ''
                        }`}
                        onClick={() => handleSetTypeCard('simple')}
                    >
                        <FaThLarge></FaThLarge>
                    </span>
                </div>
                <p className={styles.found}>
                    {state.data.length > 0
                        ? renderItems().filter((item) => item !== undefined)
                              .length + ' '
                        : 0 + ' '}
                    products found
                </p>
                <hr />
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className={styles.sort_by}
                >
                    <label>Sort by</label>
                    <select
                        name="sort"
                        onChange={(e) => handleSetSort(e.target.value)}
                    >
                        <option value="price-lowest">Price (Lowest)</option>
                        <option value="price-highest">Price (Highest)</option>
                        <option value="name-a-z">Name (A - Z)</option>
                        <option value="name-z-a">Name (Z - A)</option>
                    </select>
                </form>
            </section>
            <section
                className={`${styles.products_container} ${
                    state.loading ? styles.loading : ''
                }`}
            >
                {state.loading ? (
                    <Loading></Loading>
                ) : state.data.length > 0 &&
                  renderItems().every((item) => item === undefined) ? (
                    <p className={styles.no_matched}>
                        Sorry, no products matched your search.
                    </p>
                ) : (
                    renderItems()
                )}
            </section>
        </div>
    );
};

export default ContentProducts;
