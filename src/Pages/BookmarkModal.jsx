
import Modal from 'react-bootstrap/Modal';

export default function BookmarkModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='p-4' closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Bookmark Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-4'>
                <form className=''>
                    <label className='mb-2 text-muted' htmlFor='note'>Bookmark Note:</label>
                    <textarea className='mb-5 p-2' name="note" id="note" rows={6} placeholder=" Enter Your Note...."></textarea>
                    <button className='btn btn-primary mb-3 p-2' type="submit">Add Bookmark</button>
                </form>
            </Modal.Body>

        </Modal>
    );
}

