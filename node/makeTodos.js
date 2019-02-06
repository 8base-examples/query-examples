const { request, GraphQLClient } = require('graphql-request')

const ENDPOINT = `{your-endpoint-here}`

// Uncomment the code below to add Authentication
// const client = new GraphQLClient(ENDPOINT, {
//   headers: {
//     Authorization: 'Bearer {your-api-token-here}',
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
  mutation TodoCreate($data: TodoCreateInput!) {
    todoCreate(data: $data) {
      id
      text
      completed
    }
  }
`

const VARIABLES = {
  data: {
    text: "from node",
    completed: false
  }
}

request(ENDPOINT, MAKE_TODO, VARIABLES).then((r) => console.log(r)) //Use this for unauthenticated
// client.request(MAKE_TODO, VARIABLES).then((r) => console.log(r)) //Use this for authenticated
