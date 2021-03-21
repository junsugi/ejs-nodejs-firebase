# react-nodejs-mongodb

![nodejs](https://img.shields.io/badge/nodejs-v14.15.4-lightgreen?logo=node.js)&nbsp;![express.js](https://img.shields.io/badge/express.js-v4.16.1-purple?logo=express)&nbsp;![npm](https://img.shields.io/badge/npm-v6.14.10-red?logo=npm)&nbsp;![boostrap](https://img.shields.io/badge/bootstrap-v5.0.0--beta2-purple?logo=bootstrap)
&nbsp;![vscode](https://img.shields.io/badge/vscode-v1.54.1-blue?logo=visual-studio)&nbsp;![firebase](https://img.shields.io/badge/mongodb-v4.4.4-green?logo=mongodb)

## Getting started node.js

~~해당 프로젝트는 `express-generator` 를 이용해서 생성하였다. `express-generator` 로 생성하는 방법은 다음 페이지를 [참고](https://expressjs.com/ko/starter/generator.html)하길 바란다. ~~(더이상 `express-generator` 를 사용하지 않습니다.)

[Inflearn 강의](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EB%B3%B8/dashboard)를 참고해서 진행하고 있는 프로젝트이다. (제일 깔끔한 방법이고, 초보자들도 쉽게 따라할 수 있는 방법이라고 생각해서 바꿨다.)

1. `git repository` 를 자신이 원하는 폴더 밑에 clone 시킨다. 명령어는 다음과 같다.

   ```shell
   git clone https://github.com/junsugi/react-nodejs-mongodb.git
   ```

2. `package.json` 이 존재하는 폴더에서 다음 명령어를 수행한다.

   ```shell
   npm install
   ```

   (`package.json` 과 `package-lock.json` 에 dependency된 node modules 을 다운받습니다.)

   의존성 목록은 다음과 같습니다.

   ```json
   "dependencies": {
     "express": "~4.16.1",
     "mongoose": "^5.12.1"
   },
   "devDependencies": {
     "nodemon": "^2.0.7"
   }
   ```
   
   - ~~`cookie-parser`, `debug`, `http-errors`, `morgan` 은 `express-generator` 로 생성된 dependency 입니다.~~
   
   - `devDependencies` 는 개발할 때만 사용할 의존성으로 다음과 같이 추가할 수 있습니다.
   
  ```shell
     npm install nodemon --save-dev
  ```
   
  `npm install` 명령 입력시 `-dev` 를 붙여주면 `devDependencies` 로 따로 관리할 수 있습니다.
   
3. 서버를 실행시키는 방법은 두 가지로 운영 서버 실행, 개발 서버 실행 두 가지가 있습니다.

   - 운영 서버 실행

     ```shell
     npm run start
     ```

   - 개발 서버 실행

     ```shell
     npm run dev
     ```

   - 두 개의 스크립트는 `package.json` 의 `script` 에 정의된 방식을 따라서 실행됩니다.

     ```json
     "scripts": {
       "start": "node ./server/index.js",
       "dev": "nodemon ./server/index.js"
     },
     ```

4. 사용하는 웹 브라우저에서 https://localhost:5000경로로 들어가서 "Landing Page" 가 뜨는지 확인한다.

5. 지금은 사용하지 않지만 Firebase 연동이 궁금하시면 해당 [링크(내 벨로그)](https://velog.io/@junsugi/conquer-nodeJs-6) 를 참고하세요.

## Contributor

- ### ![my](https://img.shields.io/badge/%40junsugi-v1996--02--09-green)

