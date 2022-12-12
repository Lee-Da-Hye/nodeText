const today = new Date();
let weekdate = today.getDate();//날짜
let weekday = weekdayHandle(today.getDay());//요일, 0= 일요일
console.log(weekdate, weekday, today);

function weekdayHandle(weekday){
    let day = '';
    switch(weekday){
        case 0 : day =  '일'; break;
        case 1 : day =  '월'; break;
        case 2 : day =  '화'; break;
        case 3 : day =  '수'; break;
        case 4 : day =  '목'; break;
        case 5 : day =  '금'; break;
        case 6 : day =  '토'; break;
        default : day =  'Not a weekday'; break;
    }
    return day; //요일 리턴
}