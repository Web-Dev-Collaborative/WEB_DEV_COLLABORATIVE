import React from 'react'

export default function Loading() {
    return(
        <div className="loading">
            <div>
                <div className="loader"></div>
                <img src={window.logo} alt="WhateverNote"/>
                <p>Getting started...</p>
            </div>
        </div>
    )
}