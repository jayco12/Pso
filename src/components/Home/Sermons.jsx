import React, { useState, useEffect } from "react";
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
export const Sermons = () => {
  const [activeLink, setActiveLink] = useState('/');
  const navigate = useNavigate();

  return (
    <section className="sermons" id="sermons">
    <>
    <h1>Sermons</h1>
    <p>Learn more about intimacy and work with God by listening to sermons</p>
    <a href="https://www.youtube.com/@oduyeboolusegunfulfilmenti3721"> <Button
              variant="outline-light"
              className={`waitlist-button ${activeLink === 'waitlist' ? 'active' : ''}`}
              onClick={() => {}}
            >
              More videos
            </Button></a>
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
