1. 영화목록을 출력 movieList()로 만들어둠.
    
//화면에 호출
2. movieList() -> createDom() 호출하게 함.

3. loadMovie(allMovies) -> movieList()로 호출
3. searchCategory(검색한 영화 목록) -> movieList()로 호출
3. searchText(검색어) -> movieList()로 호출
3. selectCategory(선택한 카테고리) -> movieList()로 호출


node.js 
javascript 실행환경

node 파일명.js(확장자는 생략할 수 있다. .mjs)
js 최신 스펙을 따르고 있음.
브라우저단에서 자바스크립트를 실행하는 것과 극히 다름.
node.js는 브라우저를 이해하지 못함. (돔 이런거 출력 못함.)
html을 이용해서 nodejs를 실행할 수 없음.

2. 패키지 매니져(npm, yarn)
bxslider, fullpage : jQuery 플러그인
javascript로 제작된 모듈(함수, 라이브러리, 플러그인)을 설치하는 도구

2-1. 모듈 설치하는 법
npm을 이용해서 외부 모듈을 가져오는 법
npm install 모듈이름 --save; //옛날방식
npm i 모듈이름; // 최신 방식
설치 후 node_modules 폴더 안에 설치됨.
node_modules는 깃허브에 업로드 하지 않아야함.
.gitignore에 업로드 하지 않도록 셋팅이 필요


2-3. ES6 방식의 모듈을 가져오기 : 확장자가 .mjs
import { compareAsc, format } from 'date-fns'

2-4. commonjs 형태의 모듈로 가져다 사용 : 확장자가 .js
const {format} = require('date-fns');




3. node 내장 모듈 포함하고 있음
- os 모듈
- path 모듈

4. Read-Eval-Print-Loop (REPL) 모드에서 js 실행하기 

브라우저 단 > console 탭에서 js 실행
node 단 > node > 프롬프트 상태에서 js 실행

5. node로 서버를 만들어 사용할 수 있음
- 클라이언트가 데이터를 요청할 때 이벤트 처리

