import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/Rahul_About_page_IMG.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  const cvLink = `https://drive.google.com/file/d/1almTthJfnec9i5zG4rlyH7pEJCzTj3BB/view?usp=sharing`;
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Rahul Ranjan</span>
              </p>
              <h2 className="about__heading">A UI developer</h2>
              <div className="about__info">
                <PText>
                  {`I am from Munger,Bihar. A place of beauty and
                  nature. Since my childhood, i love art and design. I always
                  try to design stuff with my unique point of view. I also love
                  to create things that can be usefull to others.`}
                  <br /> <br />
                  {`Coding is also an art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  am enjoying the process a lot.`}
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink={cvLink} />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Saraswati Vidya Mandir, Munger']}
              />
              <AboutInfoItem
                title="College(12th)"
                items={['Park Mount Public School, Patna']}
              />
              <AboutInfoItem
                title="University(BE)"
                items={['M.B.M Engineering College, Jodhpur']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'React',
                  'Redux',
                  'Thunk',
                  'React Query',
                  'Redux Tool Kit',
                  'TypeScript',
                ]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Basic Express']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2017 - 2019"
                items={['System Engineer The Home Depot']}
              />
              <AboutInfoItem
                title="2019-2022"
                items={['Front end developer at American Express']}
              />
              <AboutInfoItem
                title="2022-present"
                items={['Front end developer at Danske bank']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
