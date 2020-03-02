import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Modal.css';

const Modal = () => {

    const buffer = useSelector(state => state.buffer);
    const show = useSelector(state => state.showModal);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [filled, setFilled] = useState(false);

    const fileInput = useRef(null);

    const dispatch = useDispatch();
    dispatch({ type: 'TEST', payload: "HERE IS PAYLOAD!" });

    useEffect(() => {
        if (!buffer.img) {
            setFilled(false);
        }
    }, [ buffer ]);

    const uploadImage = (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.result && localStorage) {
                dispatch({
                    type: 'UPLOAD_PICTURE',
                    payload: reader.result
                });
                setFilled(true);
            } else {
                alert();
            }
        }
        reader.readAsDataURL(event.target.files[0]);
    }

    const showImage = () => {
        if (!filled) {
            return(
                <div className="input-box"
                    onClick = {() => { fileInput.current.click() }}>
                    <i>FILE</i>
                    <span>select an image file to upload here</span>
                    <label>
                        <input type="file"
                        ref={fileInput}
                        id="myfile"
                        onChange = {(e) => uploadImage(e)}/>
                    </label>
                </div>
            )
        } else {
            let image = buffer.img;
            return (
                <div className="img-container">
                    <img className='image' src={image} alt='...'/>
                    <button className="img-btn"
                    onClick={() => {
                        setFilled(false);
                    }}>Delete</button>
                </div>
            )
        }
    }

    const saveNewCard = () => {
        
        let card = {
            id: null,
            title: title,
            desc: desc,
            image: buffer.img
        };

        if (!card.image || !card.title || !card.desc) {
            !card.image && alert("Choose image for your c card!");
            !card.title && alert("Enter title for your c card!");
            !card.desc && alert("Enter description for your c card!");
            
        } else {
            setFilled(false);
            setDesc("");
            setTitle("");

            dispatch({
                type: 'SAVE_CARD',
                payload: card
            });
        }
    }

    if (!show) {
        return null;
    } else {
        return (
            <div className='modal-container'>
                <div className="modal">
                    <div className='row end'>
                        <button 
                            className="top-button" 
                            onClick = {() => {dispatch({ type: 'TOGGLE_MODAL'})}}>Close</button>
                        <button 
                            className="top-button" 
                            onClick = {() => {dispatch({ type: 'CLEAR_DATA'})}}>Clear</button>
                    </div>
                    <div className="modal-info card-list">
                        <h1 className = "modal-header">Add new</h1>

                        {showImage()}

                        <div className="input-group">
                            <label className="label">Title</label>
                            <input className="modal-input input" 
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value) }/>
                        </div>

                        <div className="input-group">
                            <label className="label">Description</label>
                            <textarea rows="3" className="modal-textarea input"
                                placeholder="Enter description"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}/>
                        </div>

                        <div className='row center'>
                            <button 
                                className="button button-save"
                                onClick = {() => {saveNewCard()}}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;