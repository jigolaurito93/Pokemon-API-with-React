import React, { useEffect, useState } from 'react';
import RacerTable from '../components/RacerTable';
import RacerForm from '../components/RacerForm';

export default function RacerDisplay() {

    const [season, setSeason] = useState(2023);
    const [round, setRound] = useState(1);
    const [racers, setRacers] = useState([]);

    useEffect(() => {
        console.log('Hello I am the effect and I have been executed');
        fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                setRacers(racerStandings);
            })
    }, [season, round]);

    const updateRacers = (newSeason, newRound) =>{
        setSeason(newSeason);
        setRound(newRound)
    }

    return (
        <div>
            <h1 className="text-center">Pokemon API {season} {round}</h1>
            <RacerForm updateRacers={updateRacers}/>
            <RacerTable racers={racers} />
        </div>
    )
}
