import React from 'react';
import Header from '../../Shared/Header';
import Background from './Background';
import Homeservice1 from './HomeService/Homeservice1';
import Homeservice2 from './HomeService/Homeservice2';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Background></Background>
            <Homeservice1></Homeservice1>
            <Homeservice2></Homeservice2>
        </div>
    );
};

export default Home;