const supertest = require('supertest');
const mongoose = require('mongoose');
const Journey = require('../models/Journey');
const {app, server} = require('../index');
const mockjourney = require('../util/journeyexample.json'); 
const { request } = require('express');

const api = supertest(app)

beforeAll(async () => {
    const url = "mongodb://localhost:27017/test";
    await mongoose.connect(url, { useNewUrlParser : true});
    await Journey.create(mockjourney);
})

describe('getAllJourneys working', () => {
    test('Get all route is working', async () => {
        const response = await api.get('/journeys')
        expect(response.body).toHaveLength(1)
    })
    
    test('check if the response has the correct values', async () => {
        const response = await api.get('/journeys');
        expect(response.body[0].title).toBe("New York");
        expect(response.body[0].coverImg).toBe("https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1994&q=80");
        expect(response.body[0].coordinates.lat).toBe(40.712784);
    })
} )

describe('getJourneysById working', () => {
    test('find journey by Id', async() => {
        const journey = await Journey.findOne({ title: "New York"});
        const jsonResponse = await api.get('/journeys/' + journey._id);
        const response = JSON.parse(jsonResponse.text); 
        expect(response.title).toBe("New York");
    })
})

describe('addNewNote working', () => {
    test('journey Id exists in the db', async() => {
        const journey = await Journey.findOne({ title: "New York"});
        const jsonResponse = await api.get('/journeys/' + journey._id);
        const response = JSON.parse(jsonResponse.text); 
        expect(response.title).toBe("New York");
    })
})



afterAll(async () => {
    await Journey.deleteMany()
    mongoose.connection.close()
    server.close()
})
