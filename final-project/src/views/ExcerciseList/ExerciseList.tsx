import { useEffect, useState } from "react"
import './ExerciseList.css'
import NavBar from "../../components/NavBar/NavBar"
import { doc, setDoc } from "firebase/firestore"
import { db, auth } from "../../firebase"

interface IExercise {
    name: string,
    difficulty: string,
    primary_muscle: string[],
    equipment: string,
    steps: string[],
    url: string,
    name2: string,
    difficulty2: string,
    primary_muscle2: string[],
    equipment2: string,
    steps2: string[],
    url2: string,
    name3: string,
    difficulty3: string,
    primary_muscle3: string[],
    equipment3: string,
    steps3: string[],
    url3: string,
    name4: string,
    difficulty4: string,
    primary_muscle4: string[],
    equipment4: string,
    steps4: string[],
    url4: string
}

const ExerciseList = () => {

    const [searchName, setSearchName] = useState('')

    const [muscle, setMuscle] = useState<IExercise | null>(null)

    useEffect(() => {
        document.title = 'Exercise Search'
    }, [])

    useEffect(() => {
            const getExercises = async () => {
                const response = await fetch(`https://musclewiki.p.rapidapi.com/exercises?muscle=${searchName.slice(0, 1).toUpperCase() + searchName.slice(1, searchName.length)}`,
                    {
                        headers: {
                            'X-RapidAPI-Key': '9330f53ccbmsh1c7362c314d0f7fp1cfb35jsn8a8d5e0da3ce',
                            'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
                        },
                    }
                )
                const data = await response.json()
                console.log(data)
                if(searchName) {
                    setMuscle({
                        name: data[0].exercise_name,
                        difficulty: data[0].Difficulty,
                        primary_muscle: data[0].target.Primary.map((pmuscle: any) => pmuscle),
                        equipment: data[0].Category,
                        steps: data[0].steps.map((step: any) => step),
                        url: data[0].videoURL[0],
                        name2: data[1].exercise_name,
                        difficulty2: data[1].Difficulty,
                        primary_muscle2: data[1].target.Primary.map((pmuscle: any) => pmuscle),
                        equipment2: data[1].Category,
                        steps2: data[1].steps.map((step: any) => step),
                        url2: data[1].videoURL[0],
                        name3: data[2].exercise_name,
                        difficulty3: data[2].Difficulty,
                        primary_muscle3: data[2].target.Primary.map((pmuscle: any) => pmuscle),
                        equipment3: data[2].Category,
                        steps3: data[2].steps.map((step: any) => step),
                        url3: data[2].videoURL[0],
                        name4: data[3].exercise_name,
                        difficulty4: data[3].Difficulty,
                        primary_muscle4: data[3].target.Primary.map((pmuscle: any) => pmuscle),
                        equipment4: data[3].Category,
                        steps4: data[3].steps.map((step: any) => step),
                        url4: data[3].videoURL[0]
                    })
                }
                }
            getExercises()
    }, [searchName])

    const addWorkout = async () => {
        if (typeof auth.currentUser !== null){
            const user = auth?.currentUser?.uid
            if (user && muscle){
                await setDoc(doc(db, 'users', user, 'workout', muscle.name), {
                    name: muscle?.name,
                    video: muscle?.url
                })
            }
        }
    }
    const addWorkout2 = async () => {
        if (typeof auth.currentUser !== null){
            const user = auth?.currentUser?.uid
            if (user && muscle){
                await setDoc(doc(db, 'users', user, 'workout', muscle.name2), {
                    name: muscle?.name2,
                    video: muscle?.url2
                })
            }
        }
    }
    const addWorkout3 = async () => {
        if (typeof auth.currentUser !== null){
            const user = auth?.currentUser?.uid
            if (user && muscle){
                await setDoc(doc(db, 'users', user, 'workout', muscle.name3), {
                    name: muscle?.name3,
                    video: muscle?.url3
                })
            }
        }
    }
    const addWorkout4 = async () => {
        if (typeof auth.currentUser !== null){
            const user = auth?.currentUser?.uid
            if (user && muscle){
                await setDoc(doc(db, 'users', user, 'workout', muscle.name4), {
                    name: muscle?.name4,
                    video: muscle?.url4
                })
            }
        }
    }

    const onClear = () => {
        setSearchName("")
    }

    return (
        <>
        <NavBar />
                <div className="exercise-list">
                    <h1 className="exercise-title"> Exercise Search </h1>
                    <div className="search-form">
                        <div className="muscle-search">
                            <label> Enter Muscle: </label>
                            <input
                                className="muscle-label"
                                type="text"
                                placeholder="Ex: hamstrings, biceps, etc..."
                                onChange={(event) => {
                                    setSearchName(event.target.value)
                                }}
                            />
                        </div>
                        <button onClick={onClear} className="btn rounded-pill d-block mx-auto" id="search-btn" type="submit"> Search </button>
                    </div>
                </div>
                {muscle && (
                    <div className="cards">
                        <div className="card-group">
                            <div className="card" id="exercise-card">
                                <div className="card-block">
                                    <h3 className="card-title" id="card-name">{muscle.name}</h3>
                                    <ul className="card-text exercise-ul">
                                        <li>Diffculty: {muscle.difficulty}</li>
                                        <li>Equipment: {muscle.equipment}</li>
                                        {muscle.primary_muscle.map((pmuscle, index) => (
                                            <li key={index}>Primary: {pmuscle}</li>
                                        ))}
                                    </ul>
                                    <div>
                                    <a href={muscle.url} >
                                        <button className="rounded-pill" id="video-btn">Video Tutorial</button>
                                    </a>
                                        <button className="rounded-pill" id="save-btn" onClick={addWorkout}>Save Workout</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card" id="exercise-card">
                                <div className="card-block">
                                    <h3 className="card-title" id="card-name">{muscle.name2}</h3>
                                    <ul className="card-text exercise-ul">
                                        <li>Difficulty: {muscle.difficulty2}</li>
                                        <li>Equipment: {muscle.equipment2}</li>
                                        {muscle.primary_muscle2.map((pmuscle, index) => (
                                            <li key={index}>Primary: {pmuscle}</li>
                                        ))}
                                    </ul>
                                    <div>
                                    <a href={muscle.url2} >
                                        <button className="rounded-pill" id="video-btn">Video Tutorial</button>
                                    </a>
                                        <button className="rounded-pill" id="save-btn" onClick={addWorkout2}>Save Workout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-group">
                            <div className="card" id="exercise-card">
                                <div className="card-block">
                                    <h3 className="card-title" id="card-name">{muscle.name3}</h3>
                                    <ul className="card-text exercise-ul">
                                        <li>Diffculty: {muscle.difficulty3}</li>
                                        <li>Equipment: {muscle.equipment3}</li>
                                        {muscle.primary_muscle3.map((pmuscle, index) => (
                                            <li key={index}>Primary: {pmuscle}</li>
                                        ))}
                                    </ul>
                                    <div>
                                    <a href={muscle.url3} >
                                        <button className="rounded-pill" id="video-btn">Video Tutorial</button>
                                    </a>
                                        <button className="rounded-pill" id="save-btn" onClick={addWorkout3}>Save Workout</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card" id="exercise-card">
                                <div className="card-block">
                                    <h3 className="card-title" id="card-name">{muscle.name4}</h3>
                                    <ul className="card-text exercise-ul">
                                        <li>Difficulty: {muscle.difficulty4}</li>
                                        <li>Equipment: {muscle.equipment4}</li>
                                        {muscle.primary_muscle4.map((pmuscle, index) => (
                                            <li key={index}>Primary: {pmuscle}</li>
                                        ))}
                                    </ul>
                                    <div>
                                    <a href={muscle.url4} >
                                        <button className="rounded-pill" id="video-btn">Video Tutorial</button>
                                    </a>
                                        <button className="rounded-pill" id="save-btn" onClick={addWorkout4}>Save Workout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )}



export default ExerciseList