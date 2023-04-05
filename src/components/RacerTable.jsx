import React from 'react'

export default function RacerTable({ racers }) {
    const tableHeaders = ["#", 'Name', 'Height', 'Weight'];

    return (
        <table className="table table-primary table-striped">
                <thead>
                    <tr>
                        {tableHeaders.map(header => <th key={header}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {racers.map( racer => (
                        <tr key={racer.position}>
                            <th>{racer.position}</th>
                            <th>{racer.Driver.givenName}</th>
                            <th>{racer.Driver.familyName}</th>
                            <th>{racer.points}</th>
                            <th>{racer.wins}</th>
                            <th>{racer.Driver.nationality}</th>
                            <th>{racer.Constructors[0].name}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
    )
}
