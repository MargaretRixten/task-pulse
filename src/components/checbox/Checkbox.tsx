import './Checkbox.scss'

interface IProps {
    onChangeChecked: () => void,
    checked: boolean
}

function Checkbox({onChangeChecked, checked}: IProps) {
    return (
        <>
        <input onChange={() => {}} checked={checked} className="check__input" type="checkbox"/>
            <span onClick={onChangeChecked} className="check__box"></span>
        </>

    );
}

export default Checkbox;