# ejs-nodejs-firebase

![nodejs](https://img.shields.io/badge/nodejs-v14.15.4-lightgreen?logo=node.js)&nbsp;![express.js](https://img.shields.io/badge/express.js-v4.16.1-purple?logo=express)&nbsp;![npm](https://img.shields.io/badge/npm-v6.14.10-red?logo=npm)&nbsp;![vscode](https://img.shields.io/badge/vscode-v1.54.1-blue?logo=visual-studio)&nbsp;![firebase](https://img.shields.io/badge/firebase-v8.2.10-yellow?logo=firebase)

## Getting started node.js

해당 프로젝트는 `express-generator` 를 이용해서 생성하였다. `express-generator` 로 생성하는 방법은 다음 페이지를 [참고](https://expressjs.com/ko/starter/generator.html, "express 홈페이지")하길 바란다.

1. `git repository` 를 자신이 원하는 폴더 밑에 clone 시킨다. 명령어는 다음과 같다.

   ```shell
   git clone https://github.com/junsugi/mybulletinboardsystem.git
   ```

2. `package.json` 이 존재하는 폴더에서 다음 명령어를 수행한다.

   ```shell
   npm install
   ```

   (`package.json` 과 `package-lock.json` 에 dependency된 node modules 을 다운받습니다.)

   의존성 목록은 다음과 같습니다.

   ```json
   "dependencies": {
     "cookie-parser": "~1.4.4",
     "debug": "~2.6.9",
     "ejs": "~2.6.1",
     "express": "~4.16.1",
     "http-errors": "~1.6.3",
     "morgan": "~1.9.1"
   },
   "devDependencies": {
     "nodemon": "^2.0.7"
   }
   ```

   - `cookie-parser`, `debug`, `http-errors`, `morgan` 은 `express-generator` 로 생성된 dependency 입니다.

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
       "start": "node ./bin/www",
       "dev": "nodemon ./bin/www"
     },
     ```

4. 사용하는 웹 브라우저에서 https://localhost:3000 경로로 들어가서 "Welcome to Node Express" 가 뜨는지 확인한다.

   추가로 궁금한 내용은 [velog](https://velog.io/@junsugi)에 천천히 올려 둘 예정입니다. 

## Contributor

- ### ![my](https://img.shields.io/badge/%40junsugi-v1996--02--09-green)