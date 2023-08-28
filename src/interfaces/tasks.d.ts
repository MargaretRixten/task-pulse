import {ETasksActions} from "../enums/action.enum.ts";
import {EFilters} from "../enums/tasks.enum.ts";

export interface ITasksState {
    filters: EFilters.ALL
    tasks: ITask[] | null
}

export interface ITask {
    id: number,
    name: string,
    complete: boolean
}

export interface ISetTasksAction {
    type: ETasksActions.SetTasks,
    payload: ITask[] | null
}

export interface ISetFiltersAction {
    type: ETasksActions.SetFilters,
    payload: EFilters
}

export type TTasksAction = ISetTasksAction | ISetFiltersAction