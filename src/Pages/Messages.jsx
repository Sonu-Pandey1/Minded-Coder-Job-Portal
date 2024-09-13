import "./Messages.scss"
import EmailVerification from "../Components/EmailVerifaction"
import Sidebar from "./Sidebar"
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Messages() {
  return (
    <div className="container-fulid message-wrapper">
      <div className="row g-0">
        <div className="col-2 bg-white shadow-lg ">
          <div className="bg-info">
            <Sidebar />
          </div>
        </div>
        <div className="col-10">
          <main className="message-container py-5 px-5 ">
            <EmailVerification />
            <div className="message mt-5">
              <Container fluid className="bg-white">
                <Row className="h-100 justify-content-between ">
                  {/* Messages Section */}
                  <Col md={7} className="d-flex align-items-center justify-content-center shadow" style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e5e5' }}>
                    <div className=" text-center">
                      <p style={{ color: '#c0c0c0', fontSize: '1.2rem' }}>No Messages</p>
                    </div>
                  </Col>

                  {/* Users Section */}
                  <Col md={4} className="d-flex flex-column shadow" style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e5e5', marginLeft: '15px' }}>
                    <InputGroup className="my-4 ">
                      <InputGroup.Text><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></InputGroup.Text>
                      <FormControl
                        className=""
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-bar"
                      />
                    </InputGroup>
                    <div className="text-center" >
                      <p style={{ color: '#c0c0c0', fontSize: '1.2rem' }}>No Users</p>
                    </div>
                  </Col>
                </Row>
              </Container>

            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Messages
