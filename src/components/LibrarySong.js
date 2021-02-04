import React from "react";

const LibrarySong = ({
  isPlaying,
  song,
  songs,
  setCurrentSong,
  audioRef,
  id,
  setSongs,
}) => {
  const songSelectHandler = () => {
    // const selectedSong = songs.filter((stateSong) => stateSong.id === song.id); // Better way is to use it what is down there
    setCurrentSong(song);
    // Add Active State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    // Check if the song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""} `}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
