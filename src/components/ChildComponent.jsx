export const ChildComponent = (props) => {
    return (
        <>
            <button onClick={() =>props.greetHandler('ChildComponent')}>Greet Parent</button>
        </>
    )
}
