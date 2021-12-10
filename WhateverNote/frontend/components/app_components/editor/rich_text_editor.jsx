import React from "react";
import ReactQuill from "react-quill";
import {MyToolbar, formats, modules} from './editor_toolbar';
import HeaderContainer from "./header_container";
import Footer from './footer'


export default class RichTextEditor extends React.Component{
    constructor(props){
        super(props);
        this.state= Object.assign({}, this.props.note,{
            noteIds: props.noteIds,
            status: "All changes saved",
            autoSave: false
        })
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
        this.startAutoSave = this.startAutoSave.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.type === 'standard' && this.props.selectFirst){
            const items = document.getElementsByClassName('note-item')
            if(Array.from(items).length > 0) items[0].classList.add('selected');
        }
        
        if(prevProps.location.pathname !== this.props.location.pathname){
            if (typeof this.props.note !== 'undefined'){
                Object.keys(this.props.note).forEach(key=>{
                    this.setState({[key]:this.props.note[key]})
                })
                this.setState({noteIds: this.props.noteIds})
                this.hideToolbar();
            }
        }
    }

    handleBodyChange(body){
        this.setState({body})
        if(this.state.autoSave){
            this.setState({status: "Saving..."})
            clearTimeout(this.timeout)
            this.timeout = setTimeout(this.save, 1000)
        }
    }

    startAutoSave(){
        this.setState({autoSave: true})
    }

    handleChange(e){
        this.setState({title: e.target.value});
    }

    save(){
        this.setState({notebook_id: this.props.note.notebook_id})
        if(this.state.title === ''){
            this.setState({title: "Untitled"})
        }
        this.props.updateNote(this.state).then(()=> this.setState({status: "All changes saved"}))
    }

    deleteNote(){
        if(this.props.type === "standard")
        {
            const remId = this.state.noteIds.indexOf(this.state.id);
            this.state.noteIds.splice(remId, 1)
            let path = this.props.location.pathname.split('/');
            path.pop();
            this.props.history.push(`${path.join('/')}/${this.state.noteIds[0]}`);
        }
        else{
            this.props.history.push('/app/notebooks');
        }
        this.props.deleteNote(this.state.id)
    }

    showToolbar(){
        const eles = document.getElementsByClassName('toolbar-field')[0].childNodes;
        eles[0].classList.remove('active');
        eles[1].classList.add('active');
    }

    hideToolbar(){
        const eles = document.getElementsByClassName('toolbar-field')[0].childNodes;
        eles[1].classList.remove('active');
        eles[0].classList.add('active');
    }

    _formatDate(){
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const date = new Date(this.state.updated_at)
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }

    render(){
        return(<>
            {this.props.note ? <div className="rich-text-editor" >
                    <HeaderContainer 
                        deleteNote={this.deleteNote} 
                        note={this.props.note} />
                <div className='toolbar-field'>
                    <p className="display active">Last edited on {this._formatDate()}</p>
                    <MyToolbar onClick={this.showToolbar}/>
                </div>
                <form>
                    <input  type="text" className="title" 
                            value={this.state.title === "Untitled" ? "" : this.state.title} 
                            placeholder="Title"
                            onChange={this.handleChange} 
                            onFocus={this.hideToolbar}
                            onBlur={this.save}
                            />
                    <ReactQuill value={this.state.body}
                                onChange={this.handleBodyChange}
                                onFocus={() => {
                                    this.showToolbar()
                                    this.startAutoSave()}}
                                onBlur={() => this.setState({autoSave: false})}
                                theme="snow"
                                modules={modules}
                                formats={formats}
                                bounds={'.rich-text-editor'}
                                placeholder="Start writing your note"
                    />
                </form>
                <Footer status={this.state.status} note={this.props.note} />
            </div> : null} </>
        )
    }
}