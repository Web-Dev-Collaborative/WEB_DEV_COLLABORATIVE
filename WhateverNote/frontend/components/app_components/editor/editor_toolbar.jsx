import React from 'react';
import {Quill} from 'react-quill';

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
    "lato",
    "open-sans",
    "roboto",
    "amatic",
    "caveat",
    "libre"
];
Quill.register(Font, true);

export const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "script",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "video",
]

export const modules = {
    toolbar: {
        container: "#toolbar",
    }
}

export const MyToolbar = () => (
    <div id='toolbar'>
        <span className="ql-formats">
            <select className="ql-font" defaultValue="open-sans">
                <option value="open-sans">Open Sans</option>
                <option value="lato">Lato</option>
                <option value="roboto">Roboto</option>
                <option value="amatic">Amatic</option>
                <option value="caveat">Caveat</option>
                <option value="libre">Libre</option>
            </select>

            <select className="ql-size" defaultValue="normal">
                <option value="small">Small</option>
                <option value="normal">Normal</option>
                <option value="large">Medium</option>
                <option value="huge">Large</option>
            </select>
        </span>

        <span className="ql-formats">
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
        </span>

        <span className="ql-formats">
            <button className="ql-list" value="ordered" />
            <button className="ql-list" value="bullet" />
            <button className="ql-indent" value="-1" />
            <button className="ql-indent" value="+1" />
        </span>
        
        <span className="ql-formats">
            <select className="ql-align" />
            <select className="ql-color" />
            <select className="ql-background" />
        </span>

        <span className="ql-formats">
            <button className="ql-link" />
            <button className="ql-image" />
            <button className="ql-video" />
        </span>
    </div>
)