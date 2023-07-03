class Users {
  constructor(public userId: number) {}
}
class CommandHistory {
  public commands: Command[] = [];
  push(command: Command) {
    this.commands.push(command);
  }
  undo(command: Command) {
    this.commands = this.commands.filter(
      (t) => t.commandId !== command.commandId
    );
  }
}
abstract class Command {
  constructor(public history: CommandHistory) {
    this.commandId = Math.random();
  }
  public commandId: number;
  abstract execute(): void;
}

class AddUserCommand extends Command {
  constructor(
    private user: Users,
    private receiver: UserService,
    history: CommandHistory
  ) {
    super(history);
  }
  execute(): void {
    this.receiver.saveUser(this.user);
    this.history.push(this);
  }
  undo() {
    this.receiver.deleteUser(this.user.userId);
    this.history.undo(this);
  }
}

class UserService {
  saveUser(users: Users) {
    console.log(`Создание пользователя с id ${users.userId}`);
  }
  deleteUser(userId: number) {
    console.log(`Удаление пользователя с id ${userId}`);
  }
}

class ControllerCommand {
  receiver: UserService;
  history: CommandHistory = new CommandHistory();
  addReceiver(receiver: UserService) {
    this.receiver = receiver;
  }
  run() {
    const addUserCommand = new AddUserCommand(
      new Users(1),
      this.receiver,
      this.history
    );
    addUserCommand.execute();
    console.log(addUserCommand.history);
    addUserCommand.undo();
    console.log(addUserCommand.history);
  }
}

const controller1 = new ControllerCommand();
controller1.addReceiver(new UserService);
controller1.run();