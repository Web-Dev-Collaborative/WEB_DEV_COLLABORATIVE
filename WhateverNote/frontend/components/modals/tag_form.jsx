import React, {useState, useEffect} from 'react';

export default function TagForm({formType, action, closeModal, tag}){
    const [name, setName] = useState(tag.name);
    const [valid, setValid] = useState(false);

    function save() {
        tag.name = name;
        action(tag)
        closeModal()
    }

    useEffect(() => name.length > 0 ? setValid(true) : setValid(false), [name])

    return(
        <div className='tag-form'>
                <div className="title"><h1>{formType}</h1><i onClick={closeModal} className="fas fa-times"></i></div>
                <form >
                    <label>Name</label>
                    <input type="text" onChange={e => setName(e.target.value)} value={name} placeholder="Tag name"/>
                </form>

                <div className="buttons">
                    <button onClick={closeModal} className="cancel">Cancel</button>
                    <button onClick={save} disabled={!valid} className="continue">Continue</button>
                </div>
        </div>
    )
}