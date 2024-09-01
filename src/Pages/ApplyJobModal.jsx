
import Modal from 'react-bootstrap/Modal';
import "./ApplyJobModal.scss"

export default function ApplyNowFormModal(props) {
    console.log(props)
    return (
        <>
            <div className="modalWrapper">
                <Modal
                    {...props}
                    size="md"
                    aria-labelledby="contained-modal-title-hcenter"
                    centered

                >
                    <Modal.Header className='modal-hader px-4' closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Apply For This Job
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className=' px-4'>
                        <div className="form-wrapper">
                            <form>
                                <label htmlFor="username">Full Name</label>
                                <input type="text" autoFocus id='fullname' name='fullname' placeholder="Enter Your Full Name" required />
                                <label htmlFor="email">Email Address</label>
                                <input type="email" placeholder="Enter Your Email" id='email' name='email' required />
                                <label htmlFor='message'>Message</label>
                                <textarea name="message" placeholder="Your Cover Latter" rows="6" className="form-control i1 mt-3"></textarea>
                                <label className='mt-3' htmlFor='resume'>Upload CV </label>
                                <input type="file" name="resume" id="resume" placeholder='Maximum file size: 10MB.' />
                                <button type='submit' className="submit-btn">Send Application</button>
                            </form>

                        </div>
                    </Modal.Body>
                    <Modal.Footer className=' px-4'>
                        <p className='text-muted'>You can apply to this job and others using your online resume. Click the button above to send your online resume and email your application to the employer.</p>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//   <Button variant="primary" onClick={() => setModalShow(true)}>
//     Launch vertically centered modal
//   </Button>

//   <ApplyNowFormModal
//     show={modalShow}
//     onHide={() => setModalShow(false)}
//   />
//     </>
//   );
// }

// render(<App />);
