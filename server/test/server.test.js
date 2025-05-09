const request = require('supertest');
const app = require('../src/server');

describe('GET /', () => {
  it('should return React HTML page or fallback content', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});
describe('GET /api', () => {
  it('should return JSON response', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe('application/json');
  });
});