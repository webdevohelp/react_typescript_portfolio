import { ChildAsFC } from './Child';

const Parent = () => {
    return (
        <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
            Cat Jumps
        </ChildAsFC>
    );
};

export default Parent;
