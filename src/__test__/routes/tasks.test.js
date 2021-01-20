// import request from 'supertest'
const request = require("supertest");

const app = require("../../app");

describe('tasks routes', () => {
  it('should return status 200 and content', async () => {
    const response = await request(app).get('/tasks')
    const { status } = response

    expect(status).toEqual(200)
  })
})
