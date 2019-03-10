/* eslint-disable no-console */
import createServer from './createServer'

require('dotenv').config({ path: '../config/dev.env' })

const server = createServer()

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(
      `Hold on to your butts. The server is running on port http:/localhost:${deets.port}`
    )
  }
)
