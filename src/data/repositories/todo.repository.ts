import {inject, injectable} from 'inversify';

// Data
import TodoService from '@data/services/todo.service';

// Domain
import {TodoRepository} from '@domain/repositories/todo.repository';
import {Todo} from '@domain/entities/Todo';

@injectable()
export class TodoRepositoryImpl implements TodoRepository {
  constructor(@inject('TodoService') private service: TodoService) {}
  async getTodos(): Promise<Todo[]> {
    const todos = await this.service.getTodos();

    return todos.map(i => i.toDomain());
  }

  createTodo(todo: Todo): Promise<Partial<Todo>> {
    return new Promise(resolve => {
      resolve(todo);
    });
  }

  deleteTodo(id: string): Promise<string> {
    return new Promise(resolve => {
      resolve(`Todo: ${id} deleted!`);
    });
  }
}
