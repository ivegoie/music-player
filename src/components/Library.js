import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  libraryStatus,
  isPlaying,
  songs,
  setCurrentSong,
  audioRef,
  setSongs,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""} `}>
      <h2 className="linear-text">Library Songs</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
