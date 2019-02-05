import React, { Component } from 'react';
import { graphql, ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";
import gql from 'graphql-tag';
import Todos from './Todos';

const client = new ApolloClient({
  uri: "{your-endpoint-here}",
  // Uncomment the following code for authentication
  // headers: {
  //   Authorization: 'Bearer {your-api-token-here}'
  // }
});

const CREATE_TODO_MUTATION = gql`
  mutation TodoCreate($data: TodoCreateInput!) {
    todoCreate(data: $data) {
      id
      text
      completed
    }
  }
`;

const GET_TODOS_QUERY = gql`
  query {
    todosList {
      items {
        text
      }
    }
  }
`

const withCreateTodo = graphql(CREATE_TODO_MUTATION, {
  props: ({ mutate }) => ({
    createTodo: ({ text }) => {
      mutate({
        variables: { data: { text, completed: false } },
        refetchQueries: [{ query: GET_TODOS_QUERY }]
      });
    }
  })
});

class CreateTodo extends Component {
  state ={
    todo: ''
  }

  handleChange = (event) => {
    this.setState( {todo: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createTodo({ text: this.state.todo });
  }

  render(){

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.todo}
          onChange={this.handleChange}
          />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

CreateTodo = withCreateTodo(CreateTodo);

class App extends Component {
  render() {
    return (
      <ApolloProvider
        client={client}
         >
         <CreateTodo />
         <Todos />
      </ApolloProvider>
    );
  }
}

export default App;
