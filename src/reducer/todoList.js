import * as actions from '../action/todoList'

const initState = {
    todoList: []
}

const todoListReducer = (state = initState, action) => {
    switch(action.type) {
        case actions.ADD_TODO: 
            return{
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload.todo
                ]
            }
        case actions.REMOVE_TODO: {
            console.log(state.todoList.filter(item => item !== action.payload))
            return {
                ...state,
                todoList: state.todoList.filter(item => item !== action.payload)
                
            }
        }
        default: 
            return state;
    }
};


export default todoListReducer;

