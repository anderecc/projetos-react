import { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import '../styles/companies.css';

let Companies = () => {
    let { state, setCompany } = useContext(AppContext);
    useEffect(() => {
        if (state) {
            document.getElementById('TOMMY').classList.add('active');
        }
    }, [state]);

    let renderCompanies = () => {
        return state ? (
            state.map((experience) => {
                let handleChange = (e) => {
                    document
                        .querySelectorAll('.button-company')
                        .forEach((button) => {
                            button.classList.remove('active');
                        });
                    setCompany(experience.company);
                    e.target.classList.add('active');
                };

                return (
                    <li key={experience.id} className="company">
                        <button
                            id={experience.company}
                            className={`button-company`}
                            onClick={handleChange}
                        >
                            {experience.company}
                        </button>
                    </li>
                );
            })
        ) : (
            <></>
        );
    };

    return (
        <>
            <ul className="companies-container">{renderCompanies()}</ul>
        </>
    );
};

export default Companies;
