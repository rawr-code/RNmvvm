import {TodoList} from '@components';

// ViewModel
import TodosViewModel from './viewModel';

import {container} from '../../../config/DI';
import {useEffect} from 'react';

const HomeView = () => {
  const viewModel = container.get<TodosViewModel>('TodosViewModel');

  useEffect(() => {
    console.log('---------her----------', {todos: viewModel.todos});
  }, [viewModel.isLoading, viewModel.todos]);

  console.log('render', viewModel);
  // console.log('her--', {todos: viewModel.getTodossss()});

  return <TodoList isLoading={viewModel.isLoading} />;
};

export default HomeView;
