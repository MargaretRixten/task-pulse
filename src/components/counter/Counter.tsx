import {ITask} from "../../interfaces/tasks";
import './Counter.scss';

interface IProps {
    activeTasks: ITask[] | null
}

function Counter({activeTasks}: IProps) {
    return (
        <div className="counter">Осталось выполнить: {activeTasks && activeTasks.length ? activeTasks.length : 0}</div>

    );
}

export default Counter;