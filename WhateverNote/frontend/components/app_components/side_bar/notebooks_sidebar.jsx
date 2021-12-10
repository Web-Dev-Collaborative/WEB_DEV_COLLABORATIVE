import React from 'react';

export default class NotebooksSidebar extends React.Component{
    constructor(props){
        super(props);
        this.openNotebook = this.openNotebook.bind(this);
    }
    componentDidMount(){
        this.props.fetchNotebooks();
    }

    openNotebook(id){
        const target = `/app/notebooks/${id}/notes`;
        let path = this.props.location.pathname.split('/');
        path.pop();
        if(path.join('/') !== target) {
            this.props.fetchNotebook(id).then(() => {this.props.history.push(target);
            })
        }
    }

    listNotebooks(){
        return this.props.notebooks.map(notebook => {
        return(
            <li key={notebook.id} id={`notebook${notebook.id}`}
                className="action" onClick={() => {
                                                    this.props.select();
                                                    this.openNotebook(notebook.id)}}>
                <i className="fas fa-book-reader"></i>{notebook.name}
           </li>
        )})
    }

    render(){
        return(
            <ul className="notebooks-sidebar">
                {this.listNotebooks()}
            </ul>
        )
    }
}