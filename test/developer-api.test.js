const assert = require('assert');
const request = require('supertest');
const api = require('../api');


describe('developer API should have endpoints to', () => {
    it('get all developers', (done) => {
        request(api)
            .get('/api/developers')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
})