import {ISetFiltersAction, ISetTasksAction, ITask} from "../../interfaces/tasks";
import {ETasksActions} from "../../enums/action.enum.ts";
import {EFilters} from "../../enums/tasks.enum.ts";

export const setTasksAction = (payload: ITask[] | null):ISetTasksAction => {
    return {
        type: ETasksActions.SetTasks,
        payload
    }
}

export const setFiltersAction = (payload: EFilters):ISetFiltersAction => {
    return {
        type: ETasksActions.SetFilters,
        payload
    }
}