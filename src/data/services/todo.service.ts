import {inject, injectable} from 'inversify';

// Infrastructure
import type {HttpManager} from '@infrastructure/http';

// Data
import TodoModel from '@data/models/todo.model';

const MOOK = [
  {
    id: '1',
    title: 'title 1',
    isDone: false,
  },
  {
    id: '2',
    title: 'title 2',
    isDone: false,
  },
  {
    id: '3',
    title: 'title 3',
    isDone: false,
  },
  {
    id: '4',
    title: 'title 4',
    isDone: false,
  },
];

@injectable()
class TodoService {
  http: HttpManager;
  constructor(@inject('HttpManager') http: HttpManager) {
    this.http = http;
  }

  async getTodos(): Promise<TodoModel[]> {
    // const data = this.http.get('/todos');
    // return data;

    return MOOK.map(item => TodoModel.fromJson(item));
  }
}

export default TodoService;
