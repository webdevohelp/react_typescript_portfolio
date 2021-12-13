import React from 'react';

//An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.
//we defines the types of values passed in props here in interface
interface ChildProps {
    color: string;
    onClick: () => void;
}

//here we are using interface to pass the types info by using :ChildProps
export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me</button>
        </div>
    );
};

export const ChildAsFC: React.FC<ChildProps> = ({
    color,
    onClick,
    children,
}) => {
    return (
        <div>
            {color}
            {' ' + children}
            <button onClick={onClick}>Click me</button>
        </div>
    );
};
