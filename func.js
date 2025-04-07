// conversoes.js

export const conversoes = (uni_inicial, qtd) => {
    if (uni_inicial === 'km') {
        const miles = qtd * 0.621371;
        return `${miles} milhas`;
    } else if (uni_inicial === 'milhas') {
        const km = qtd / 0.621371;
        return `${km} km`;
    } else if (uni_inicial === 'feet') {
        const meters = qtd * 0.3048;
        return `${meters} metros`;
    } else if (uni_inicial === 'metros') {
        const feet = qtd / 0.3048;
        return `${feet} pés`;
    } else if (uni_inicial === 'inches') {
        const cm = qtd * 2.54;
        return `${cm} centímetros`;
    } else if (uni_inicial === 'centimetros') {
        const inches = qtd / 2.54;
        return `${inches} polegadas`;
    } else {
        return 'Unidade não reconhecida';
    }
};
