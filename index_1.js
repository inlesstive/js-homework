let year_old = +prompt('Введите свой возраст');


if(year_old >= 1 && year_old <= 18) {
    alert('Вы ещё молоды, Вам нужно учиться!)');
} else if (year_old >= 19 && year_old <= 50) {
    alert('Вам нужно работать');
} else if (year_old >= 51 && year_old <= 59) {
    alert('Вам скоро на пенсию');
} else if (year_old >= 60 && year_old <= 100) {
    alert('Вы пенсионер');
}
