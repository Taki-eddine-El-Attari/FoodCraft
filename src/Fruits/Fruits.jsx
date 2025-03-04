export default function Fruits({fruits}) {
    /*const display_fruits = function () {
        return fruits.map(function () {
            return <li>{fruits}</li>
        })
    }*/
    const display_fruits = () => fruits.map( fruit => <li>{fruit}</li>)
    return (
        <>
            <h1 className="h1">Fruits</h1>
            <ul>
                {display_fruits()}
            </ul>
        </>
    );
}