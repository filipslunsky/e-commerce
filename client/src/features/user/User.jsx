import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFirstName, updateLastName, updateEmail, toggleFirstName, toggleLastName, toggleEmail } from "./state/slice";
import { useEffect } from "react";

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

    useEffect(() => {
        console.log(user);
    }, []);

    return (
        <>
            <h2>User</h2>
            {
                !user.editFirstName
                ?
                <div>
                    <p>{user.firstName}</p>
                    <button onClick={handleToggleFirstName}>edit</button>
                </div>
                :
                <div>
                    <input type="text" ref={firstNameRef} defaultValue={user.firstName} name="firstName" />
                    <button onClick={handleToggleFirstName}>cancel</button>
                    <button onClick={handleUpdateFirstName}>save</button>
                </div>
            }
            {
                !user.editLastName
                ?
                <div>
                    <p>{user.lastName}</p>
                    <button onClick={handleToggleLastName}>edit</button>
                </div>
                :
                <div>
                    <input type="text" ref={lastNameRef} defaultValue={user.lastName} name="lastName" />
                    <button onClick={handleToggleLastName}>cancel</button>
                    <button onClick={handleUpdateLastName}>save</button>
                </div>
            }
            {
                !user.editEmail
                ?
                <div>
                    <p>{user.email}</p>
                    <button onClick={handleToggleEmail}>edit</button>
                </div>
                :
                <div>
                    <input type="text" ref={emailRef} defaultValue={user.email} name="email" />
                    <button onClick={handleToggleEmail}>cancel</button>
                    <button onClick={handleUpdateEmail}>save</button>
                </div>
            }
        </>
    );
}
 
export default User;