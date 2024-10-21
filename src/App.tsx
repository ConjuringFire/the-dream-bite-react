import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import '@fontsource/roboto';
import Home from './pages/Home';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';

const App: React.FunctionComponent = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <div>
                <Home />
            </div>
        </div>
    );
};

export default App;
