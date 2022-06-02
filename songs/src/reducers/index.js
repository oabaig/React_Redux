import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Give It Away', duration: '3:00' },
        { title: 'Shadowbringers', duration: '6:30' },
        { title: 'DAMN', duration: '4:00' },
        { title: 'Runaway', duration: '6:00', }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})