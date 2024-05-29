import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import TodoCard from "./TodoCard";

const TodoList: FC = () => {
  return <Flex bgColor="yellow.300" flexGrow={1} flexDir="column" alignItems="center" pt={10} gap={2}>
    <TodoCard />
  </Flex>;
};

export default TodoList;