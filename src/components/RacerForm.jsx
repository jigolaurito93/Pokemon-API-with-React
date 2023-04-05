import React from 'react'

export default function RacerForm({ updateRacers }) {

    const handleFormSubmit = event => {
        event.preventDefault();
        let season = event.target.season.value;
        let round = event.target.round.value;
        updateRacers(season, round);
        event.target.season.value = '';
        event.target.round.value = '';
    };

    return (
        <form action="" className='row my-3' onSubmit={handleFormSubmit}>
            <div className="col-12 col-md-5">
                <input type="text" name="round" className="form-control" placeholder='Enter Pokemon Name' />
            </div>
            <div className="col">
                <input type="submit" value="Search" className="btn btn-success w-30" />
            </div>
        </form>
    )
}
