import { validate } from 'email-validator';

let inputCondition = (type, value) => {
    switch (type) {
        case 'name':
            return value.trim() && value.length !== 0;
        case 'email':
            return validate(value) && value.trim();

        default:
            break;
    }
};

export default inputCondition;
