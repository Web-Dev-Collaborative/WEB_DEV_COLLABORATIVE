import React, {useState, useEffect} from 'react';
import { createTag, addTag, removeTag } from '../../../util/tags_util';

import EditorTag from './editor_tag_item';
import "regenerator-runtime/runtime.js"

export default function EditorTags({allTags, note, tags, fetchTag, fetchNote}) {
    const [result, setResult] = useState([]);
    const [query, setQuery] = useState('');

    function search() {
        setResult(allTags.filter(tag => tag.name.toLowerCase().includes(query.toLowerCase())))
    }

    function create() {
        createTag({name: query}).then( tag => {
            addTagging(tag)
        })
    }

    function addTagging(tag) {
        addTag(tag.id, note.id).then( () => {
            fetchTag(tag.id)
            fetchNote(note.id)
        })
    }

    useEffect(search, [query])

    return(
        <ul>
            {allTags.length > 0 ? note.tags.map(tag => <EditorTag tag={tags[tag]} key={tag}/>) : null}

            <li className="add-tag">
                <input  type="text" 
                        placeholder="Type to add" 
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        />
                {query.length > 0 ? <ul>
                    <li onClick={() => {
                        debugger
                        create()}}>Create tag {query}</li>
                    {result.map(tag => {
                        return(
                            <li key={tag.id}
                                onClick={() => addTagging(tag)}>
                                {tag.name} ({tag.notes.length})
                            </li>
                        )
                    })}
                </ul> : null}
            </li>
        </ul>
    )
}