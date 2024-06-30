const { buildSchema } = require('graphql');

module.exports = buildSchema(`

    type User {
        message: String!
    }

    input UserInput {
        email: String!
        name: String!
        password: String!
        phone: String
        address: String
    }

    type RootMutation {
        signup(userInput: UserInput!):User
    }
    
    type usersData {
        _id: ID!
        name: String
        email: String
        phone: String
        address: String
    }

    type usersResponse {
       message: String!
       result: [usersData]
    }

    type RootQuery {
        getUsers: usersResponse!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }

    `);
