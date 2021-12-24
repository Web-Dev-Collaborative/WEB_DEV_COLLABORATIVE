import React from 'react';
import {formatDayMonth} from '../../../util/formats_util';

export default class NoteIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {option: false}
        this._handleOptionsBlur = this._handleOptionsBlur.bind(this);
        this._handleOptionsClick = this._handleOptionsClick.bind(this);
        this.openEditor = this.openEditor.bind(this);
    }

    _handleOptionsClick(){
        this.setState({options: !this.state.options})
    }

    _handleOptionsBlur(){
        setTimeout(()=>this.setState({options: false}), 250);
    }

    openEditor(){
        this.props.history.push(`/app/editor/${this.props.note.id}`)
    }

    render(){
        const {note, users} = this.props;
        return(
            <tr className="note">
                <td 
                    className="title"
                    onClick={this.openEditor}>
                <i className="far fa-sticky-note"></i><h3>{note.title}</h3>
                </td>
                <td className="created">
                {`${users[note.author_id].first_name} ${users[note.author_id].last_name}`}
                </td>
                <td className="updated">
                    {formatDayMonth(note.updated_at)}
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
                                onClick={()=>this.props.openModal('noteInfo', note)}
                                >Note info</li></ul></li>
                            <li><ul><li 
                                onClick={()=>{
                                this.props.deleteNote(note.id);
                                this._handleOptionsBlur();
                                }}
                            >Delete note</li></ul></li>
                        </ul>
                    ) : null}
                </td>
            </tr>
        )
    }
}