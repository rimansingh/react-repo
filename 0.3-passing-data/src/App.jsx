import React from 'https://cdn.skypack.dev/react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';


export default function App() {

    const [userName, setUserName] = React.useState("Joe Bobe");
    return (
        <div>
            <Header userName={userName}/>
            <Main userName={userName}/>
        </div>
    );
}