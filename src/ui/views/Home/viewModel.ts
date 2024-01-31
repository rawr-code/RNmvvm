import {inject, injectable} from 'inversify';

// Domain
import {GetTodosUseCase} from '@domain/useCases/getTodos';
import {Todo} from '@domain/entities/Todo';
import {action, observable} from 'mobx';

@injectable()
class TodosViewModel {
  @observable todos: Todo[] = [];
  @observable isLoading: boolean = false;
  getTodosUseCase: GetTodosUseCase;

  constructor(@inject('GetTodosUseCase') getTodosUseCase: GetTodosUseCase) {
    this.getTodosUseCase = getTodosUseCase;
    this.getTodos();
  }

  async getTodos() {
    this.setIsLoading(true);
    // console.log('enterrrrrrrrrrrrrrrrr');
    // setTimeout(() => {
    //   this.isLoading = false;
    //   console.log('saliooooooooooooo');
    // }, 2000);
    const todos = await this.getTodosUseCase?.execute();
    console.log('--->', {todos});
    if (todos?.length) {
      this.setTodos(todos);
    }
    this.setIsLoading(false);
  }
  @action
  setTodos(todos: Todo[]) {
    this.todos = todos;
  }
  @action
  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}

export default TodosViewModel;
