import React, {Component} from "react";

class Form extends Component {

    DefaultState = {
        name: '',
        job: '',
    }

    state = this.DefaultState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {

        this.props.handleSubmit(this.state)
        this.setState(this.DefaultState)
    }
    render() {

        const {name, job} = this.state
        return (
            <form>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange} />
            <label htmlFor="job">Job</label>
            <input
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={this.handleChange} />
            {/* {job} */}
            <input type="button" value="Submit" onClick={this.submitForm} disabled={job.length === 0 && name.length === 0} />
            </form>
            
        )
    }
}

export default Form