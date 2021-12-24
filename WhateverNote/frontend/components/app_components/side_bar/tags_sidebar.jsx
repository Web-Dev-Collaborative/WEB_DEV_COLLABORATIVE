import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { fetchTag } from '../../../actions/tag_actions';

export default function TagSidebar({fetchTags, tags, setFilter, props}) {
    useEffect(fetchTags, [])
    const history = useHistory();

    const selectFilter = (filter) => {
        setFilter(filter);
        fetchTag(filter);
        history.push('/app/notes');
    }
    
    const listTags = () => {
        return tags.map(tag => {
            return (<li key={tag.id}
                        onClick={() => selectFilter(tag.id)}>
                <i className="fas fa-tag"></i>{tag.name}
            </li>)
        })
    }
    
    return(
        <ul className="tags-sidebar">
            { listTags() }
        </ul>
    )
}