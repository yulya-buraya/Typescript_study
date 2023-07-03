"use strict";
class Users {
    constructor(userId) {
        this.userId = userId;
    }
}
class CommandHistory {
    constructor() {
        this.commands = [];
    }
    push(command) {
        this.commands.push(command);
    }
    undo(command) {
        this.commands = this.commands.filter((t) => t.commandId !== command.commandId);
    }
}
class Command {
    constructor(history) {
        this.history = history;
        this.commandId = Math.random();
    }
}
class AddUserCommand extends Command {
    constructor(user, receiver, history) {
        super(history);
        this.user = user;
        this.receiver = receiver;
    }
    execute() {
        this.receiver.saveUser(this.user);
        this.history.push(this);
    }
    undo() {
        this.receiver.deleteUser(this.user.userId);
        this.history.undo(this);
    }
}
class UserService {
    saveUser(users) {
        console.log(`Создание пользователя с id ${users.userId}`);
    }
    deleteUser(userId) {
        console.log(`Удаление пользователя с id ${userId}`);
    }
}
class ControllerCommand {
    constructor() {
        this.history = new CommandHistory();
    }
    addReceiver(receiver) {
        this.receiver = receiver;
    }
    run() {
        const addUserCommand = new AddUserCommand(new Users(1), this.receiver, this.history);
        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}
const controller1 = new ControllerCommand();
controller1.addReceiver(new UserService);
controller1.run();
