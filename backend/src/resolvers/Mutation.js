const Mutation = {
  async createTest(parent, args, ctx, info) {
    const test = await ctx.db.mutation.createTest(
      {
        data: {
          message: args.message
        }
      },
      info
    )
    return test
  }
}

export default Mutation
