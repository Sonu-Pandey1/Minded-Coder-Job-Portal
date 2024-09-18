// import "./ContactUs.scss"
// import {useSignupContext} from "../context/signupContext"
// import { useState } from "react";

// function ContactUs() {
//   const [userData,setUserData] = useState(true)

//   const {user} = useSignupContext();

//   if(userData && user){
//     setContact({
//       username:user.username,
//       email:user.email,
//       message:"",
//     });

//     setUserData(false);

//   }


//   return (
//     <div className="ContactUs-wrapper">
//       {/* ContactUs Hero Section */}
//       <div className="container-fluid hero-section">
//         <div className="container">
//           <div className="row">
//             <div className="col">
//               <p>Contact Us</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ContactUs Section */}
//       <div className="container mt-5 contact-section">
//         <div className="row">
//           {/* Main 1 Column */}
//           <div className="col-lg-6 col-md-12 mt-5">
//             <h1 className="mb-3">Reach Us Quickly</h1>
//             <p className="ps-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat nostrum ipsum, tempora fuga illum corporis nulla, tempora dolore illo ullam voluptate eveniet commodi nemo dolorem quia n.</p>

//             <div className="row p-2">
//               <div className="col-md-6 mb-3">
//                 <input type="text" placeholder="Name" className="form-control i1" />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <input type="email" placeholder="E-mail" className="form-control i1" />
//               </div>
//             </div>

//             <div className="row p-2">
//               <div className="col-md-6 mb-3">
//                 <input type="text" placeholder="Phone" className="form-control i1" />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <input type="text" placeholder="Subject" className="form-control i1" />
//               </div>
//             </div>

//             <div className="row p-2">
//               <div className="col-12">
//                 <textarea name="message" placeholder="Your Message" rows="6" className="form-control i1"></textarea>
//               </div>
//             </div>

//             <div className="row mt-3">
//               <div className="col-md-4">
//                 <button className="btn btn-success btn-block btn-lg w-100">Send Message</button>
//               </div>
//             </div>
//           </div>

//           {/* Main 2 Column */}
//           <div className="col-lg-6 col-md-12 mt-5 img-wrapper">
//             <img className=" img-fluid img-thumbnail" src="https://img.freepik.com/premium-vector/woman-with-headphones-laptop-with-woman-wearing-headphones_1177960-34904.jpg?ga=GA1.1.1381281151.1722480315&semt=ais_hybrid" alt="contact img" />
//           </div>
//           <div className="container mt-5">
//             <div className="row">
//               <div className="col-12">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7006.6006524421455!2d77.35744689585188!3d28.590765823336884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724667785792!5m2!1sen!2sin"
//                   width="100%"
//                   height="350"

//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ContactUs;

import "./ContactUs.scss";
import { useSignupContext } from "../context/signupContext";
import { useState } from "react";
import {  toast } from 'react-toastify';

const defaultContactFormData = {
  username: "",
  email: "",
  phone: "",
  subject: "",
  message: "",

}

function ContactUs() {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true)

  const { user } = useSignupContext();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log("Form submitted:", contact);

    try {
      // 
      const response = await fetch("/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Message send successfully")

      }

    } catch (error) {
      console.log(error)
      toast.error("message not send")

    }



  };

  return (
    <div className="ContactUs-wrapper">
      <div className="container-fluid hero-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 contact-section">
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-5">
            <h5 className="ps-2 fst-italic"> Welcome {user ? user.username : "User"}</h5>
            <h1 className="mb-3">Reach Us Quickly</h1>
            <p className="ps-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat nostrum ipsum, tempora fuga illum corporis nulla, tempora dolore illo ullam voluptate eveniet commodi nemo dolorem quia n.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="row p-2">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="username"
                    value={contact.username}
                    onChange={handleChange}
                    placeholder="Name"
                    className="form-control i1"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    className="form-control i1"
                    required
                  />
                </div>
              </div>

              <div className="row p-2">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="phone"
                    value={contact.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="form-control i1"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="subject"
                    value={contact.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="form-control i1"
                    required
                  />
                </div>
              </div>

              <div className="row p-2">
                <div className="col-12">
                  <textarea
                    name="message"
                    value={contact.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="6"
                    className="form-control i1"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-4">
                  <button type="submit" className="btn btn-success btn-block btn-lg w-100">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-6 col-md-12 mt-5 img-wrapper">
            <img
              className="img-fluid img-thumbnail"
              src="https://img.freepik.com/premium-vector/woman-with-headphones-laptop-with-woman-wearing-headphones_1177960-34904.jpg?ga=GA1.1.1381281151.1722480315&semt=ais_hybrid"
              alt="contact img"
            />
          </div>

          <div className="container mt-5">
            <div className="row">
              <div className="col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7006.6006524421455!2d77.35744689585188!3d28.590765823336884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724667785792!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
