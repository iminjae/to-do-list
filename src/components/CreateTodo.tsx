import { Button, Flex, Input } from "@chakra-ui/react";
import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";

interface CreateTodoProps {
    todos: ITodo[];
    setTodos: Dispatch<SetStateAction<ITodo[]>>;
}


const CreateTodo: FC<CreateTodoProps> = ({ todos, setTodos }) => {

    const [currentTodoId, setCurrentTodoId] = useState<number>(
        todos[todos.length - 1]?.id
    );


    const [content, setContent] = useState<string>("");

    const onClickCreateTodo = () => {
        if (!content) return;

        setTodos([...todos, { id: currentTodoId + 1, content, isDone: false }]);
        setCurrentTodoId(currentTodoId + 1);
        setContent("");
    };

    useEffect(() => console.log(content), [content]);

    return <Flex px={10} bgColor="red.200" h={32} justifyContent="center" alignItems="center">
        <Input
            maxW={250}
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
        <Button ml={2} colorScheme="orange" onClick={onClickCreateTodo}>만들기</Button>
    </Flex>;
};

export default CreateTodo;