import React from 'react';
import HeaderContainer from './header_container';
import NotebookIndexItemContainer from './notebook_index_item_container';

export default class NotebooksIndex extends React.Component{
    componentDidMount(){
        this.props.fetchNotebooks();
    }

    render(){
        return(
            <div className="notebooks-index">
                <HeaderContainer />
                <table>
                    <thead>
                        <tr>
                            <th className="title">Title</th>
                            <th className="created">Created by</th>
                            <th className="updated">Updated</th>
                            <th className="actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.notebooks.map(notebook => { 
                            return <NotebookIndexItemContainer
                                        key={notebook.id} 
                                        notebook={notebook}
                            />
                        })}

                    </tbody>

                </table>
            </div>
            
        )
    }
}