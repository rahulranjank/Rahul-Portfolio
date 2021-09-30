import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 0.001rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 90% center;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      margin-top: 0rem;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Gumti No 2, Mogal Bazar,Munger , Bihar</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Munger,+Bihar+811201/@25.371047,86.4559337,14z/data=!3m1!4b1!4m5!3m4!1s0x39f1eee66aa3ebc7:0x1bcf4fdc391adc06!8m2!3d25.3707993!4d86.4733903"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
