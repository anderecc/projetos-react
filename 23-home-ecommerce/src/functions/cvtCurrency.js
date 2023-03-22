let cvtCurrency = (number) => {
    return number.toString() === '0'
        ? '0'
        : number.toString().length < 5
        ? number.toString().slice(0, -2) + '.' + number.toString().slice(-2)
        : number.toString().length === 5
        ? number.toString().slice(0, -2) + '.' + number.toString().slice(-2)
        : number.toString().length > 5
        ? number.toString().slice(0, -5) +
          ',' +
          number.toString().slice(-5, -2) +
          '.' +
          number.toString().slice(-2)
        : number;
};

export default cvtCurrency;
