import React, { useEffect, useRef } from 'react';
import { Card, Button, Divider } from 'antd';
import styled from 'styled-components';
import '../App.css'; // Import the CSS file

// Import custom SVG icons
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg';
import { ReactComponent as EmailIcon } from '../assets/email.svg';
import { ReactComponent as KaggleIcon } from '../assets/Kaggle icon.svg';

const CardTitle = styled.h1`
  font-size: 2.75rem;
  align-self: center;
  text-align: center; /* Center the title text */
  font-family: 'Poppins', sans-serif; /* Apply the Poppins font */

`;

const IconWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center; /* Center the icons horizontally */
  align-items: center;

  & > a {
    font-size: 1.5rem;
    color: inherit;
    display: flex;
    align-items: center;
  }

  & > a:hover svg {
    fill: #1890ff; /* Change color on hover */
  }

  svg {
    width: 24px;
    height: 24px;
    transition: fill 0.3s;
  }
`;

const ScheduleButton = styled(Button)`
  margin-top: 16px;
  background-color: #8866de;
  color: #ffffff;
  border: none;
  border-radius: 18px;
  display: flex;
  justify-content: center; /* Center the button horizontally */
  align-items: center;

  &:hover {
    background-color: #c4d6ff;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center all content vertically */
  text-align: center; /* Center the text */
`;

const WelcomeCard = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const handleMouseOver = (event) => {
      let iteration = 0;
      const interval = setInterval(() => {
        event.target.innerHTML = event.target.innerHTML
          .split("")
          .map((letter, index) => {
            if (index < Math.floor(Math.random() * iteration)) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (event.target.innerHTML === event.target.dataset.value) {
          clearInterval(interval);
        }

        iteration += 1;
      }, 30);
    };

    const nameElement = nameRef.current;
    nameElement.addEventListener("mouseover", handleMouseOver);

    return () => {
      nameElement.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(styleLink);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(styleLink);
    };
  }, []);

  const handleScheduleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/avdhootpatil245/getting-started' });
    }
  };

  return (
    <Card bordered={false} hoverable={true} style={{ height: '100%', alignItems: 'center', borderRadius: '18px', background: '#FFFDE7' }} className="drop-in">
      <CardContent>
        <CardTitle ref={nameRef} data-value="Avdhoot Patil">Avdhoot Patil</CardTitle>
        <img
          src={require('../assets/memoji-emoji-handsome-smiling-man-white-background_826801-6987-removebg-preview.png')}
          alt="Avdhoot Patil"
          style={{ width: '65%', borderRadius: '6px', marginBottom: '12px' }}
        />
        <p className="typed-out drop-in-2">
          <span>Another Internet Guy <br /></span>
          Hi there! I'm{' '}
          <span data-value="Avdhoot Patil">
            Avdhoot Patil
          </span>
          , a Data Scientist and Software Engineer. Dive into my projects,
          skills, and experiences to learn more about my journey.
        </p>
        <Divider>Connect with me on my socials</Divider>
        <IconWrapper className="drop-in-2">
          <a href="https://www.linkedin.com/in/avdhoot-patil" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/avdhoot0303" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="mailto:avdhootpatil245@gmail.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </a>
          <a href="https://discord.com/users/your-discord" target="_blank" rel="noopener noreferrer">
            <KaggleIcon />
          </a>
        </IconWrapper>
        <Divider>OR</Divider>
        <ScheduleButton onClick={handleScheduleClick}>Schedule time with me</ScheduleButton>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
