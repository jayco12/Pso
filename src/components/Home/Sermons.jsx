import React, { useState, useEffect } from "react";
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

function Sermons() {
 

  return (
    <section className="sermons" id="sermons">
    <>
      <YouTubePlaylist
        apiKey="AIzaSyBey6gSLjkD5yhp7hIANQTotVnCj6fJ4Wk"
        playlistId="PLQ6pv5BbE-eT2Vf6i07WzapbHb2eqzT14"
        uniqueName="THIS_PLAYLIST_INSTANCE_NAME"
      />
      </>
</section>
  );
}

export default Sermons;
