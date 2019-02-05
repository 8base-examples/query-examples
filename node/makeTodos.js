const { request, GraphQLClient } = require('graphql-request')

const ENDPOINT = `https://api.8base.com/cjrscs00e000y01rt2iesngcu`

// Uncomment the code below to add Authentication
// const client = new GraphQLClient(ENDPOINT, {
//   headers: {
//     Authorization: 'Bearer c5708924-8b40-42d6-b7e4-f07cd2b11018',
//   },
// })

const GET_TODOS = `
query {
  todosList {
    items {
      text
    }
  }
}
`

const MAKE_TODO = `
  mutation TodoCreate {
    todoCreate(
      data: {
        text: "from node",
        completed: false
    }) {
      id
      text
      completed
    }
  }
`

request(ENDPOINT, MAKE_TODO ).then((r) => console.log(r)) //Use this for unauthenticated
// client.request(MAKE_TODO).then((r) => console.log(r)) //Use this for authenticated
