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
  font-family: 'Poppins', extra-bold; /* Apply the Poppins font */
`;

const Highlight = styled.span`
  display: inline-block;
  position: relative;
  &:before {
    content: ' ';
    display: block;
    height: 40%;
    width: 100%;
    margin-left: -3px;
    margin-right: -3px;
    position: absolute;
    background: rgba(187, 181, 249, 0.3);
    transform: rotate(2deg);
    top: -1px;
    // left: -0.5px;
    border-radius: 20% 25% 20% 24%;
    padding: 10px 3px 3px 10px;
  }
`;


const IconWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;

  & > a {
    font-size: 1.5rem;
    color: inherit;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
  }

  & > a:hover {
    transform: scale(2.1);
  }

  & > a:hover svg {
    fill: #1890ff;
  }

  svg {
    width: 34px;
    height: 34px;
    transition: fill 0.1s, transform 0.1s;
  }
`;

const ScheduleButton = styled(Button)`
  margin-top: 16px;
  background-color: #B0DAFF;
  color: black;
  border: none;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
            return letters[Math.floor(Math.random() * 6)];
          })
          .join("");

        if (event.target.innerHTML === event.target.dataset.value) {
          clearInterval(interval);
        }

        iteration += 1;
      }, 18);
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
    <Card bordered={false} hoverable={true} style={{ height: '100%', alignItems: 'center', borderRadius: '18px', background: '#F6F5F2' }} className="drop-in">
      <CardContent>
        <CardTitle ref={nameRef} data-value="Avdhoot Patil">Avdhoot Patil</CardTitle>
        <img
          src={require('../assets/memoji-emoji-handsome-smiling-man-white-background_826801-6987-removebg-preview.png')}
          alt="Avdhoot Patil"
          style={{ width: '65%', borderRadius: '6px', marginBottom: '12px' }}
        />
        <p className="typed-out drop-in-2">
          <h3>Just Another Internet Guy <br /></h3>
          <Highlight>Hi</Highlight> there! I'm{' '}
          <b>Avdhoot Patil</b>, a <b>Data Scientist</b> and <b>Software Engineer</b>. Dive into my projects,
          skills, and experiences to learn more about my journey. <br></br>I'm currently pursuing my <b>Master's in Data Science at Stony Brook University</b>. I'm also working with the <b>Research Foundation for SUNY as a Research Assistant </b> for Stony Brook Medicine's Long COVID project.
        </p>
        <Divider>Connect with me on my socials</Divider>
        <IconWrapper className="drop-in-2">
          <a href="https://www.linkedin.com/in/avdhoot-patil" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/avdhoot0303" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
          <a href="https://www.instagram.com/awwdudee_" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="mailto:avdhootpatil245@gmail.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </a>
          <a href="https://www.kaggle.com/awwdudee" target="_blank" rel="noopener noreferrer">
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
