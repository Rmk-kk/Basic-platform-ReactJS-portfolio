
import './employee-list-item.css';

const EmployeeListItem = (props) => {
    const {name, salary, favourite, award, onDelete, onToggleProp } = props;
    let listClassNames = "list-group-item d-flex justify-content-between";
    if(award) {
        listClassNames += ' increase';
    }
    if(favourite) {
        listClassNames += ' like';
    }
    return (
        <li className={ listClassNames }>
            <span onClick={ onToggleProp } data-toggle="favourite" className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        data-toggle = "award"
                        className="btn-cookie btn-sm "
                        onClick={ onToggleProp }>
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button"
                        onClick={onDelete}
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeeListItem;