const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
    }
    type UserInputData {
        email: String!
        name: String!
        password: String!
    }
    type RootMutation {
        signup(userInput: UserInputData): User
    }
    type helloData {
        text: String!
        views: Int!
    }
    type RootQuery {
        hello: helloData!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
    `);
