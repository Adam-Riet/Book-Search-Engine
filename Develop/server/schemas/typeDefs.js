const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    saveBook(authors: [String], description: String!, bookId: String!, image: String, link: String, title: String!): User
    removeBook(bookId: String!): User
  }
  type User {
    _id: ID
    userName: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    _id: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }
    
`;

module.exports = typeDefs;
