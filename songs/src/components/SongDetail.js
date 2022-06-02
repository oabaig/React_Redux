import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    return (
    <div>
        { song? 
            <React.Fragment>
                <h3>Details for:</h3>
                <p>
                    Title: { song.title }
                    <br />
                    Duration: { song.duration }
                </p>
            </React.Fragment> : 'Select a song'
        }
        
    </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);