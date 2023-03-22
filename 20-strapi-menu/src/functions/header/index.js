export let setProperty = () => {
    let root = document.querySelector('html');
    let width = document.querySelector('.sublink').offsetWidth;

    return root.style.setProperty('--navWidth', ` ${width / 2}px`);
};
