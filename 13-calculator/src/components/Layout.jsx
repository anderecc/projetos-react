import { Component } from 'react';
import Button from './Button';
import Display from './Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
};

export default class Calculadora extends Component {
    state = { ...initialState };

    limparDisplay = () => {
        this.setState({ ...initialState });
    };

    limparDigito = () => {
        let displayValue = this.state.displayValue.toString().slice(0, -1);
        if (displayValue === '') displayValue = '0';
        this.setState({ displayValue });
    };

    operador = (operation) => {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true });
        } else {
            const equals = operation === '=';
            const currentOperation = this.state.operation;
            const values = [...this.state.values];
            switch (currentOperation) {
                case '+':
                    values[0] = values[0] + values[1];
                    break;
                case '-':
                    values[0] = values[0] - values[1];
                    break;
                case '/':
                    values[0] = values[0] / values[1];
                    break;
                case 'x':
                    values[0] = values[0] * values[1];
                    break;
                default:
                    values[0] = this.state.displayValue;
                    break;
            }
            values[1] = 0;
            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values,
            });
        }
    };

    adcDigito = (numero) => {
        if (numero === '.' && this.state.displayValue.includes('.')) return;
        const clearDisplay =
            this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + numero;
        this.setState({ displayValue, clearDisplay: false });
        if (numero !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values });
        }
    };

    render() {
        return (
            <div className="calculadora-layout">
                <Display value={this.state.displayValue} />
                <div className="calculadora-keypad">
                    <Button label="7" func={this.adcDigito} />
                    <Button label="8" func={this.adcDigito} />
                    <Button label="9" func={this.adcDigito} />
                    <Button
                        label="del"
                        classes="key-pad-clear"
                        func={this.limparDigito}
                    />
                    <Button label="4" func={this.adcDigito} />
                    <Button label="5" func={this.adcDigito} />
                    <Button label="6" func={this.adcDigito} />
                    <Button label="+" func={this.operador} />
                    <Button label="1" func={this.adcDigito} />
                    <Button label="2" func={this.adcDigito} />
                    <Button label="3" func={this.adcDigito} />
                    <Button label="-" func={this.operador} />
                    <Button label="." func={this.adcDigito} />
                    <Button label="0" func={this.adcDigito} />
                    <Button label="/" func={this.operador} />
                    <Button label="x" func={this.operador} />
                    <Button
                        label="reset"
                        classes="double key-pad-clear"
                        func={this.limparDisplay}
                    />
                    <Button
                        label="="
                        classes="double key-pad-equals"
                        func={this.operador}
                    />
                </div>
            </div>
        );
    }
}
