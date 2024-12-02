import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFirstName, updateLastName, updateEmail, toggleFirstName, toggleLastName, toggleEmail } from "./state/slice";
import editIcon from '../../assets/img/edit-icon.png';
import closeIconBlack from '../../assets/img/icon-close-black.svg';
import './user.css';

const User = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();

    const handleToggleFirstName = () => {
        dispatch(toggleFirstName());
    };

    const handleToggleLastName = () => {
        dispatch(toggleLastName());
    };

    const handleToggleEmail = () => {
        dispatch(toggleEmail());
    };

    const handleUpdateFirstName = (firstName) => {
        dispatch(updateFirstName({firstName: firstNameRef.current.value}));
        dispatch(toggleFirstName());
    };

    const handleUpdateLastName = (lastName) => {
        dispatch(updateLastName({lastName: lastNameRef.current.value}));
        dispatch(toggleLastName());
    };

    const handleUpdateEmail = (email) => {
        dispatch(updateEmail({email: emailRef.current.value}));
        dispatch(toggleEmail());
    };

    return (
        <>
            <div className="mainUserContainer">
                <div className="userContainer">
                    <h2 className="infoHeader">User Information</h2>
                    <div>
                        {
                            !user.editFirstName
                            ?
                            <div className="userItemContainer">
                                <p className="firstName">{user.firstName}</p>
                                <button className="userEditButton" onClick={handleToggleFirstName}><img className="editIcon" src={editIcon} /></button>
                            </div>
                            :
                            <div className="userItemContainer">
                                <input className="userInput" type="text" ref={firstNameRef} defaultValue={user.firstName} name="firstName" />
                                <button className="userCancelButton" onClick={handleToggleFirstName}><img className="closeIconBlack" src={closeIconBlack} /></button>
                                <button className="userOkButton" onClick={handleUpdateFirstName}>OK</button>
                            </div>
                        }
                    </div>
                    <div>
                        {
                            !user.editLastName
                            ?
                            <div className="userItemContainer">
                                <p className="lastName">{user.lastName}</p>
                                <button className="userEditButton" onClick={handleToggleLastName}><img className="editIcon" src={editIcon} /></button>
                            </div>
                            :
                            <div className="userItemContainer">
                                <input className="userInput" type="text" ref={lastNameRef} defaultValue={user.lastName} name="lastName" />
                                <button className="userCancelButton" onClick={handleToggleLastName}><img className="closeIconBlack" src={closeIconBlack} /></button>
                                <button className="userOkButton" onClick={handleUpdateLastName}>OK</button>
                            </div>
                        }
                    </div>
                    <div>
                        {
                            !user.editEmail
                            ?
                            <div className="userItemContainer">
                                <p className="email">{user.email}</p>
                                <button className="userEditButton" onClick={handleToggleEmail}><img className="editIcon" src={editIcon} /></button>
                            </div>
                            :
                            <div className="userItemContainer">
                                <input className="userInput" type="text" ref={emailRef} defaultValue={user.email} name="email" />
                                <button className="userCancelButton" onClick={handleToggleEmail}><img className="closeIconBlack" src={closeIconBlack} /></button>
                                <button className="userOkButton" onClick={handleUpdateEmail}>OK</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default User;