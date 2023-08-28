import {FaFeatherAlt} from "react-icons/fa";
import {GoTrash} from "react-icons/go";

import './taskControl.scss';
import {BsCheckCircle} from "react-icons/bs";
import {CgCloseO} from "react-icons/cg";


interface IProps {
    completed: boolean;
    notEditable: boolean;
    onEditTask: () => void;
    onDeleteTask: () => void;
    acceptChangesForTask: () => void;
    cancelChangesForTask: () => void;
}

function TaskControl({completed, onEditTask, onDeleteTask, notEditable, acceptChangesForTask, cancelChangesForTask}: IProps) {
    return (
        notEditable ?
        <div className='task-control'>
            {!completed &&
                <div className="task-control__icon" onClick={onEditTask}>
                    <FaFeatherAlt />
                </div>
            }
            <div className="task-control__icon" onClick={onDeleteTask}>
                <GoTrash />
            </div>
        </div>
        :
        <div className='task-control'>
            <div onClick={acceptChangesForTask} className="task-control__icon task-control__accept">
                <BsCheckCircle />
            </div>
            <div className="task-control__icon task-control__cancel" onClick={cancelChangesForTask}>
                <CgCloseO />
            </div>
        </div>
    );
}

export default TaskControl;