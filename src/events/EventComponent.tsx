import React from 'react';

const EventComponent: React.FC = () => {
    
    //Events supported by React are : Clipboard Events Composition Events,Keyboard Events, Focus Events, Form Events, Generic Events,Mouse Events, Pointer Events,    Selection Events, Touch Events, UI Events, Wheel Events, Media Events, Image Events, Animation Events, Transition Events, Other Events
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event);
    };

    return (
        <div>
            <input onChange={onChange} />
            <div draggable="true" onDragStart={onDragStart}>
                Drag me
            </div>
        </div>
    );
};

export default EventComponent;
