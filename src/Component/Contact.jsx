import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });

  const formSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };

  const InputEvent = (e) => {
    // Update the state here with the new input value
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="container-fluid contact">
        <div className="row">
          <div className="heading_contact">
            {/* <h1 className="my-3"> Get In Touch</h1> */}
            {/* <div className="location_map">
              <p>Map</p>
            </div> */}
            {/* <hr /> */}
            <div className="my-2 text-center">
              <h1>Contact Me</h1>
            </div>
            <div className="container-fluid contact_div">
              <div className="row">
                <div className="col-md-6 mb-3 col-10 mx-auto">
                  <form onSubmit={formSubmit}>
                    <div className="mb-2">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Your Name"
                        name="name"
                        value={data.name}
                        onChange={InputEvent}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel" // Changed from "type="number"" to "type="tel""
                        className="form-control"
                        id="phone"
                        placeholder="Enter Your Number"
                        name="phone"
                        value={data.phone}
                        onChange={InputEvent}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={data.email}
                        onChange={InputEvent}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="3"
                        name="msg"
                        value={data.msg}
                        onChange={InputEvent}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-outline-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
