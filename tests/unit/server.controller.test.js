const ServerController = require('../../controllers/server.controller');

describe('ServerController.createTodo', () => {
    it('should have a create todo function', () => {
        expect(typeof ServerController.createTodo).toBe('function'); 
    });
});