import { useEffect } from "react"
import './Home.css'
import Carousel from "react-bootstrap/Carousel"
import { Rating } from "@mui/material"
import ReactPlayer from "react-player"
import NavBar from "../../components/NavBar/NavBar"

const Home = () => {
  useEffect(() => {
    document.title = 'Home Page'
  }, [])
  return (
    <>
    <NavBar />
      <div className="carousel">
        <Carousel>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src="/images/before-after-1.jpeg" alt="Weight Transformation" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src="/images/before-after-2.jpeg" alt="Weight Transformation" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/images/before-after-4.jpeg" alt="Weight Transformation" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="about-container">
        <div className="about-sect">
          <h1 className="about-title"> My Story </h1>
          <p>I am a dedicated and passionate personal trainer who is deeply committed to helping individuals achieve their fitness goals and lead healthier lives. With 8 years of training experience and a genuine desire to make a positive impact, I strive to empower my clients to surpass their own expectations and embrace a sustainable approach to fitness. By creating personalized training programs, providing expert guidance on nutrition, and fostering a supportive environment, I aim to inspire and motivate individuals to adopt a lifestyle that prioritizes their physical and mental well-being. With my knowledge, experience, and unwavering dedication, I am here to guide you on your fitness journey, celebrate your achievements, and help you unlock your full potential.</p>
        </div>
        <div className="training-1">
      <ReactPlayer playing url='/videos/training-1.mp4'
          height='20rem'
          width='15rem'
          controls
        />
        </div>
        <div className="training-2">
      <ReactPlayer playing url='/videos/training-2.mp4'
          height='20rem'
          width='15rem'
          controls
        />
        </div>
      </div>
      <h1 className="text-center">Reviews</h1>
      <div className="review-cards">
        <div className="card-group">
          <div className="card" id="review">
            <div className="card-block">
              <h4 className="card-title text-center"><Rating name="size-medium" defaultValue={5} readOnly /></h4>
              <p className="card-text">"Outstanding personal trainer who pushes you to reach your full potential. Their expertise and guidance have helped me achieve significant fitness goals. Highly recommended for anyone looking for results and motivation."</p>
              <div className="review-bottom">
              <p className="review-name">Jesse Sanchez</p>
              <p className="review-date">09/04/2020</p>
              </div>
            </div>
          </div>
          <div className="card" id="review">
            <div className="card-block">
              <h4 className="card-title text-center"><Rating name="size-medium" defaultValue={5} readOnly /></h4>
              <p className="card-text">"Knowledgeable and dedicated personal trainer who tailors workouts to your specific needs. Their attention to form and technique ensures effective and safe training. I've seen tremendous progress under their guidance." </p>
              <div className="review-bottom">
              <p className="review-name">Ashley Martinez</p>
              <p className="review-date">02/06/2020</p>
              </div>
            </div>
          </div>
          <div className="card" id="review">
            <div className="card-block">
              <h4 className="card-title text-center"><Rating name="half-rating-read size-medium" defaultValue={4.5} precision={0.5} readOnly /></h4>
              <p className="card-text">"Exceptional personal trainer with a supportive and encouraging approach. They create challenging yet enjoyable workouts that keep you engaged and motivated. Thanks to their expertise, I've experienced remarkable improvements in strength, endurance, and overall fitness." </p>
              <div className="review-bottom">
              <p className="review-name">Daniel Williams</p>
              <p className="review-date">08/20/2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home