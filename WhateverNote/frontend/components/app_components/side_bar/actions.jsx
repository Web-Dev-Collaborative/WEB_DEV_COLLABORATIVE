import React from 'react';
import NotebooksSidebar from './notebooks_sidebar_container';
import TagSidebar from './tags_sidebar_container';

export default function Actions({expand, select, expanded, selectByPath}){
    return(
        <ul className="actions">
                <li onClick={select} id="notes" className="action">
                    <i className="fas fa-caret-right invisible"></i><i className="fas fa-sticky-note"></i>All Notes
                </li>   
                <li onClick={select} id="notebooks" className="action">
                    <i onClick={ e =>{  toggleCaret(e.currentTarget);
                                        e.stopPropagation();
                                        expand("notebooks")} }
                            className="fas fa-caret-right caret"></i>
                    <i className="fas fa-book-open"></i>Notebooks
                </li>

                {expanded.has("notebooks") ? <li className="expanded-sidebar">
                    <NotebooksSidebar select={selectByPath}/> 
                </li>: null} 

                <li onClick={e => {
                                e.stopPropagation()
                                select(e)}} 
                    id="tags" 
                    className="action">
                    <i onClick={ e =>{  toggleCaret(e.currentTarget);
                                        e.stopPropagation();
                                        expand("tags")} }
                            className="fas fa-caret-right caret"></i>
                    <i className="fas fa-tags"></i>Tags
                </li>       

                {expanded.has("tags") ? <li className="expanded-sidebar">
                    <TagSidebar select={selectByPath}/> 
                </li>: null}            
        </ul>
    )
}

function toggleCaret(target){
    const carets = document.getElementsByClassName('caret')
    target.classList.toggle('expanded');
    Array.from(carets).forEach(caret=>{
        // (caret !== target) ? caret.classList.remove('expanded') : caret.classList.add('expanded');
        if (Array.from(caret.classList).includes('expanded')){
            caret.classList.remove("fa-caret-right")
            caret.classList.add("fa-caret-down")}
        else{
            caret.classList.remove("fa-caret-down")
            caret.classList.add("fa-caret-right")
        }
    })
}
