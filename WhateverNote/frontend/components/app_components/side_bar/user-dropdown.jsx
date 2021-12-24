import React from 'react';

export default function UserDropdown({user, logout, openModal}){
    return(
        <ul className="user-dropdown hidden">
            <h3>ACCOUNT</h3>
            <li>
                <div id="user-info">
                    <i className="fas fa-check"></i>
                    <img src={window[user.user_icon]} alt=""/>
                    <div>
                        <h3>{`${user.first_name} ${user.last_name}`}</h3>
                        <p>{user.email}</p>
                    </div>
                </div>
            </li>
            <li id="settings" onClick={() => openModal("settings")}><p>Settings</p></li>
            <li id="logout" onClick={logout}><p>{`Sign out ${user.first_name} ${user.last_name}`}</p></li>
        </ul>
    )
}