import { connect } from 'react-redux'
import { fetchTag, fetchTags } from '../../../actions/tag_actions';
import { setFilter } from '../../../actions/filter_actions';
import TagsSidebar from './tags_sidebar';

const mSTP = state => {
    return({
        tags: Object.values(state.entities.tags)
    })}

const mDTP = dispatch => ({
    fetchTags: () => dispatch(fetchTags()),
    setFilter: filter => dispatch(setFilter(filter)),
    fetchTag: id => dispatch(fetchTag(id))
})

export default connect(mSTP, mDTP)(TagsSidebar)