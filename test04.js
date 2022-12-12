const {format} = require('date-fns');
//설치된 노드 모듈을 가져오는 방법

const today = new Date();

console.log(today)
console.log(format(today, 'yyyy-MM-dd'));
