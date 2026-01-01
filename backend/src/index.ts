import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import todos from './todos.js'

const app = new Hono()
  .route('/todos', todos)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

export type AppType = typeof app
