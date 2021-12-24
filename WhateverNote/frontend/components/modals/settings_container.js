import { connect } from "react-redux"
import Settings from "./settings"
const { closeModal } = require("../../actions/modal_actions")
import { updateUser } from '../../actions/user_actions'


const mSTP = state => ({
    user: state.entities.users[state.session.id]
})

const mDPT = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    updateUser: user => dispatch(updateUser(user))
})

export default connect(mSTP, mDPT)(Settings)