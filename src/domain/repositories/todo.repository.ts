import {Todo} from '../entities/Todo';

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;
  createTodo(todo: Todo): Promise<Partial<Todo>>;
  deleteTodo(id: string): Promise<string>;
}
