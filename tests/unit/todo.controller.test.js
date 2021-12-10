const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../model/todo.model");
const httpMocks = require("node-mocks-http");

//If you do not have the jest.fn overriding the original fn, then you can't see the fn being called. This must be a mock or a spy
TodoModel.create = jest.fn();

describe("TodoController.createTodo", () => {
    it("should have a createTodo function", () => {
        expect(typeof TodoController.createTodo).toBe("function");
    });
    //test to make sure these methods are being called
    it("should call TodoModel.create", () => {
        let req, res, next;
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
        next = null;
        TodoController.createTodo(req, res, next);
        expect(TodoModel.create).toBeCalled();
    })
});