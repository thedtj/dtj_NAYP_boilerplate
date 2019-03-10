import { forwardTo } from 'prisma-binding'

const Query = {
  tests: forwardTo('db'),
  test: forwardTo('db')
  // async test(parent, args, ctx, info) {
  //   const test = await ctx.db.query.test(
  //     {
  //       where: {
  //         id: args.id
  //       }
  //     },
  //     info
  //   )
  //   return test
  // }
}

export default Query
