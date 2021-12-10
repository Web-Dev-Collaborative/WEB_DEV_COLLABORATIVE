import React from 'react';
import Actions from './actions';
import UserDropdown from './user-dropdown';

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {expanded: new Set()}
        this._displayUserDropdown = this._displayUserDropdown.bind(this);
        this._hideUserDropdown = this._hideUserDropdown.bind(this);
        this._select = this._select.bind(this);
        this._createNote = this._createNote.bind(this);
        this.selectByPath = this.selectByPath.bind(this);
        this.dropdown = "";
    }

    componentDidMount(){
        this.dropdown = document.getElementsByClassName('user-dropdown')[0];
        this.props.fetchTags();
        this.props.fetchNotes();
    }

    componentDidUpdate(){
        this.selectByPath()
    }

    _displayUserDropdown(){
        this.dropdown.classList.remove('hidden');
        document.getElementsByClassName('user')[0].removeEventListener('click', this._displayUserDropdown);
        document.addEventListener('click', this._hideUserDropdown);
    }

    _hideUserDropdown(){
        this.dropdown.classList.add('hidden');
        document.removeEventListener('click', this._hideUserDropdown);
    }

    _select(e){
        this.selectByPath();
        this._redirect(e.currentTarget.id)
    }

    selectByPath(){
        let path = this.props.location.pathname.split('/').filter(ele => ele !== "");
        const actions = Array.from(document.getElementsByClassName('action'))
        if(path.length <= 3){
            actions.forEach(action => {
                action.classList.remove('selected');
                if(action.id === path[1]) action.classList.add('selected')
            })
        }
        else if(path[1] === 'notebooks'){
            actions.forEach(action => {
                action.classList.remove('selected');
                if(action.id === `notebook${path[2]}`) action.classList.add('selected')
            })
        }
    }

    _createNote(){
        let notebook_id, route;
        let path = this.props.location.pathname.split('/');
        if(path[2] === 'notebooks'){
            notebook_id = path[3];
            route = `/app/notebooks/${notebook_id}/notes`;
        }
        else{
            notebook_id = this.props.user.default_notebook;
            route = `/app/notes`
        }
        this.props.createNote({title: "Untitled", body: "", notebook_id: notebook_id, author_id:this.props.user.id}).then(payload=>{
            this.props.history.push(`${route}/${payload.note.id}`)
        })
    }
    
    _redirect(component){
        switch (component) {
            case "notebooks":
                this.props.history.push('/app/notebooks')
                break;
            case "tags":
                this.props.openModal('tags')
                break;        
            default:
                this.props.clearFilters();
                if(this.props.location.pathname.split("/")[2] !== 'notes') this.props.history.push(`/app/notes/`)
                break;
        }
    }

    _expand(target){
        if (this.state.expanded.has(target)){
            this.state.expanded.delete(target)
        }
        else{
            this.state.expanded.add(target)
        }
        this.setState({expanded: this.state.expanded})
    }

    render(){
        const {user} = this.props;
        return(
            <div className="side-bar" onClick={this.props.closeModal}>
                <div onClick={this._displayUserDropdown} className='user'>
                    <img src={window[user.user_icon]} alt=""/>
                    <p>{`${user.first_name} ${user.last_name}`}<i className="fas fa-angle-down"></i></p>
                </div>

                <UserDropdown user={user} logout={this.props.logout} openModal={this.props.openModal}/>
                
                <button onClick={this._createNote}><i className="fas fa-plus"></i>New Note</button>

                <Actions select={this._select} selectByPath={this.selectByPath} expand={this._expand.bind(this)} expanded={this.state.expanded}/>
            </div>
        )
    }
}