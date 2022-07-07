import {Component} from "react";
import nextId from "react-id-generator"; // ID generator

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeeList from "../employee-list/employee-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                    name: 'John Smith',
                    salary: 1300,
                    key: nextId(),
                    award: false,
                    favourite: false,
                },
                {
                    name: 'Alex Rockfeller',
                    salary: 4700,
                    key: nextId(),
                    award: true,
                    favourite: false,
                },
                {
                    name: 'Stan Schmidt',
                    salary: 1250,
                    key: nextId(),
                    award: false,
                    favourite: false,
                },
                {
                    name: 'Brad Pitt',
                    salary: 850,
                    key: nextId(),
                    award: false,
                    favourite: false,
                },
                {
                    name: 'Nikolas Cage',
                    salary: 450,
                    key: nextId(),
                    award: false,
                    favourite: false,
                },
            ],
            search : '',
            filter : 'all',
        }
    }

    deleteEmployee = (id) => {
        this.setState(({ data }) => {
            // const index = data.findIndex(el => el.key === id);
            return {
                data : data.filter(item => item.key !== id)
            };
        })
    }

    addEmployee = (name, salary) => {
        this.setState(( { data } ) => {
                return {
                    data: [...data,
                        {
                            name: name,
                            salary: salary,
                            key : nextId(),
                            award: false,
                            favourite: false,
                        }],
                }
            })
        }

    toggleProperty = (id, prop) => {
        this.setState(({data}) => ({
            data : data.map(item => {
                if(item.key === id ) {
                    return {...item, [prop] : !item[prop]}
                }
                return item
            })
        }))
    }

    searchEmployee = (items, search ) => {
        if(search.length === 0) {
            return items
        }

        return  items.filter(item => {
            return item.name.indexOf(search) > -1
        })
    }

    onSearchUpdate = (name) => {
        this.setState({
            search : name
        })
    }

    onFilterUpdate = (filter) => {
        this.setState({ filter } )
    }

    filterEmployee = (items, filter) => {
        switch(filter) {
            case 'bigSalary':
                return items.filter(item => {
                    return item.salary > 1000
                })
            case 'smallSalary':
                return items.filter(item => {
                    return item.salary <= 1000
                })
            case 'favourite':
                return items.filter(item => {
                    return item.favourite
                })
            case 'awarded':
                return items.filter(item => {
                    return item.award
                })
            default:
                return items;
        }
    }
    render() {
        const { data, search, filter } = this.state;
        const filteredData = this.filterEmployee(this.searchEmployee(data, search),filter);

        return (
            <div className="app">
                <AppInfo
                    employeesAmount = { this.state.data.length }
                    employeesWithBonus = { this.state.data.filter(item =>  item.award).length }
                />
                <div className="search-panel">
                    <SearchPanel
                        onSearchUpdate = { this.onSearchUpdate }
                    />
                    <AppFilter
                        onFilterUpdate={ this.onFilterUpdate }
                        filter = { filter }
                    />
                </div>
                <EmployeeList
                    data = { filteredData }
                    onDelete = { this.deleteEmployee }
                    onToggleProp = { this.toggleProperty }
                />
                <EmployeeAddForm
                    onAdd = { this.addEmployee }
                />
            </div>
        )
    }
}

export default App;