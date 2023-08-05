import React, { useState } from "react";
import "../CSS/Contact.css";

function Contact() {
  const gmailAddress = "razaq.sharaaz@gmail.com";
  const phoneNumber = "9849894372";
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);

  // Function to handle the copy action for phone number
  const handleCopyPhoneNumber = () => {
    const tempInput = document.createElement("input");
    tempInput.value = phoneNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Show the copied popup
    setShowCopiedPopup(true);

    // Hide the copied popup after a short delay (e.g., 2 seconds)
    setTimeout(() => {
      setShowCopiedPopup(false);
    }, 2000);
  };
  const handleOpenGmail = () => {
    window.open(`mailto:${gmailAddress}`);
  };

  // Function to handle the copy action for Gmail
  const handleCopyGmail = () => {
    const tempInput = document.createElement("input");
    tempInput.value = gmailAddress;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Show the copied popup
    setShowCopiedPopup(true);

    // Hide the copied popup after a short delay (e.g., 2 seconds)
    setTimeout(() => {
      setShowCopiedPopup(false);
    }, 2000);
  };

  return (
    <section id='contact' className='contact-section'>
      <h2>Contact Me Through</h2>
      <p>
        You can reach out to me through the following channels. I'd love to hear
        from you! <br />
        Don't Be Shy To Contact Me
      </p>

      <h3>
        Gmail :-{" "}
        <input
          type='text'
          value={gmailAddress}
          readOnly
          onClick={handleCopyGmail}
        />
        <button onClick={handleOpenGmail}>Open in Gmail</button>
      </h3>
      <h3>
        Phone No. :-{" "}
        <input
          type='text'
          value={phoneNumber}
          readOnly
          onClick={handleCopyPhoneNumber}
        />
      </h3>

      <div className='copied-popup-container'>
        {/* Copied popup */}
        {showCopiedPopup && <div className='copied-popup'>Copied!</div>}
      </div>
      <div className='social-container'>
        <a
          className='social'
          href='https://www.linkedin.com/in/abdul-razaq-a89038287/'
          target='_blank'
          rel='noopener noreferrer'>
          <img src='../Imgs/Linkedin.png' alt='LinkedIn' />
          <h2>LinkedIn</h2>
        </a>
        <a
          className='social'
          href='https://www.instagram.com/abdul_razzaq292/'
          target='_blank'
          rel='noopener noreferrer'>
          <img src='../Imgs/instagram.png' alt='Instagram' />
          <h2>Instagram</h2>
        </a>
      </div>
    </section>
  );
}

export default Contact;
