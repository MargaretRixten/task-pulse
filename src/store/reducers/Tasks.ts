import {ETasksActions} from "../../enums/action.enum.ts";
import {ITasksState, TTasksAction} from "../../interfaces/tasks";
import {EFilters} from "../../enums/tasks.enum.ts";


const initState: ITasksState = {
    filters: EFilters.All,
    tasks: null,
}

const initialState = {...initState};

export const tasksReducer = (state: ITasksState = initialState, action: TTasksAction) => {
    switch (action.type) {
        case ETasksActions.SetTasks:
            return {
                ...state,
                tasks: action.payload
            }
        case ETasksActions.SetFilters:
            return {
                ...state,
                filters: action.payload
            }
        default:
            return {
                ...state,
            };
    }
}
