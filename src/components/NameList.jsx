export const NameList = () => {
    const names = ['Bruce', 'Clark', 'Diana']
    return (
        <>
            {
                names.map((name) => {
                    return (
                        <h2 key={name}>{name}</h2>
                    )
                })
            }
        </>
    )
}