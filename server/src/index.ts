const {ApolloServer, gql} = require('apollo-server-express')
import express from 'express'

const app = express()
const port = 5000

const typeDefs = gql`
    type Query {
        words: [Word!]!
    }

    type Word {
        id: ID
        word: String
        translates: [Translates]
    }

    type Translates {
        id: ID
        word: String
        language: String
        word_id: Int
    }
`;

const resolvers = {
    Query: {
        words: () => words
    },
    Word: {
        translates: (word: any) => {
            return translate.filter((translates) => translates.id === word.id)
        }
    }

}

let words = [{
    id: '1',
    word: 'Хуцау'
}]

let translate = [{
    id: '1',
    word: 'Аллах',
    language: 'rus',
    word_id: 1
}]


const server = new ApolloServer({typeDefs, resolvers})

server.applyMiddleware({app, path: '/api'})


app.get('/', (request, response) => {
    response.send("hello world")
})

app.listen({ port }, () =>
    console.log(`GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
)
);