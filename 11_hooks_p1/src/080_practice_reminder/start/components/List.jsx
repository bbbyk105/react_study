import Item from "./Item";

const List = ({todos, deleteTodo, updateTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <div>
            {todos.map(todo => <Item todo={todo} key={todo.id} complete={complete} updateTodo={updateTodo}/>)}
        </div>
    );
}

export default List;