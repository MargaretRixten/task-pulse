import './Filtres.scss';
import {tasksFilterMock} from "../../mockData/tasks.ts";
import {useAppDispatch} from "../../store/hooks.ts";
import {setFiltersAction} from "../../store/actions/tasks.ts";
import {EFilters} from "../../enums/tasks.enum.ts";
import {useSelector} from "react-redux";
import {filtersSelector} from "../../store/selectors/tasksSelector.ts";

function Filters() {
    const dispatch = useAppDispatch();
    const filters = useSelector(filtersSelector);
    const onHandleFilter = (filter: string) => {
        dispatch(setFiltersAction(filter as EFilters))
    }
    return (
        <div className="filtres">
            {
                Object.entries(tasksFilterMock).map(([key , value]) => (
                    <button onClick={() => onHandleFilter(key)} key={key} className={`filtres__button ${filters === key ? 'active' : ''}`}>{value}</button>
                ))
            }
        </div>
    );
}

export default Filters;