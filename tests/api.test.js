const request = require('supertest');
const app = require('../server'); // Assuming server.js exports the Express app

describe('SafeDrive Backend API Tests', () => {
  it('GET /api/sensor should return sensor data', async () => {
    const res = await request(app).get('/api/sensor');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('heart_rate');
  });

  it('GET /api/accidents should return accident events', async () => {
    const res = await request(app).get('/api/accidents');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/health should return health status', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});
