export const mongoose = require('mongoose')
const config = require('config')
const {ApolloServer, gql} = require('apollo-server-express')
const express = require('express');
export const models = require('./models')


const app = express()
const PORT = config.get('port') || 5000

const typeDefs = gql`
    type Query {
        words: [Word!]!
        word(word: String!): Word!
    }

    type Word {
        id: Int!
        word: String
        translates: [Translates]
    }

    type Translates {
        id: Int!
        word: String
        language: String
    }

    type Mutation {
        addDigWord(word: String!): Word!
        addRusWord(word: String!): Translates!
    }
`;

const resolvers = {
    Query: {
        words: () => words,
        word: (parent: any, context: any) => {
            return words.find(word => word.word === context.word);
        }
    },
    Word: {
        translates: (word: any) => {
            return translate.filter((translates) => translates.id === word.id)
        }
    },
    Mutation: {
        addDigWord: (parent: any, context: any) => {
            let wordDigValue = {
                id: Number(words.length + 1),
                word: context.word,
            }
            words.push(wordDigValue)
            return wordDigValue
        },
        addRusWord: (parent: any, context: any) => {
            let wordRusValue = {
                id: Number(translate.length + 1),
                word: context.word,
                language: 'rus'
            }
            translate.push(wordRusValue)
            return wordRusValue
        }
    }
    

}

let words = [
    {
        id: 1,
        word: 'хуцау'
    },
    {
        id: 2,
        word: 'салам'
    }
]

let translate = [
    {
        id: 1,
        word: 'бог',
        language: 'rus'
    },
    {
        id: 2,
        word: 'привет',
        language: 'rus'
    }
]


const server = new ApolloServer({
    typeDefs, 
    resolvers
})

server.applyMiddleware({app, path: '/api'})



async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        app.listen(PORT, () => console.log(`App has bin server started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()