const Express = require('express')

module.exports = function (server){
    //API Routes
    const router = Express.Router()
    server.use('/api', router)

    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}