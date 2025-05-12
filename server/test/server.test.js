const request = require('supertest');
const app = require('../src/index.js'); // Adjust the path to your server file

describe('GET /api', () => {
  it('should return JSON response', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe('application/json');
    expect(res.body).toHaveProperty('message', 'Hello from Express API');
  });
});