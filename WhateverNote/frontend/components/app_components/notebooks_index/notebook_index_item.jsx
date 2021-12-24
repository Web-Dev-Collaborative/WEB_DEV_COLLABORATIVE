import React from 'react';
import NotesIndexItems from './notes_index_items';
import {formatDayMonth, sortByLastUptade} from '../../../util/formats_util';

export default class NotebookIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {expanded: false, options: false}
        this.openNotebook = this.openNotebook.bind(this);
        this._handleOptionsBlur = this._handleOptionsBlur.bind(this);
        this._handleOptionsClick = this._handleOptionsClick.bind(this);
    }

    toggleExpand(){
        this.setState({expanded: !this.state.expanded})
    }

    _handleOptionsClick(){
        this.setState({options: !this.state.options})
    }

    _handleOptionsBlur(){
        setTimeout(()=>this.setState({options: false}), 250);
    }

    toggleCaret(e){
        const carets = e.target.parentElement.parentElement.parentElement.getElementsByClassName('caret');
        Array.from(carets).forEach(caret=>{
            if (Array.from(caret.classList).includes('expanded')){
                caret.classList.remove("fa-caret-right")
                caret.classList.add("fa-caret-down")}
            else{
                caret.classList.remove("fa-caret-down")
                caret.classList.add("fa-caret-right")
            }
        })
    }

    openNotebook(){
        this.props.history.push(`/app/notebooks/${this.props.notebook.id}/notes`)
    }

    render(){
        const {notebook, notes, users} = this.props;
        const sortedNotes = notes.sort((note1, note2)=>{return note1.updated_at <= note2.updated_at ? 1 : -1})
        return(
            <>
            <tr>
                <td className="title"
                    onClick={this.openNotebook}
                >
                    <i className="fas fa-caret-right caret"
                        onClick={(e)=>{
                            e.currentTarget.classList.toggle('expanded');
                            this.toggleCaret(e);
                            e.stopPropagation();
                            this.toggleExpand()
                            }
                        }
                    ></i>
                        <i className="fas fa-book-open"></i><h3>{notebook.name} </h3><p>({notebook.notes.length})</p>
                </td>
                <td className="created">
                    {`${users[notebook.authorId].first_name} ${users[notebook.authorId].last_name}`}
                </td>
                <td className="updated">
                    {formatDayMonth(notebook.updatedAt)}
                </td>
                <td className="actions">
                    <button 
                            className="options" 
                            onClick={this._handleOptionsClick}
                            onBlur={this._handleOptionsBlur}
                            >
                            <i className="fas fa-ellipsis-h"></i>
                            <div className='right description'>
                            <div className="arrow"></div>
                            More actions</div>

                        </button>
                        {this.state.options ? (
                            <ul className="options-dropdown" >
                                <li><ul><li
                                    onClick={()=>this.props.openModal('renameNotebook', notebook)}
                                    >Rename notebook</li></ul></li>
                                <li><ul><li 
                                    onClick={()=>{
                                    this.props.deleteNotebook(notebook.id);
                                    this._handleOptionsBlur();
                                    }}
                                    >Delete notebook</li></ul></li>
                            </ul>
                        ) : null}   
                </td>
            </tr>
            {this.state.expanded ? <NotesIndexItems notes={sortedNotes} users={users} /> : null} 
            </>
        )
    }
}