import EmployeeListItem from "../employee-list-item/employee-list-item";

import './employee-list.css';

const EmployeeList = ({data, onDelete, onToggleProp}) => {

    const employeeItems = data.map(person => {
        const {key, ...personProps} = person;
        return (
            <EmployeeListItem
                key = {key} {...personProps}
                onDelete = {() => onDelete(key)}
                onToggleProp = {(e) => onToggleProp(key, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    })
    return (
        <ul className="app-list list-group">
            {employeeItems}
        </ul>
    )
}

export default EmployeeList;