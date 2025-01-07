import { ChildComponent } from "./ChildComponent"

export const ParentComponent = () => {
    const greetParent = (childName) => {
        alert(`Hello ParentComponent from ${childName}`)
    }

    return (
        <>
            <ChildComponent greetHandler={greetParent} />
        </>
    )
}