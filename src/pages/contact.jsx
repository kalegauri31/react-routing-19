export default function Contact() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Contact Us</h1>

      <p>
        If you have any questions or feedback, feel free to contact us using 
        the details below.
      </p>

      <h2>Contact Details</h2>
      <p><strong>Email:</strong> example@gmail.com</p>
      <p><strong>Phone:</strong> +91 9876543210</p>
      <p><strong>Address:</strong> Bhiwandi, Maharashtra, India</p>

      <h2>Send Message</h2>
      <form>
        <div>
          <input 
            type="text" 
            placeholder="Enter your name" 
            style={{ margin: "5px", padding: "8px" }}
          />
        </div>

        <div>
          <input 
            type="email" 
            placeholder="Enter your email" 
            style={{ margin: "5px", padding: "8px" }}
          />
        </div>

        <div>
          <textarea 
            placeholder="Enter your message" 
            style={{ margin: "5px", padding: "8px" }}
          ></textarea>
        </div>

        <button style={{ margin: "10px", padding: "8px 15px" }}>
          Submit
        </button>
      </form>

      <p>
        We will get back to you as soon as possible.
      </p>
    </div>
  );
}