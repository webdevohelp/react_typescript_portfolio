import React, { useState } from 'react';

const users = [
    { name: 'Shubhang', age: 28 },
    { name: 'Pichku', age: 27 },
    { name: 'Bhalu', age: 26 },
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<
        { name: string; age: number } | undefined
    >();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        console.log(foundUser);
        setUser(foundUser);
    };

    return (
        <div>
            User Search
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Find User</button>
            <div> {user && user.name}</div>
            <div> {user && user.age}</div>
        </div>
    );
};

export default UserSearch;
