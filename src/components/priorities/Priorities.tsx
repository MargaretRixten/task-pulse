import {priorities} from "../../mockData/priorities.ts";

function Priorities() {
    return (
        <>
        {
            Object.values(priorities).map(priority => <label key={priority}><input type="radio" name="priority"/>{priority}</label>)
        }
        </>
    );
}

export default Priorities;