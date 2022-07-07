import './app-info.css';

const AppInfo = ({ employeesAmount, employeesWithBonus }) => {
    return (
        <div className="app-info">
            <h1>Employee accounting in "HelloWorld" LLC.</h1>
            <h2>Total employee count: <span>{ employeesAmount }</span></h2>
            <h2>{employeesWithBonus} will receive bonus</h2>
        </div>
    )
}

export default AppInfo;