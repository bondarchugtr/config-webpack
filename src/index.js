
import name from './module-1';
import './css/common.scss';


console.log(name)
console.log('Это index.js, салют')

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());