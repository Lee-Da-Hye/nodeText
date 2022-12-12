//기존에 있는 종료 이벤트 처리
//프로그램 종료 되었을 때 이벤트
process.on('exit', function(){
    console.log('이벤트 발생');
})

setTimeout(function(){
    //console.log('3초 후에 exit 발생');
    process.exit(); // process 종료
}, 3000)