import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import whitearrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "69b34a4e-9c00-46d5-8303-a4c52ed1292b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        console.log("Success", data);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us an message <img src={msg_icon} alt="Message Icon" /></h3>
            <p>Feel free to reach us — we're here to help!
Our support team is just a call or message away.
We're committed to guiding you every step of the way.
We look forward to connecting with you!

</p>
<ul>
    <li> <img src={mail_icon} alt="Mail Icon" />pranavvengatesh191103@gmail.com </li>
    <li> <img src={phone_icon} alt="Phone Icon" />+91 6381745886</li>
    <li> <img src={location_icon} alt="Location Icon" />123 Education Lane, chennai, <br />Tamilnadu, pin- 60001
We look forward to connecting with you!</li>
</ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Name</label>
                <input type="text" name='Name' placeholder="Enter Your Name" required />
                <label>Phone</label>
                <input type="tel" name="Phone" placeholder="Enter Your Phone" required />
                <label> Write your Message Here</label>
                <textarea name="Message" placeholder="Enter Your Message" rows={5} required></textarea>
                <button type="submit" className='btn dark-btn'>Send now <img src={whitearrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact