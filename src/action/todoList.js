export const ADD_TODO = "ADD_TODO";

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: {
        todo
    }
});

export const REMOVE_TODO = "REMOVE_TODO";

// export const removeTodo = idx => ({
//     type: REMOVE_TODO,
//     payload: idx
// });

export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: text
    // console.log(idx)
});
