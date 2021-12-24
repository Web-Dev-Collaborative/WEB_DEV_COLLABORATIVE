import React from 'react';
import EditorTags from '../tags/editor_tags_container';

export default class Footer extends React.Component{
    render(){
        return(
            <div className="app-footer">
                <div className="left-footer">
                    <EditorTags note={this.props.note}/>
                </div>
                <div className="right-footer">
                    <p>{this.props.status}</p>
                </div>
            </div>
        )
    }
}