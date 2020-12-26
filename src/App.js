import React from 'react';
import { createGlobalStyle } from 'styled-components';
//syled-components에서 특정 컴포넌트를 만들어서 스타일링 하는 것이 아니라 글로벌 스타일 추가
import TodoTemplate from './components/TodoTempate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
        </TodoTemplate>
    </>
  );
}

export default App;