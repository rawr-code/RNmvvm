type ConstructorParams = {
  id: string;
  title: string;
  isDone: boolean;
};

export class Todo {
  public id: string;
  public title: string;
  public isDone: boolean;

  constructor({id, title, isDone}: ConstructorParams) {
    this.id = id;
    this.title = title;
    this.isDone = isDone;
  }

  getName(): string {
    return this.title + '_CustomName';
  }
}
