import { useState, useRef } from "react";
import Button from "../../Button/Button";
import "./Contact.css";

function Contact() {
  const dialogRef = useRef();
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();
  const [showMessage, setShowMessage] = useState(false);
  const [userName, setUserName] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    setUserName(name);

    const email = emailInputRef.current.value;
    if (!email.includes("@")) {
      setErrorMessage("Invalid email address. Please try again.");

      return;
    } else {
      setErrorMessage("");
    }

    setShowMessage(true);
    dialogRef.current.close();
  };

  const handleModalClose = () => {
    emailInputRef.current.value = "";
    nameInputRef.current.value = "";
    commentInputRef.current.value = "";
    setSubscribe(false);
  };

  const handleSubscribe = (e) => {
    setSubscribe(e.target.value === "yes");
  };

  return (
    <>
      <h2 className="Contact__title">Contact Me</h2>
      <p className="Contact__text">
        Do you have any questions or just want to say hi?
      </p>
      <p className="Contact__text">
        Feel free to drop me a line by filling out this contact form...
      </p>
      <div className="Contact__text thankyou">
        {showMessage && (
          <p>Thank you {userName}, I will get back to you soon!</p>
        )}
      </div>
      <Button
        className="Contact__button"
        ariaLabel={"Send message"}
        onClick={() => dialogRef.current.showModal()}
      >
        Send message
      </Button>

      <dialog ref={dialogRef} onClose={handleModalClose}>
        <form className="Contact__form" onSubmit={handleSubmit}>
          <div className="Contact__form-title">
            <h3>Contact Form</h3>
            <p className="Contact__form-note">* is required</p>
          </div>
          <div className="Contact__form-field">
            <div className="Contact__form-required">*</div>
            <label>Email:</label>
          </div>
          <input type="text" ref={emailInputRef} required />
          <div className="Contact__form-error">{errorMessage}</div>

          <div className="Contact__form-field">
            <div className="Contact__form-required">*</div>
            <label>Name:</label>
          </div>
          <input type="text" ref={nameInputRef} required />

          <div className="Contact__form-field">
            <div className="Contact__form-required">*</div>
            <label>Do you want to subscribe for my latest update?</label>
            <select onChange={handleSubscribe} value={subscribe ? "yes" : "no"}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {subscribe && (
            <div className="Contact__form-field" id="subscriptionFrequency">
              <div className="Contact__form-required">*</div>
              <label>How often do you want to receive email?</label>
              <select>
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>
          )}

          <div className="Contact__form-field">
            <label>Comment:</label>
          </div>
          <textarea ref={commentInputRef}></textarea>

          <div className="Contact__form-button">
            <Button type="submit" ariaLabel={"Submit"} onSubmit={handleSubmit}>
              Submit
            </Button>
            <Button
              ariaLabel={"Close"}
              onClick={() => dialogRef.current.close()}
            >
              Cancel
            </Button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Contact;
