import React from 'react';

export default class Settings extends React.Component{

    constructor(props){
        super(props);
        this.state = Object.assign({}, props.user, {
            dropdown: false
        })
        this.save = this.save.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    save(){
        this.props.updateUser(this.state);
        this.props.closeModal();
    }

    handleChange(field){
        return e => this.setState({[field]: e.target.value})
    }

    toggleDropdown(){
        this.setState({dropdown: !this.state.dropdown})
    }

    render(){
        debugger
        return(
            <div className="settings">
                <div className="title"><h1>User Settings</h1><i onClick={this.props.closeModal} className="fas fa-times"></i></div>
    
                <form>
                    <div className="user-icon"><h3>User Icon</h3><img src={window[this.state.user_icon]}/></div>
                    <button className="icons" onClick={this.toggleDropdown} onBlur={()=>this.setState({dropdown: false})}>
                        Change Icon <i className="fas fa-angle-down"></i>
                        {this.state.dropdown ? <ul className="icon-dropdown">
                            <li 
                                className={`user-icon ${'dori' === this.state.user_icon ? "selected" : ""}`}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    this.setState({user_icon: 'dori'})
                                    this.setState({dropdown: false})
                                }}><img src={window.dori} alt="Dori"/><p>Dori</p>
                            </li>
                            <li 
                                className={`user-icon ${'crush' === this.state.user_icon ? "selected" : ""}`}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    this.setState({user_icon: 'crush'})
                                    this.setState({dropdown: false})
                                }}><img src={window.crush} alt="Crush"/><p>Crush</p>
                            </li>
                            <li 
                                className={`user-icon ${'nemo' === this.state.user_icon ? "selected" : ""}`}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    this.setState({user_icon: 'nemo'})
                                    this.setState({dropdown: false})
                                }}><img src={window.nemo} alt="Nemo"/><p>Nemo</p>
                            </li>
                            <li 
                                className={`user-icon ${'squirt' === this.state.user_icon ? "selected" : ""}`}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    this.setState({user_icon: 'squirt'})
                                    this.setState({dropdown: false})
                                }}><img src={window.squirt} alt="Squirt"/><p>Squirt</p>
                            </li>
                            <li 
                                className={`user-icon ${'bruce' === this.state.user_icon ? "selected" : ""}`}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    this.setState({user_icon: 'bruce'})
                                    this.setState({dropdown: false})
                                }}><img src={window.bruce} alt="Bruce"/><p>Bruce</p>
                            </li>
                            <li 
                                className={`user-icon ${'gill' === this.state.user_icon ? "selected" : ""}`}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    this.setState({user_icon: 'gill'})
                                    this.setState({dropdown: false})
                                }}><img src={window.gill} alt="Gill"/><p>Gill</p>
                            </li>
                        </ul> : null}
                    </button>

                    <h3>First Name:</h3>
                    <input type="text" value={this.state.first_name} onChange={this.handleChange('first_name')}/>

                    <h3>Last Name:</h3>
                    <input type="text" value={this.state.last_name} onChange={this.handleChange('last_name')}/>
                </form>

                <div className="buttons">
                    <button onClick={this.props.closeModal} className="cancel">Cancel</button>
                    <button onClick={this.save} className="save">Save Changes</button>
                </div>
            </div>
        )
    }
}