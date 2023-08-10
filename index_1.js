function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function mathExample() {
    for (let i = 1; i <= 10; i++) {
        const value = getRandom(min,max);
        const value2 = getRandom(min,max);
    
        const values = value + value2
    
        let question = +prompt(`Пример: ${i} \n ${value} + ${value2} = ?`)  
    
        if(values == question) {
            alert('Верно')
        } else {
            alert(`Не правильно, правильный ответ: ${values}`)
        }
       
    
        console.log(question);
    }
    
}

min = +prompt('Введите минимальное число');
max = +prompt('Введите максимальное число');


mathExample()
