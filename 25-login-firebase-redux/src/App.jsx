import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <>
            <Header></Header>
            <Content home>
                <h3>Projeto de estudo</h3>
                <p>
                    Esse projeto tem o intuito de praticar e aprender sobre o
                    firebase, onde temos autenticação do usuário, entrando em
                    sua conta ou registrando uma conta nova, também podemos
                    editar suas informações, e ainda ver os outros e-mails que
                    foram cadastrados.
                </p>
            </Content>
            <Footer></Footer>
        </>
    );
}

export default App;
