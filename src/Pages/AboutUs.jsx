import "./AboutUs.scss"

function AboutUs() {
  return (
    <>
      <div className="AboutUs-wrapper">
        {/* hero section */}
        <div className="container-fluid hero-section">
          <div className="container">
            <div className="row">
              <div className="col">
                <p>About Us</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Overview Section */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <h2 className="px-2">Our Story</h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa nec turpis hendrerit aliquet.
                Phasellus interdum erat ut velit cursus, nec aliquet ligula scelerisque. Vivamus suscipit, sapien in cursus
                tincidunt, metus metus vehicula est, eget fermentum lectus nisl et magna.
              </p>
              <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nisi, atque doloribus natus rerum error possimus non! Numquam, consequatur voluptate?</p>
              <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias beatae non, doloremque enim quo ipsa repellendus quam atque veniam dolorum ab reprehenderit cumque saepe vitae voluptatibus ducimus officia a illum aliquam laborum numquam? Molestias delectus, mollitia exercitationem aspernatur in harum aliquid tenetur sed distinctio repudiandae. Corrupti iusto possimus ipsam.</p>
              <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, eveniet quos, voluptates tempora obcaecati alias dolores temporibus non possimus est voluptatem neque suscipit ea! Id excepturi molestiae nulla maiores sunt.</p>
              <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aspernatur unde praesentium omnis voluptas blanditiis!</p>
            </div>
            <div className="col-md-6">
              <img
                src="https://img.freepik.com/premium-vector/business-meeting-illustration_1302918-12010.jpg?ga=GA1.1.1381281151.1722480315&semt=ais_hybrid"
                alt="Company Overview"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mission-vision-section mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Our Mission</h2>
                <p className="text-justify">
                  To deliver innovative solutions that improve our customers' lives and drive progress.
                </p>
              </div>
              <div className="col-md-6">
                <h2>Our Vision</h2>
                <p className="text-justify">
                  To be the leading provider of transformative technologies worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section mt-5">
          <div className="container">
            <h2>Meet Our Team</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="team-member">
                  <img
                    src="https://img.freepik.com/premium-vector/man-with-shirt-that-says-d-it_704913-37099.jpg?ga=GA1.1.1381281151.1722480315&semt=ais_hybrid"
                    alt="Team Member"
                    className="img-fluid rounded-circle shadow"
                  />
                  <h4>Jane Doe</h4>
                  <p>CEO</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-member">
                  <img
                    src="https://cdn-icons-gif.flaticon.com/15401/15401352.gif"
                    alt="Team Member"
                    className="img-fluid rounded-circle shadow"
                  />
                  <h4>John Smith</h4>
                  <p>CTO</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-member">
                  <img
                    src="https://cdn-icons-gif.flaticon.com/9828/9828867.gif"
                    alt="Team Member"
                    className="img-fluid rounded-circle shadow"
                  />
                  <h4>Emily Johnson</h4>
                  <p>COO</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Get in Touch</h2>
                <p >
                  Reach out to us for any inquiries or to learn more about what we do.
                </p>
                <button className="btn btn-primary mt-3">Contact Us</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default AboutUs
