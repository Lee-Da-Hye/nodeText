const os = require('os');
//os 내장 모듈 : 시스템정보를 사용할 수 있는 모듈

console.log(`시스템의 hostname : ${os.hostname()}`);
console.log(`시스템의 메모리 : ${os.freemem()} / ${os.totalmem()}`);
console.log(`시스템의 cpu정보 : 
 ${os.cpus()}`);
 console.log(`시스템의 os type : ${os.type()}`);
 console.log(`시스템의 os version : ${os.version()}`);
 console.log(`시스템의 os homedir : ${os.homedir()}`);