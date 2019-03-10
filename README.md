# dtj_NAYP_boilerplate
Nextjs 8.0, Apollo, Yoga-Graphql, Prisma boilerplate


## Setup:

1. run `npm install` in frontend and backend folders
2. run `prisma deploy` and connect to the db of your choice
3. creat /config/dev.env from /config/sample.env and move prisma endoint here from prisma.yml .
      Use `npm run prisma-deploy` to update prisma schema while using the dev.env
4. in backend - `npm run dev`
5. open localhost:4444 and create a test mutation in graphql

```
mutation {
  createTest(message: "Success!") {
    message
    id
  }
}
```

6. in frontend - `npm run dev`
7. open localhost:7777 to see test messages loaded as a component.
