import { useEffect } from "react"
import { InlineWidget } from "react-calendly"
import './Schedule.css'
import NavBar from "../../components/NavBar/NavBar";

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/49c6bce0-1f75-11ee-b0a7-9f000c4c1540';


const Schedule = () => {
  useEffect(() => {
    document.title = 'Schedule'
  }, [])

  return (
    <>
    <NavBar />
      <div className="schedule">
        <InlineWidget url="https://calendly.com/trainingproject" styles={{
          marginTop: '1rem',
          width: '30rem',
          height: '30rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }} />
      </div>
      <div>
        <div className="contact-form">
          <form method="POST" action={FORM_ENDPOINT}>
            <div>
              <h3 id="contact-title">Questions?</h3>
              <div>
                <input
                  name="name"
                  type="text"
                  className="name-contact"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  className="email-contact"
                  placeholder="ex@example.com"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  className="message-contact"
                  rows={5}
                  placeholder="Tell us what you're thinking about..."
                ></textarea>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="btn btn-info rounded-pill d-block mx-auto"
                  id="contact-btn"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </form>
          <div className="location-div">
            <h3 className="location-title text-center">Location</h3>
            <img className="location" src="/images/location.png" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Schedule