const { request } = require('graphql-request')

const ENDPOINT = `{your-endpoint-here}`

const GET_TODOS = `
query {
  todosList {
    items {
      text
    }
  }
}
`

request(ENDPOINT, GET_TODOS ).then((r) => console.log(r.todosList.items))
