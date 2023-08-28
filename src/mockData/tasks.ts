import {EFilters} from "../enums/tasks.enum.ts";

export const tasksFilterMock: Record<EFilters, string> = {
    [EFilters.All]: 'Все задачи',
    [EFilters.Active]: 'Активные',
    [EFilters.Completed]: 'Завершенные'
}