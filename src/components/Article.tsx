import Articlenav from './Articlenav';
import { Container, Row, Col } from 'react-bootstrap';
import Post from './posts/Post';
import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import p from "../assets/p.jpg";
import q from "../assets/q.jpg";
import Meetup from './posts/Meetup';
import Job from './posts/Job';
import SideBar from './SideBar';

function Article() {
  return (
    <Container>
      <div className="d-none d-md-block p-3">
        <Articlenav />
      </div>
      <Row>
        <Col md={9}>
          <div>
            <Post
              mainImage={a}
              mainAlt="Nature"
              profileImage={p}
              profileAlt="Profile"
              articleType="✍️ Article"
              articleTitle="What if famous brands had regular fonts? Meet RegulaBrands!"
              authorName="Sarthak Karma"
              views="1.4k"
              content="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
            />
            <Post
              mainImage={b}
              mainAlt="Nature"
              profileImage={q}
              profileAlt="Profile"
              articleType="🔬️ Education"
              articleTitle="Tax Benefits for Investment under National Pension Scheme launched by Government"
              authorName="Sarah West"
              views="1.4k"
              content="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
            />
            <Meetup />
            <Job />
          </div>
        </Col>
        <Col md={3}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
}

export default Article;
