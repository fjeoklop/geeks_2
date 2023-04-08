// //if, else if, else
// var review = prompt('оцените наш сервис от 1 до 10')
//
// if (review > 5 && review < 11){
//     alert('Спасибо за высокую оценку')
//
// }else if (review <= 5 || review > 11) {
//     alert('Мы работаем над улучшением сервиса')
//
// }else {
//     alert('ERROR')
// }

//switch case

// var review = Number(prompt('оцените наш сервис от 1 до 10'))
//
// switch (review){
//     case 6:
//         alert('Спасибо за высокую оценку')
//         break
//      case 7:
//         alert('Спасибо за высокую оценку')
//         break
//      case 8:
//         alert('Спасибо за высокую оценку')
//         break
//      case 9:
//         alert('Спасибо за высокую оценку')
//         break
//      case 10:
//         alert('Спасибо за высокую оценку')
//         break
//     case 1:
//         alert('Мы работаем над улучшением сервиса')
//         break
//     case 2:
//         alert('Мы работаем над улучшением сервиса')
//         break
//     case 3:
//         alert('Мы работаем над улучшением сервиса')
//         break
//     case 4:
//         alert('Мы работаем над улучшением сервиса')
//         break
//     case 5:
//         alert('Мы работаем над улучшением сервиса')
//         break
//
//     default:
//         alert('ERROR')
// }

//ex2
var language = prompt('rus  или eng').trim().toLowerCase()
if (language === 'rus'){
    console.log("пн", "вт", "ср", "чт", "пт", "сб", "вс")
}if (language === 'eng'){
    console.log("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")
}

