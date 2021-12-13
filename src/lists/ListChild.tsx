import React from 'react';

interface Props {
    data: {
        id: number;
        name: string;
    }[];
    id: string;
}

const ListChild = ({ data, id }: Props) => {
    return (
        <div>
            {id}
            {data.map((data) => {
                return <li key={data.id}>{data.name}</li>;
            })}
        </div>
    );
};

export default ListChild;
