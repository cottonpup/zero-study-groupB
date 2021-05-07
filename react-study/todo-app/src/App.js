import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트의 기초 알아보기', checked: true },
    { id: 2, text: '컴포넌트 스타일링해 보기', checked: true },
    { id: 3, text: '일정 관리 앱 만들어 보기', checked: false },
  ]);

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
        // id값이 같을 때는 새로운 객체 반환, 다를 때는 변화를 주지 않고 처음 받아왔던 상태 그대로 반환
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  // 고윳값으로 사용될 id
  // ref로 변수 담기
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
