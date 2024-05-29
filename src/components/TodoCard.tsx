import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

const TodoCard: FC = () => {
    return (
        <Flex bgColor="gray.50" px={2} py={2} rounded="lg" gap={1}>
            <Text fontSize={20} w={48} isTruncated={true}>ekfflrl</Text>
            <Button colorScheme="blue"><FiEdit3 /></Button>
            <Button colorScheme="red"><FiTrash2 /></Button>
        </Flex>
    );
};

export default TodoCard;