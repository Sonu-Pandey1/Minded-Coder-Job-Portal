import EmailVerification from "../Components/EmailVerifaction";
import "./Packages.scss";
import Sidebar from "./Sidebar";
import { Card, Button, Row, Col } from "react-bootstrap";

function Packages() {
  const plans = [
    {
      name: "Basic Package",
      price: "$150",
      description: "Ultimate Choice",
      features: [
        { key: "Job Posting", value: "10" },
        { key: "Featured Job", value: "5" },
        { key: "Job Displayed", value: "30/days" },
        { key: "Premium Support", value: "24/7" },
      ],
      buttonText: "Get Started",
      buttonVariant: "success",
    },
    {
      name: "Normal Package",
      price: "$50",
      description: "Contact for Enterprise",
      features: [
        { key: "Job Posting", value: "35" },
        { key: "Featured Job", value: "24" },
        { key: "Job Displayed", value: "12/days" },
      ],
      buttonText: "Let's go",
      buttonVariant: "success",
    },
    {
        name: "Starter",
        price: "$0",
        description: "Trial for Enterprise",
        features: [
          { key: "Job Posting", value: "5" },
          { key: "Featured Job", value: "4" },
          { key: "Job Displayed", value: "5/days" },
        ],
        buttonText: "Let's Started",
        buttonVariant: "success",
      },
    {
      name: "Custom Package",
      price: "$500",
      description: "Best suited for enterprises",
      features: [
        { key: "Job Posting", value: "1000" },
        { key: "Featured Job", value: "1000" },
        { key: "Job Displayed", value: "30/days" },
        { key: "Premium Support", value: "24/7" },
        { key: "All Vetted Candidates", value: "100% refund guarantee" },
      ],
      buttonText: "Contact Us",
      buttonVariant: "success",
    },
    
  ];

  return (
    <>
      <div className="packages-Container">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-2 bg-white shadow-lg">
              <Sidebar />
            </div>
            <div className="col-10">
              <main className="applications-container my-5 mx-5">
                <EmailVerification />

                {/* Pricing Cards */}
                <Row className="g-4 mt-5 justify-content-center">
                  {plans.map((plan, index) => (
                    <Col key={index} md={3}>
                      <Card className="h-100 pricing-card shadow">
                        <Card.Header className=" topTitle text-white text-center py-2">
                          <small className="">Our best deal</small>
                        </Card.Header>
                        <Card.Body className="">
                          <Card.Title className="text-center display-4 fs-3 fw-bold">
                            {plan.price}
                            <small className="text-muted fs-5">/Monthly</small>
                          </Card.Title>
                          <h5 className="text-center">{plan.name}</h5>
                          <Card.Text className="text-muted text-center mb-4 border-bottom py-4">
                            {plan.description}
                          </Card.Text>
                          <ul className="list-unstyled">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="py-1">
                                {feature.key}: <strong className=" float-end">{feature.value}</strong>
                              </li>
                            ))}
                          </ul>
                        </Card.Body>
                        <Card.Footer className="text-center m-3">
                          <Button
                            variant={plan.buttonVariant}
                            className="pricing-button w-100"
                          >
                            {plan.buttonText}
                          </Button>
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Packages;
