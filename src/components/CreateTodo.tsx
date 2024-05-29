import { Button, Flex, Input } from "@chakra-ui/react";
import { FC } from "react";

const CreateTodo: FC = () => {
    return <Flex px={10} bgColor="red.200" h={32} justifyContent="center" alignItems="center">
        <Input />
        <Button ml={2} colorScheme="orange">만들기</Button>
    </Flex>;
};

export default CreateTodo;