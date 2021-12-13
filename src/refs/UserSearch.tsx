import React, { useState, useRef, useEffect } from 'react';

const UserSearch: React.FC = () => {
    const users: [
        { name: string; age: number },
        { name: string; age: number },
        { name: string; age: number }
    ] = [
        { name: 'Shubhang', age: 28 },
        { name: 'cat', age: 20 },
        { name: 'dog', age: 10 },
    ];
    // to set type of ref we have to trll typescript about the element to which we are going to attach ref
    // here useRef is connected to input element so we set type to HTMLInputELement
    // to see the list of elements ctrl click on HTMLInputElement and see the list
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [name, setName] = useState<string>('');
    const [user, setUser] = useState<
        { name: string; age: number } | undefined
    >();

    useEffect(() => {
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus();
    }, []);

    const searchName = () => {
        const foundUser: any = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    };

    return (
        <div>
            User Search
            <br />
            <input
                ref={inputRef}
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <button onClick={searchName}>Search</button>
            {user && user.name}
            {user && user.age}
        </div>
    );
};

export default UserSearch;
