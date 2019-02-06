// Read

fetch("{your-endpoint-here}",
  {
      "headers": {
          "content-type": "application/json"
      },
      "body": "{\"query\":\"{\\n  todosList {\\n    items {\\n      text\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\"}",
      "method": "POST"
  }
).then(r => r.json()).then(r => console.log("success: ", JSON.stringify(r)))


// Mutate

fetch("{your-endpoint-here}",
  {
      "headers": {
          "content-type": "application/json"
      },
      "body": "{\"query\":\"mutation TodoCreate {\\n  todoCreate(data: {text: \\\"from js fetch again\\\", completed: false}) {\\n    id\\n    text\\n    completed\\n    __typename\\n  }\\n}\\n\"}",
      "method": "POST"
  }
).then((r) => r.json()).then(r => console.log("success: ", JSON.stringify(r)))

// Mutate with Authentication

fetch("https://api.8base.com/cjoew0fyz002q01s7ib5ouvqp",
  {
      "headers": {
          "content-type": "application/json",
          "authorization": "Bearer {your-api-token-here}"
      },
      "body": "{\"query\":\"mutation TodoCreate {\\n  todoCreate(data: {text: \\\"from js fetch with auth\\\", completed: false}) {\\n    id\\n    text\\n    completed\\n    __typename\\n  }\\n}\\n\"}",
      "method": "POST"
  }
).then((r) => r.json()).then(r => console.log("success: ", JSON.stringify(r)))
