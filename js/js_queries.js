// Read

fetch("{your-endpoint-here}",
  {
      "headers": {
          "content-type": "application/json"
      },
      "body": JSON.stringify({"query":'{todosList {items {text}} }'}),
      "method": "POST"
  }
).then(r => r.json()).then(r => console.log("success: ", JSON.stringify(r)))


// Mutate

fetch("{your-endpoint-here}",
  {
      "headers": {
          "content-type": "application/json"
      },
      "body": JSON.stringify({"query": 'mutation TodoCreate($data: TodoCreateInput!) { todoCreate(data: $data) {id, text, completed }}', variables: { data: { text: "from js fetch again", completed: false }  } }),
      "method": "POST"
  }
).then((r) => r.json()).then(r => console.log("success: ", JSON.stringify(r)))

// Mutate with Authentication

fetch("{your-endpoint-here}",
  {
      "headers": {
          "content-type": "application/json",
          "authorization": "Bearer {your-api-token-here}"
      },
      "body": JSON.stringify({"query": 'mutation TodoCreate($data: TodoCreateInput!) { todoCreate(data: $data) {id, text, completed }}', variables: { data: { text: "from js fetch again", completed: false }  } }),
      "method": "POST"
  }
).then((r) => r.json()).then(r => console.log("success: ", JSON.stringify(r)))
