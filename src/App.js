import './App.scss';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import React, {useEffect, useState} from "react";
import dayImage from "../src/static/images/goldenBridge.jpeg";
import nightImage from "../src/static/images/nightTime.jpg";
import santaMonicaDay from "../src/static/images/santaMonica.jpg";
import caliNightSky from "../src/static/images/caliNightSky.jpg";
import {useDispatch, useSelector} from "react-redux";
import {dayNightIdentifier} from "./store/features/DayTimeBlnSlice/dayTimeBlnSlice";
import AboutMeInDepth from "./components/AboutMeInDepth";
import SocialMedia from "./components/SocialMedia";
import RollOver from "./components/RollOver";
import {firstRunIdentifier} from "./store/features/initialRunCompBln/initialRunCompBln";

function App() {

    const [isDay, setIsDay] = useState(false);
    const dispatch = useDispatch();
    const canWeRun = useSelector((state) => state.isItFirstRun.isItFirstRun);

    useEffect(() => {
        const currentTime = new Date().getHours();
        setIsDay(currentTime >= 6 && currentTime < 19);
        dispatch(dayNightIdentifier(isDay));
        let timer;
        if(canWeRun){
             timer = setTimeout(() => {
                dispatch(firstRunIdentifier(false));
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [isDay]);

    return (
        <>
            {!canWeRun ? <>
                <div id="appContent" style={{backgroundImage: `url(${isDay ? dayImage : nightImage})`}}>
                    <NavBar/>
                    <HomePage/>
                </div>
                <div id="appContent" style={{backgroundImage: `url(${isDay ? santaMonicaDay : caliNightSky})`}}>
                    <AboutMeInDepth/>
                    <SocialMedia/>
                </div>
            </> : <RollOver/>
            }
        </>
    );
}

export default App;
