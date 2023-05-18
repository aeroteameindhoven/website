import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { HeadContent } from "../components/HeadContent";
import Layout from "../components/Layout";
import "../components/styles/join.scss";
import { StaticImage } from "gatsby-plugin-image";
import Carousel from "../components/3d-carousel/Carousel";
export function Head() {
  return <HeadContent title="Join" />;
}

function PostHeader() {
  return (
    <div className="join-page">
      <div className="photo-container">
        <h1 className="join-aero">JOIN AERO TEAM.</h1>
        <StaticImage src="../images/join/teampicture.jpg" alt="group picture" className="photo" loading="eager" />
      </div>
      <Container>
        <div className="join-header">
          <div>
            Do you want to be part of Eindhoven&apos;s big, ambitious drone team? Do you want to work in a team where
            students from various study programs come together to create solutions for aerial transportation? You can
            apply by filling in our interest form!
          </div>
          <p>
            Within Aero Team Eindhoven you have the possibility and flexibility to choose how you want to contribute to
            our cause. With positions ranging from part-time options next to your studies to opting for a gap year as a
            board member, you have the flexibility to see what fits you and the team best. Like every other team, Aero
            requires a management subteam responsible for project management, finance, partners, etc. Are you into
            engineering? Aero has a wide variety of engineering teams, ranging from software to electronics and
            hardware.
          </p>

          <div className="button-wrapper">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSch1kiTE33zF5nW2WTz0WfSersjoqQcEDsEOiFNQncdMoM-Qw/viewform"
              target="_blank"
              rel="noreferrer"
              className="apply-button"
            >
              Apply now!
            </a>
          </div>
        </div>
        <div className="quotes">
          <h1>Member spotlight</h1>
          <Carousel slides={slides} interval={7000} />
        </div>
        <div>
          <h1>Vacancies</h1>
          <Row>
            {vacancies.map((v) => (
              <Col key={v.title} md={12} lg={4} className="vacancy">
                {v.image}

                <div className="overlay">
                  <div className="text">{v.title}</div>
                  <div className="extra">{v.text}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}

/**
 * Join page
 */
export default function Join() {
  return <Layout postHeader={<PostHeader />} />;
}

const vacancies = [
  {
    title: "Board 3",
    text: "As a management member, you are responsible for coordinating a big team together with a group of passionate and diverse students. Here you can tackle a variety of exciting problems and have the possibility to take on several different roles.",
    image: (
      <StaticImage
        src="../images/join/vacancy/management.png"
        alt="Aero team member performing management tasks"
        objectFit="cover"
        className="image"
      />
    )
  },
  {
    title: "Engineering",
    text: "As an engineer you are in charge of researching, designing and developing technology for the future of aerial transportation. You will be working together in a multidisciplinary team of students of various backgrounds towards a single goal.",
    image: (
      <StaticImage
        src="../images/join/vacancy/engineer.jpg"
        alt="Aero team member performing engineering tasks"
        objectFit="cover"
        className="image"
      />
    )
  },
  {
    title: "Software & AI",
    text: "As a member of the Software and AI team at Aero Team Eindhoven, your role would be critical in designing and developing the software and algorithms that enable our drones to fly autonomously, using technologies such as machine learning and computer vision. ",
    image: (
      <StaticImage
        src="../images/join/vacancy/marketing.jpg"
        alt="Aero team member performing programming tasks"
        objectFit="cover"
        className="image"
      />
    )
  }
];

const slides = [
  <StaticImage
    src="../images/join/card/bram.png"
    alt="Quote from Bram Schut: Student teams are a good place to develop yourself in skills not taught  in technical studies, like project management, presenting, getting funds, and motivating people!"
    key="bram"
    aspectRatio={16 / 9}
    objectFit="contain"
    objectPosition="50% 50%"
  />,
  <StaticImage
    src="../images/join/card/isa.png"
    alt="Qoute from Isa Dantuma: It is awesome to see that our hard work paid off and that this VR project is now ready to go to the next stage and be used in actual research!"
    key="isa"
    aspectRatio={16 / 9}
    objectFit="contain"
    objectPosition="50% 50%"
  />,
  <StaticImage
    src="../images/join/card/zach.png"
    alt="Quote from Zach Kohnen: Student teams such as Aero are the perfect places to apply yourself. We have access to tools, materials, and knowledge that are harder for an average student to come by."
    key="zach"
    aspectRatio={16 / 9}
    objectFit="contain"
    objectPosition="50% 50%"
  />,
  <StaticImage
    src="../images/join/card/bianca.png"
    alt="Qoute from Bianca Eni: Working in Aero has been a very fun and useful experience. Being in the PR team gives me the creative freedom that is sometimes missing in my technical study."
    key="bianca"
    aspectRatio={16 / 9}
    objectFit="contain"
    objectPosition="50% 50%"
  />,
  <StaticImage
    src="../images/join/jai-card.png"
    alt="Qoute from Jai Wientjes: It's amazing to see how you can take an idea and turn it into a real, physical product in just one year."
    key="jai"
    aspectRatio={16 / 9}
    objectFit="contain"
    objectPosition="50% 50%"
  />
];
