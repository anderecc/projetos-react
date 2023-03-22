import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { AppContext } from '../context';
import styles from '../styles/cocktail.module.sass';
import Loading from '../components/Loading';

let Cocktail = () => {
    let { state, handleSetDetailsOf } = useContext(AppContext);
    let { drinkId } = useParams('cocktail/:drinkId');
    useEffect(() => {
        handleSetDetailsOf(drinkId);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let renderDrink = () => {
        return state.detailsOf
            ? state.detailsOf.map((drink) => {
                  return (
                      <div key={drink.idDrink} className={styles.content}>
                          <h2>{drink.strDrink}</h2>
                          <div className={styles.drinkInfos}>
                              <img
                                  src={drink.strDrinkThumb}
                                  alt={drink.strDrink}
                              />
                              <div>
                                  <p className={styles.name}>
                                      <span>Name: </span>
                                      {drink.strDrink}
                                  </p>
                                  <p className={styles.category}>
                                      <span>Category: </span>
                                      {drink.strCategory}
                                  </p>
                                  <p className={styles.info}>
                                      <span>Info: </span>
                                      {drink.strAlcoholic}
                                  </p>
                                  <p className={styles.glass}>
                                      <span>Glass: </span>
                                      {drink.strAlcoholic}
                                  </p>
                                  <p className={styles.instructions}>
                                      <span>Instructions: </span>
                                      {drink.strInstructions}
                                  </p>
                                  <p className={styles.ingredients}>
                                      <span>Ingredients: </span>
                                      {drink.strIngredient1}
                                      {drink.strIngredient2}
                                      {drink.strIngredient3}
                                      {drink.strIngredient4}
                                      {drink.strIngredient5}
                                      {drink.strIngredient6}
                                      {drink.strIngredient7}
                                      {drink.strIngredient8}
                                      {drink.strIngredient9}
                                      {drink.strIngredient10}
                                  </p>
                              </div>
                          </div>
                      </div>
                  );
              })
            : null;
    };

    return (
        <>
            <Header></Header>
            {state.loading ? (
                <Loading></Loading>
            ) : (
                <main className={styles.container}>
                    <Link to={'/'} className={styles.linkHome}>
                        Back Home
                    </Link>
                    {state.detailsOf ? renderDrink() : null}
                </main>
            )}
        </>
    );
};

export default Cocktail;
