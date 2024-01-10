import React from "react";

function App() {
    const [count, setCount] = React.useState(0)

    function onClick() {
        setCount(count + 1)
    }

    return (
        <>
            <h1>Hello React + Webpack</h1>
            <h3>Count: {count}</h3>
            <button onClick={onClick}>Increment</button>
        </>
    )
}

export default App