import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

let Todos = ({todos}) => {

  return (
    <div>
      {
        todos.map((item) => {
        return  <h1>{item.text}</h1>
      })}
    </div>
  )
}

const GET_TODOS_QUERY = gql`
  query {
    todosList {
      items {
        text
      }
    }
  }
`

export default graphql(GET_TODOS_QUERY, {
  props: (result) => {
    const { loading, data } = result;
    let items = [];
    if (data && data.todosList) items = data.todosList.items;
    return {
      loading,
      todos: items
    }
  }
})(Todos);
