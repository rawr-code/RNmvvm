import {inject, injectable} from 'inversify';

// UseCase
import UseCase from '../useCase';
import GetTodosRequest from './request';
import GetTodosResponse from './response';

// Repository
import type {TodoRepository} from '@domain/repositories/todo.repository';

@injectable()
export class GetTodosUseCase
  implements UseCase<GetTodosRequest, GetTodosResponse>
{
  repository: TodoRepository;
  constructor(@inject('TodoRepository') repository: TodoRepository) {
    this.repository = repository;
  }

  async execute(): Promise<GetTodosResponse> {
    const todos = await this.repository.getTodos();

    return todos;
  }
}
