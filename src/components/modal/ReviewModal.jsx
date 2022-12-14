import React,{useState} from "react";
import Modal from "react-modal";


const ReviewModal = ({ isOpened, handleOpen , submitReview }) => {
  const [submitmodal, setSubmitmodal] =useState("");
  const modalSubmit=async (e)=>{
    e.preventDefault();
    await submitReview(submitmodal);
  }
  const handleReviewChange=(e)=>{
    setSubmitmodal(e.target.value);
  }
  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      position: "absolute",
      borderRadius: "10px",
      border: "none",
      padding: "1.5rem",
      background: "white",
      boxShadow: "2px 2px 5px 2px lightGray",
    },
  };
  return (
    <Modal
      isOpen={isOpened}
      style={modalStyle}
      className="lg:w-1/4 w-5/6"
      onRequestClose={handleOpen}
      ariaHideApp={false}
    >
      <p>Review..</p>
      <textarea type="text" placeholder="Write your Review" 
      className="w-full my-2 resize-none focus:outline-none border border-gray-200 bg-gray-100 p-4"
      value={submitmodal} 
      onChange={handleReviewChange}
      />
      <div className="flex justify-center gap-5 items-center ">
        <button
          className="rounded-lg bg-green-600 px-4 py-1 text-sm text-white"
          onClick={modalSubmit}
        >
          Submit
        </button>
        <button
          className="rounded-lg bg-red-500 px-4 py-1 text-sm text-white"
          onClick={handleOpen}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default ReviewModal;
