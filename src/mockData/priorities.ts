import {EPriorities} from "../enums/tasks.enum.ts";

export const priorities: Record<EPriorities, string> = {
    [EPriorities.Low]: 'Низкий',
    [EPriorities.Middle]: 'Средний',
    [EPriorities.High]: 'Высокий'

}