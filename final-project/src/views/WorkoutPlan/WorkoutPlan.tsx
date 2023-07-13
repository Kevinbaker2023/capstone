import { collection, getDocs, getFirestore, query, doc, deleteDoc } from "firebase/firestore"
import { auth } from "../../firebase"
import NavBar from "../../components/NavBar/NavBar"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import './WorkoutPlan.css'
import { Link } from "react-router-dom"

interface WPlan {
    id: string,
    name: string,
    video: string
}
const WorkoutPlan = () => {
    const [workouts, setWorkouts] = useState<WPlan[]>([])

    useEffect(() => {
        const getPlan = async () => {
            const instance = getFirestore()
            const user = auth.currentUser
            const query1 = query(collection(instance, 'users', user.uid, 'workout'))
            const querySnapshot = await getDocs(query1)
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data(),
            })) as WPlan[];
            setWorkouts(data)
        }
        getPlan()
    }, [])

    const handleRemove = async (id:string) => {
        const instance = getFirestore()
        const user = auth.currentUser
        const docRef = doc(instance, 'users', user.uid, 'workout', id)
        await deleteDoc(docRef);
            setWorkouts((prevWorkouts) =>
                prevWorkouts.filter((item) => item.id !== id)
            )
    }
    return (
        <>
            <NavBar />
            <h1 className="text-center mt-3">Workout Plan</h1>
            {workouts.length > 0 ? (workouts.map((workout) =>
                <div className="card mx-auto mt-5" id="workout-card" style={{ width: '30rem' }}>
                    <ReactPlayer className="card-img-top" id='video' alt="Card image cap"
                        url={workout.video} playing={false} controls width={470} height={280} />
                    <div className="card-body">
                        <h5 className="card-title text-center"> Name: {workout.name}</h5>
                        <button className="btn rounded-pill d-block mx-auto"
                        id="remove-btn"
                        onClick={() => handleRemove(workout.id)}>
                        Remove
                        </button>
                    </div>
                </div>
            ))
                :
                (
                    <>
                    <h2 className="text-center mt-5">No Workouts Added!</h2>
                    <Link to='/exercise' id="workout-link">Add Some on the Exercise Search Page! </Link>
                    </>
                )

            }
        </>
    )
}

export default WorkoutPlan