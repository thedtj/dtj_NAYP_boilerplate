# dtj_NAYP_boilerplate
Nextjs 8.0, Apollo, Yoga-Graphql, Prisma boilerplate


Setup:

1) run npm install in frontend and backend folders
2) run prisma deploy and connect to the db of your choice
3) creat .env from /config/sample.env and move prisma endoint here. - npm run prisma-deploy to update prisma schema while using the .env
4) in backend - npm run dev
5) open localhost:4000 and run create test mutaion

mutation {
  createTest(message: "Success!") {
    message
    id
  }
}

6) in frontend - npm run dev
7) open localhost:7777 to see test messages loaded as a component.

