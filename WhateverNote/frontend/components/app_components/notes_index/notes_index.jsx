import React from 'react';
import NoteIndexItem from './notes_index_item';
import EditorContainer from '../editor/editor_container';
import {sortByLastUptade} from './notes_index_container';
import NoNotesSplash from './no_notes_splash';

export default class NotesIndex extends React.Component{
    constructor(props){
        super(props);
        this.openNote = this.openNote.bind(this);
        this.state = {editor: false, ready:false, selectFirst: false}
        this.createNote = this.createNote.bind(this);
        this.refresh = setInterval(() => {
            this.setState({refresh: "refresh"})
        }, 10000);
    }

    componentWillUnmount(){
        clearInterval(this.refresh);
    }

    componentDidMount(){
        if(this.props.title === "All Notes"){
            this.props.fetchNotes().then((payload)=>{
                const notes = payload.notes.sort(sortByLastUptade);
                this.props.history.push(`/app/notes/${notes[0].id}`);
                this.setState({editor: true})
                }
            )
        }
        else{
            this.props.fetchNotebook(this.props.match.params.notebook_id).then((payload) => {
                const notes = payload.notebook.notes.sort(sortByLastUptade);
                if(notes.length > 0) this.props.history.push(`/app/notebooks/${payload.notebook.id}/notes/${notes[0].id}`);
                this.setState({editor: true})
            })
        }
        this.setState({selectFirst: true, ready: true})
    }

    componentDidUpdate(prevProps){
        // debugger
        if(this.props.notes.length > 0){
            if(!this.state.editor){
                this.setState({editor: true})
            } 
            // Appropriate loading of components
            if(prevProps.location.pathname !== this.props.location.pathname){
                const prev = prevProps.location.pathname.split('/').filter(ele => ele !== "");
                if(prev.length === 4 || prev.length === 2){
                    this.setState({selectFirst: true})
                }
                else{
                    this.setState({selectFirst: false})
                }
                if(prev.length > 3 && prev[2] !== this.props.location.pathname.split('/')[3] && this.props.location.pathname.split('/').length !== 6){
                    this.props.history.push(`${this.props.location.pathname}/${this.props.notes[0].id}`);
                }
                if(this.props.location.pathname === '/app/notes'){
                    this.props.history.push(`/app/notes/${this.props.notes[0].id}`);
                }
            }

            this.selectItem()  
        }
    }

    selectItem(){
        const path = this.props.location.pathname.split('/');
        if(path[path.length-2] === 'notes'){
            const notes = document.getElementById('note-list').childNodes;
            notes.forEach(note => {
                if(note.id === path[path.length-1]){
                    note.classList.add('selected')
                }
                else{
                    note.classList.remove('selected')
                }
            })
        }
    }

    openNote(e, id){
        this.props.history.push(`${this.props.match.url}/${id}`)
        this.setState({selectFirst: false})
        e.currentTarget.parentElement.childNodes.forEach(li=>{
            li.classList.remove('selected')
        })
        e.currentTarget.classList.add('selected');
    }

    createNote(){
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

    render(){
        const path = this.props.location.pathname.split('/');
        const id = path[path.length-1];
        return(<>
            {this.state.ready ? 
            <div className="main-app">
                <div className="notes-index">
                    <div className="header">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.notes.length} notes</p>
                    </div>
                    {this.props.tag !== null ? <div className="filter-display">
                        <div>
                            <i className="fas fa-tag"></i>
                            {this.props.tag.name}
                            <i className="fas fa-times-circle"
                                onClick={this.props.clearFilter}></i>
                        </div>
                    </div> : null }
                    {this.props.notes.length > 0 ?
                        <ul id="note-list">{this.props.notes.map(note=><NoteIndexItem key={note.id} openNote={this.openNote} note={note} tags={this.props.tags}/>)}</ul> :
                        <NoNotesSplash createNote={this.createNote} />                    
                    }
                </div>
                {this.state.editor ? <EditorContainer id={id} selectFirst={this.state.selectFirst} notes={this.props.notes}/> : null}
            </div>
            : null}
            </>
            )
    }
}