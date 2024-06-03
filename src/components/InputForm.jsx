import React, { useRef } from 'react';

const InputForm = () => {
    const nameRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = () => {
        const newUser = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
        };

        console.log(newUser);
    };

    return (
        <div>
            <div>
                <label>
                    Name:
                    <input type="text" ref={nameRef} />
                </label>
            </div>
            <div>
                <label>
                    Username:
                    <input type="text" ref={usernameRef} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" ref={emailRef} />
                </label>
            </div>
            <button onClick={handleSubmit}>Создать</button>
        </div>
    );
};

export default InputForm;

