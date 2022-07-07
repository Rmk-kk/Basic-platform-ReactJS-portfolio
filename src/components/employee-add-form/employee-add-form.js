import {Component} from "react";

import './employee-add-form.css';

class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            salary: 0,
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (event) => {
        if(this.state.name.length <= 1 || this.state.salary === 0) {
            event.preventDefault();
            this.setState({
                name: '',
                salary: 0,
            })
            return false
        }
       event.preventDefault();
       this.props.onAdd(this.state.name, this.state.salary);
       this.setState({
           name: '',
           salary: 0,
       })
    }

    render(){
        const { name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    onSubmit={this.onSubmit}
                    className= "add-form d-flex">
                    <input type = "text"
                           value = {name}
                           onChange = {this.onValueChange}
                           className="form-control new-post-label"
                           name = 'name'
                           placeholder="Full Name" />
                    <input type = "number"
                           value = {salary}
                           onChange = {this.onValueChange}
                           className="form-control new-post-label"
                           name = 'salary'
                           placeholder="Salary" />

                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeeAddForm;