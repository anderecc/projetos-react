import Form from './Form';
import styles from '../styles/content.module.sass';
import Card from './Card';
import { useContext } from 'react';
import { AppContext } from '../context';
import Loading from './Loading';

let Content = () => {
    let { state } = useContext(AppContext);

    let renderDrinks = () => {
        return state.drinks
            ? state.drinks.map((drink) => {
                  return drink.strDrink.toLowerCase().includes(state.search) ? (
                      <Card key={drink.idDrink} props={drink}></Card>
                  ) : state.search === '' ? (
                      <Card key={drink.idDrink} props={drink}></Card>
                  ) : null;
              })
            : null;
    };
    return (
        <main className={styles.container}>
            <Form></Form>
            {state.loading ? (
                <Loading></Loading>
            ) : (
                <div>
                    <ul className={styles.drinksContainer}>
                        {renderDrinks().every((cv) => cv === null) ? (
                            <li className={styles.noMatched}>
                                No Cocktails Matched Your Search Criteria
                            </li>
                        ) : (
                            renderDrinks()
                        )}
                    </ul>
                </div>
            )}
        </main>
    );
};

export default Content;
