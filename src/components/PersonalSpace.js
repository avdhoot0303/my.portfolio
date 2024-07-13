import React from 'react';
import styled from 'styled-components';
import { List, Avatar, Image, Typography, Divider } from 'antd';
import image1 from '../assets/images/Photo 2192.jpg';
import image2 from '../assets/images/Manhattan IMG 1585.jpg';
import image3 from '../assets/images/Photo 0927.jpg';
import image4 from '../assets/images/Photo 1663.jpg';
import image5 from '../assets/images/Photo 1898.jpg';


const { Title } = Typography;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PhotoGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const MusicPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align the Spotify player */
  gap: 16px;
`;

const photos = [
  image1, image2, image3, image4, image5
];

const PersonalSpace = () => (
  <Container>
    <Divider>
      <Title level={2}>Some captures by me</Title>
    </Divider>
    <PhotoGallery>
      {photos.map((src, index) => (
        <Image key={index} src={src} width={150} height={150} />
      ))}
    </PhotoGallery>

    <Divider>
      <Title level={2}>My fuel for work</Title>
    </Divider>
    <MusicPlaylist>
    <iframe 
      style={{borderRadius:"12px" }}
      src="https://open.spotify.com/embed/playlist/4OwLihqZqZyozQMh1iiRs5?utm_source=generator" width="100%" height="152" 
      frameBorder="0" 
      allowfullscreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1EIVoqS75RSJzp?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      
    </MusicPlaylist>
  </Container>
);

export default PersonalSpace;
