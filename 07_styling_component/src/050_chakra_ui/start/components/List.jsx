import { VStack } from "@chakra-ui/react";

const List = ({ todos, deleteTodo }) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <VStack>
            <div>
                {todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <button onClick={() => complete(todo.id)}>完了</button>
                            <span>{todo.content}</span>
                        </div>
                    )
                })}
            </div>
        </VStack>
    );
}

export default List;