require('dotenv').config();

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
const cors = require('cors');

const colors = require('colors');
const schema = require('./schema/schema');
const port = process.env.PORT || 5000;
const app = express();

// Connect to Database:
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(port, console.log(`Server running on port: ${port}`));