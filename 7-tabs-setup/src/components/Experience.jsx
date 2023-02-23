import { useContext } from 'react';
import { AppContext } from '../context';
import { FaAngleDoubleRight } from 'react-icons/fa';
import '../styles/experience.css';

let Experience = () => {
    let { company, state } = useContext(AppContext);

    let renderExperience = () => {
        return state ? (
            state.map((experience) => {
                let renderDuties = () => {
                    return experience.duties.map((dutie, index) => (
                        <li key={index} className="experience-dutie">
                            <FaAngleDoubleRight className="experience-icon"></FaAngleDoubleRight>
                            {dutie}
                        </li>
                    ));
                };

                return experience.company === company ? (
                    <div key={experience.id} className="experience-container">
                        <h3 className="experience-title">{experience.title}</h3>
                        <p className="experience-company">
                            {experience.company}
                        </p>
                        <p className="experience-dates">{experience.dates}</p>
                        <ul className="duties-container">{renderDuties()}</ul>
                        <button
                            className="experience-button"
                            onClick={() => console.log(company)}
                        >
                            More info
                        </button>
                    </div>
                ) : null;
            })
        ) : (
            <></>
        );
    };

    return <>{renderExperience()}</>;
};

export default Experience;
