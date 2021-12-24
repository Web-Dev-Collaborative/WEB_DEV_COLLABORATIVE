import React, {useState} from 'react';

export default function Tags({tags, show, close, openModal, deleteTag}) {
    if(show){
        const [options, setOptions] = useState(false)

        const divided = new Object({});
        tags.forEach(tag => {
            const key = tag.name[0].toUpperCase();
            divided[key] = typeof divided[key] !== 'undefined' ? [...divided[key], tag] : [tag]
        })

     return(
        <div className='tags-modal' onClick={close}>
            <div className='tags' onClick={e => e.stopPropagation()}>
                <div className="header">
                    <h1>Tags</h1>
                    <i className="fas fa-plus" onClick={() => openModal('newTag')}></i>
                </div>
                <ul>
                    {Object.keys(divided).map(key => {
                        return(
                            <li key={key}>
                                {key}
                                <ul>
                                    {divided[key].map(tag => {
                                        return(
                                            <li key={tag.id}>
                                                {tag.name} ({tag.notes.length})
                                                <i className="fas fa-ellipsis-h" onClick={() => openModal('editTag', tag)}></i>
                                                {options ? (
                                                <ul className="options-dropdown" >
                                                    <li><ul><li
                                                        onClick={()=> openModal('editTag', tag)}
                                                        >Rename tag</li></ul></li>
                                                    <li><ul><li onClick={()=>{
                                                        deleteTag(tag.id);
                                                        this._handleOptionsBlur();
                                                        }}>Delete tag</li></ul></li>
                                                </ul>
                                            ) : null}
                                            </li>
                                            )   
                                    })}
                                </ul>
                            </li>
                        ) 
                    })}
                </ul>
            </div>
        </div>
    )}
    else{
        return null;
    }
}