import {Container} from 'inversify';

// Infrastructure
import {AxiosHttpManager, HttpManager} from '@infrastructure/http';

// Data
import TodoService from '@data/services/todo.service';

// Domain
import {GetTodosUseCase} from '@domain/useCases/getTodos';

// View
import TodosViewModel from '../ui/views/Home/viewModel';
import {TodoRepository} from '@domain/repositories/todo.repository';
import {TodoRepositoryImpl} from '@data/repositories/todo.repository';
// import TodosViewModel from 'src/ui/views/Home/viewModel';

export const container = new Container();

container.bind<HttpManager>('HttpManager').to(AxiosHttpManager);

// Services
container.bind<TodoService>('TodoService').to(TodoService);

// Services
container.bind<TodoRepository>('TodoRepository').to(TodoRepositoryImpl);

// UseCases
container.bind<GetTodosUseCase>('GetTodosUseCase').to(GetTodosUseCase);

// ViewModel
container.bind<TodosViewModel>('TodosViewModel').to(TodosViewModel);
