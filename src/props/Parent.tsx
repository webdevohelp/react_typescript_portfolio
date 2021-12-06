import { ChildAsFC } from './Child';
const Parent = () => {
    return (
        <ChildAsFC
            color="red"
            onClick={() => {
                console.log('Clicked');
            }}
        >
            adawdaw
        </ChildAsFC>
    );
};
export default Parent;
