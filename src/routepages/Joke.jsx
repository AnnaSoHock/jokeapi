import React from "react";

const Joke = () => {
    const [items, setItems] = React.useState([]);
    const [DataLoaded, setDataLoaded] = React.useState(false);

    const fetchNewJoke = () =>
    {
      fetch("https://icanhazdadjoke.com/", 
      {headers: {'Accept' : 'application/json'}})
      .then((res) => res.json())
      .then((json) => {
        setItems([json]);
      });
    } 

    React.useEffect(() => {
        fetchNewJoke();
        setDataLoaded(true);
    }, []);

    if (!DataLoaded) {
        return (
            <div>
                <h1> Data is still loading! </h1>
            </div>
        );
    }

    return(
        <div className="joke">
            <h1> Dad joke of the day:</h1>
            {items.map((item) => (
                <div key={item.id} className="main">
                    <p><b>Joke:</b> {item.joke}</p>
                    <br/>
                    <button onClick={fetchNewJoke}>Click me for a new Dad Joke</button>
                </div>
            ))}
        </div>
    )
}

export default Joke;
