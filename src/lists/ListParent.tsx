import React from 'react';
import ListChild from './ListChild';

const data = [
    {
        id: 1,
        name: 'Cat',
    },
    {
        id: 2,
        name: 'Dog',
    },
    {
        id: 3,
        name: 'Bat',
    },
];

const ListParent = () => {
    return (
        <div>
            <ListChild data={data} id="cat" />
        </div>
    );
};

export default ListParent;
