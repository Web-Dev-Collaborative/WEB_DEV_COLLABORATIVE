import React from 'react';

export default class NotebookForm extends React.Component{
    constructor(props){
        super(props);
        this.state = Object.assign({}, props.notebook, {
            continue: false
        })
        this.save = this.save.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({name: e.target.value})
        if(e.target.value.length > 0) {
            this.setState({continue: true})
        }
        else{
            this.setState({continue: false})
        }
    }

    save(){
        if (this.props.formType === "Create new notebook") this.setState({author_id: this.props.user});
        this.props.action(this.state).then(() => this.props.closeModal());
    }

    render(){
        return(
            <div className="notebook-form">
                <div><div className="title"><h1>{this.props.formType}</h1><i onClick={this.props.closeModal} className="fas fa-times"></i></div>
                {this.props.formType === "Create new notebook" ? <p>
                    Notebooks are useful for grouping notes around a common topic.
                </p> : null}
                </div>
                <form >
                    <label>Name</label>
                    <input type="text" onChange={this.handleChange} value={this.state.name} placeholder="Notebook name"/>
                    <ul>{this.props.errors}</ul>
                </form>

                <div className="buttons">
                    <button onClick={this.props.closeModal} className="cancel">Cancel</button>
                    <button onClick={this.save} disabled={!this.state.continue} className="continue">Continue</button>
                </div>
            </div>
        )
    }
}