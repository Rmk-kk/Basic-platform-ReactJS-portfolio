import './app-filter.css';


const AppFilter = ({onFilterUpdate, filter }) => {


    const buttonsData = [
        {name: 'all', label: 'All Employees' },
        {name: 'favourite', label: 'Favourite Employees'},
        {name: 'bigSalary', label: 'Salary > 1000$'},
        {name: 'smallSalary', label: 'Salary < 1000$'},
        {name: 'awarded', label: 'Awarded'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? 'btn btn-light' : 'btn btn-outline-light';
        return (
            <button
                type = "button"
                key = {name}
                className = { clazz }
                onClick={() => onFilterUpdate(name)}
            >
                {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            { buttons }
        </div>
    )
}

export default AppFilter;