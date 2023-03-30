import { useContext } from 'react';
import { AppContext } from '../context';

import styles from '../styles/users/users.module.sass';

import Loading from '../components/Loading';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Navigate } from 'react-router-dom';

let Users = () => {
    let { state } = useContext(AppContext);

    let renderUsers = () => {
        return state.users
            ? state.users.map((user, index) => {
                  return (
                      <tr key={index}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.lastName}</td>
                          <td>{user.id}</td>
                      </tr>
                  );
              })
            : null;
    };

    if (state.redirect) {
        return <Navigate to={'/login'} />;
    }

    return (
        <>
            <Header />
            {!state.users ? (
                <Content>
                    <Loading />
                </Content>
            ) : (
                <Content users>
                    <h3 className={styles.title}>
                        Usuários que foram cadastrados no sistema.
                    </h3>
                    <section className={styles.container}>
                        <table className={styles.table}>
                            <thead>
                                <tr className={styles.thead}>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Sobrenome</th>
                                    <th>Id</th>
                                </tr>
                            </thead>
                            <tbody className={styles.tbody}>
                                {renderUsers()}
                            </tbody>
                        </table>
                    </section>
                </Content>
            )}
            <Footer />
        </>
    );
};

export default Users;
