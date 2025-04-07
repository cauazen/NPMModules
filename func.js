let uni_inicial, qtd

conversoes = (uni_inicial, qtd) => {
    
    if(uni_inicial == 'km'){
        let miles = qtd * 1.6
        return miles + 'milhas'
    }else if(uni_inicial == 'miles'){
        let km = qtd / 1.6
        return km + 'km'
    }
    
    else if(uni_inicial == 'feet'){
        let meter = qtd / 0.3048
        return meter + 'meters'
    }else if(uni_inicial == 'meter'){
        let feet = qtd * 0.3048
        return feet + 'feet'
    }

    else if(uni_inicial == 'inches'){
        let centimeters = qtd * 2.54
        return centimeters + 'centimeters'
    }else/*centimeters*/{
        let inches = qtd / 2.54
        return inches + 'inches'
    }
}

module.exports = conversoes