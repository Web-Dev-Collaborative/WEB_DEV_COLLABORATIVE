import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import NoteInfo from './note_info_container';
import NewNotebookContainer from '../modals/new_notebook_container';
import RenameNotebookContainer from '../modals/rename_notebook_container';
import MoveNoteContainer from './move_note_container';
import SettingsContainer from './settings_container';
import NewTagContainer from './new_tag_container';
import EditTagContainer from './edit_tag_container';

function Modal({modal, closeModal, info}){

    if(!modal) return null;

    let component;
    switch (modal) {
        case 'noteInfo':
            component=<NoteInfo info={info}/>
            break;
        case 'newNotebook':
            component=<NewNotebookContainer />
            break;
        case 'renameNotebook':
            component=<RenameNotebookContainer info={info}/>
            break;
        case 'moveNotebook':
            component=<MoveNoteContainer info={info}/>
            break;
        case 'settings':
            component=<SettingsContainer />
            break;
        case 'newTag':
            component=<NewTagContainer />
            break;
        case 'editTag':
            component=<EditTagContainer tag={info} />
            break;
        default:
            return null;
    }

    return(
        <div className="modal-bckgrd" onClick={closeModal}>
            <div className="modal-ele" onClick={e=>e.stopPropagation()}>{component}</div>
        </div>
    )
}

const mSTP = state => {
    if (state.ui.modal !== null){
        return({
            modal: state.ui.modal.type,
            info: state.ui.modal.info
        })
    }
}

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(Modal))