
npm i -g typescript
tsc --version

npm i -g ts-node


1) npm init --y
2) tsc --init 
3) npm i @types/node
4) npm i -g ts-node

RUN
1) tsc
2) node app.js
        OR
1) ts-node app.ts

npm i express @types/express nodemon ts-node @types/node typescript

inside package.json
"start": "nodemon ./src/index.ts"

"start:dev": "ts-node ./src/index.ts" // But this method use more memory so we use

"start:prod":"ts-node --transpile-only ./src/index.ts"

npm install mongoose@6.0.10
npm i @types/mongoose
mongodb://localhost:27017/student