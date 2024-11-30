import React from 'https://cdn.skypack.dev/react@latest';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@latest';

import Header from "./Header"
import MainContent from './MainContent';
import Footer from './Footer';

const App = () => (
    <main>
        <Page />
    </main>
);

function Page() {
    return (
        <>
            <Header />
            <MainContent/>
            <Footer/>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
