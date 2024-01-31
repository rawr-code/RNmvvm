// Domain
import {Todo} from '@domain/entities/Todo';

type ConstructorParams = {
  id: string;
  title: string;
  isDone: boolean;
};

export class TodoModel {
  public id: string;
  public title: string;
  public isDone: boolean;

  constructor({id, title, isDone}: ConstructorParams) {
    // datos que devuelve el backend
    this.id = id;
    this.title = title;
    this.isDone = isDone;
  }

  // esto se utiliza en el servicio
  static fromJson(data: any): TodoModel {
    const {id, title, isDone} = data;
    return new TodoModel({
      id,
      title,
      isDone,
    });
  }

  toDomain(): Todo {
    const {id, title, isDone} = this;
    return new Todo({
      id,
      title,
      isDone,
    });
  }
}

export default TodoModel;
