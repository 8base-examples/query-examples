const { request } = require('graphql-request')

const ENDPOINT = `https://api.8base.com/cjrscs00e000y01rt2iesngcu`

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
