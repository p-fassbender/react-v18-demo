// default declaration for functional components
// function Greet() {
//     return (
//         <h1>
//             Hello, React!
//         </h1>
//     );
// }

// Alternative way to declare the functional component using an arrow statement
// const Greet = () => {
//     return (
//         <h1>
//             Hello, React!
//         </h1>
//     );
// }

// export default Greet

// Named export and must be imported with the same name
// export const Greet = () => {
//     return (
//         <h1>
//             Hello, React!
//         </h1>
//     );
// }

export const Greet = (props) => {
    return (
        <>
            <h1>
                Hello, {props.name}! aka {props.heroName}
            </h1>
            {props.children}
        </>
    );
}

// export const Greet = ({ name, heroName }) => {
//     return (
//         <h1>
//             Hello, {name}! a.k.a. {heroName}
//         </h1>
//     );
// }