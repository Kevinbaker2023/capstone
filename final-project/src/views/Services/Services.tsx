import { Link } from "react-router-dom"
import './Services.css'
import NavBar from "../../components/NavBar/NavBar"


const Services = () => {
  return (
    <>
    <NavBar />
      <img className="img1" src="/images/sis1.jpeg" />
      <img className="img2" src="/images/sis2.jpeg" />
      <div className="services-card">
        <div className="card-group">
          <div className="card" id="services">
            <div className="card-block">
              <div className="card-head">
                <h4 className="card-title text-center pt-3">Personal Training</h4>
                <h3 className="text-center">In-Person</h3>
                <h3 className="text-center">$60/Hour</h3>
                <h5 className="text-center">Monthly Plans Available</h5>
              </div>
              <ul className="card-text service-list">
                <li>Fitness assessment and evaluation</li>
                <li>Customized workout plan tailored to personal goals</li>
                <li>Monitor progress and performance</li>
                <li>Basic guidance on nutrition</li>
                <li>Instruction on proper technique and form</li>
                <li>1 Hour sessions unless otherwise discussed!</li>
              </ul>
            </div>
            <Link className="services-btn btn btn-info rounded-pill" to='/schedule'>Contact Me</Link>
          </div>
          <div className="card" id="services">
            <div className="card-block">
              <div className="card-head">
                <h4 className="card-title text-center pt-3">Personal Training</h4>
                <h3 className="text-center">Remote</h3>
                <h3 className="text-center">$40/Hour</h3>
                <h5 className="text-center">Monthly Plans Available</h5>
              </div>
              <div>
                <ul className="card-text service-list">
                  <li>Virtual fitness assessment and evaluation via video call</li>
                  <li>Customized workout plan tailored to personal goals via video call</li>
                  <li>Instruction on proper technique and form via video call</li>
                  <li>Motivation and support in and outside of sessions</li>
                  <li>Basis guidance on nutrition</li>
                  <li>Recommend activities to be done outside of sessions</li>
                  <li>1 Hour sessions unless otherwise discussed!</li>
                </ul>
              </div>
            </div>
            <Link className="services-btn btn btn-info rounded-pill" to='/schedule'>Contact Me</Link>
          </div>
          <div className="card" id="services">
            <div className="card-block">
              <div className="card-head">
                <h4 className="card-title text-center pt-3">Nutritional Plan</h4>
                <h3 className="text-center">In-Person/Remote</h3>
                <h3 className="text-center">Varies</h3>
                <h5 className="text-center">Monthly Plans Available</h5>
              </div>
              <ul className="card-text service-list">
                <li>Customized meal planning tailored to personal goals</li>
                <li>Guidance on macronutrients to support goals</li>
                <li>Guidance on hydration</li>
                <li>Help with substitutions, when needed</li>
                <li>Guidance with meal timing</li>
                <li>Help with food/snacks in between meals</li>
              </ul>
            </div>
            <Link className="services-btn btn btn-info rounded-pill" to='/schedule'>Contact Me</Link>
          </div>
        </div>
      </div>
      <img className="img3" src="/images/sis3.jpeg" />
      <img className="img4" src="/images/sis4.jpeg" />
    </>
  )
}

export default Services