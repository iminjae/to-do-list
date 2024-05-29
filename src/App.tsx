import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const sampleData: ITodo[] = [
  {
    id: 1,
    content: "qkqajrrl",
    isDone: false,
  },
  {
    id: 2,
    content: "wkawkrl",
    isDone: true,
  },
];

const App: FC = () => {

  const [currentTodoId, setCurrentTodoId] = useState<number>(
    sampleData[sampleData.length - 1].id
  );

  const [todos, setTodos] = useState<ITodo[]>(sampleData);

  return (
    <Flex flexDir="column" minH="100vh">
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </Flex>
  );
};

export default App;