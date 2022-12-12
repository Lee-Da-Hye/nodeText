const path = require('path');
//node의 path 모듈

//전역변수 : __dirname, __filename
console.log('전역변수 현재 사용하는 폴더위치 : ', __dirname);
console.log('전역변수 현재 사용하는 파일명 : ',__filename);
console.log('내장모듈 폴더위치 : ',path.dirname(__filename));
console.log('내장모듈 확장자 : ',path.extname(__filename));
console.log('내장모듈 파일정보 : ',path.basename(__filename));

//주어진 파일정보를 이용해서 필요한 정보 분리하기
const fileName = '/c/frontend_4/day02_1212/test06.js';
console.log('내장모듈 폴더위치 : ' ,path.dirname(fileName));
console.log('내장모듈 확장자 : ' ,path.extname(fileName));
console.log('내장모듈 파일정보 : ' ,path.basename(fileName));