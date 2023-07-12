import { useEffect, useState, FormEvent } from "react"
import ReactPlayer from "react-player"
import './ExerciseList.css'
import NavBar from "../../components/NavBar/NavBar"

interface Exercise {
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
    const [exercise, setExercise] = useState<Exercise>({
        name: '',
        difficulty: '',
        primary_muscle: [],
        equipment: '',
        steps: [],
        url: '',
        name2: '',
        difficulty2: '',
        primary_muscle2: [],
        equipment2: '',
        steps2: [],
        url2: '',
        name3: '',
        difficulty3: '',
        primary_muscle3: [],
        equipment3: '',
        steps3: [],
        url3: '',
        name4: '',
        difficulty4: '',
        primary_muscle4: [],
        equipment4: '',
        steps4: [],
        url4: ''
    })

    const [muscleName, setMuscleName] = useState({
        name: ''
    })

    const [muscle, setMuscle] = useState('')

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        setMuscle(muscleName.name)
    }

    useEffect(() => {
        document.title = 'Exercise Search'
    }, [])

    useEffect(() => {
        if (muscle !== '') {
            const getExercises = async () => {
                const response = await fetch(`https://musclewiki.p.rapidapi.com/exercises?muscle=${muscle.slice(0, 1).toUpperCase() + muscle.slice(1, muscle.length)}`,
                    {
                        headers: {
                            'X-RapidAPI-Key': '9330f53ccbmsh1c7362c314d0f7fp1cfb35jsn8a8d5e0da3ce',
                            'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
                        },
                    }
                )
                const data = await response.json()
                console.log(data)
                setExercise({
                    name: data[0].exercise_name,
                    difficulty: data[0].Difficulty,
                    primary_muscle: data[0].target.Primary.map((muscle: any) => muscle),
                    equipment: data[0].Category,
                    steps: data[0].steps.map((step: any) => step),
                    url: data[0].videoURL[0],
                    name2: data[1].exercise_name,
                    difficulty2: data[1].Difficulty,
                    primary_muscle2: data[1].target.Primary.map((muscle: any) => muscle),
                    equipment2: data[1].Category,
                    steps2: data[1].steps.map((step: any) => step),
                    url2: data[1].videoURL[0],
                    name3: data[2].exercise_name,
                    difficulty3: data[2].Difficulty,
                    primary_muscle3: data[2].target.Primary.map((muscle: any) => muscle),
                    equipment3: data[2].Category,
                    steps3: data[2].steps.map((step: any) => step),
                    url3: data[2].videoURL[0],
                    name4: data[3].exercise_name,
                    difficulty4: data[3].Difficulty,
                    primary_muscle4: data[3].target.Primary.map((muscle: any) => muscle),
                    equipment4: data[3].Category,
                    steps4: data[3].steps.map((step: any) => step),
                    url4: data[3].videoURL[0]
                })
            }
            getExercises()
        }
    }, [muscle])

    return (
        <>
        <NavBar />
            <div className="exercise-page">
                <div className="exercise-list">
                    <h1 className="exercise-title"> Exercise Search </h1>
                    <form className="search-form" onSubmit={handleSubmit}>
                        <div className="muscle-search">
                            <label htmlFor="search"> Enter Muscle: </label>
                            <input
                                className="muscle-label"
                                type="text"
                                placeholder="Ex: hamstrings, biceps, etc..."
                                onChange={(event) => {
                                    setMuscleName({ name: event.target.value })
                                }}
                            />
                        </div>
                        <button className="btn btn-info rounded-pill d-block mx-auto" type="submit"> Search </button>
                    </form>
                </div>
                {muscle && (
                <>
                    <div className="cards">
                        <div className="card-group">
                            <div className="card" id="exercise-card">
                                <div className="card-block">
                                    <h3 className="card-title" id="card-name">{exercise.name}</h3>
                                    <ul className="card-text exercise-ul">
                                        <li>Diffculty: {exercise.difficulty}</li>
                                        <li>Equipment: {exercise.equipment}</li>
                                        {exercise.primary_muscle.map((muscle, index) => (
                                            <li key={index}>Primary: {muscle}</li>
                                        ))}
                                    </ul>
                                    <h3 id="card-instructions">Instructions</h3>
                                    <ol className="card-text exercise-ol" id="steps">
                                        {exercise.steps.map((step, index) => (
                                            <li key={index}> {step}</li>
                                        ))}
                                    </ol>
                                    <div className="video">
                                    <ReactPlayer
                                        url={exercise.url}
                                        width="70%"
                                        controls
                                    />
                                    </div>
                                </div>
                            </div>
                            <div className="card" id="exercise-card">
                                <div className="card-block">
                                    <h3 className="card-title" id="card-name">{exercise.name2}</h3>
                                    <ul className="card-text exercise-ul">
                                        <li>Difficulty: {exercise.difficulty2}</li>
                                        <li>Equipment: {exercise.equipment2}</li>
                                        {exercise.primary_muscle2.map((muscle, index) => (
                                            <li key={index}>Primary: {muscle}</li>
                                        ))}
                                    </ul>
                                    <h3 id="card-instructions">Instructions</h3>
                                    <ol className="card-text exercise-ol" id="steps">
                                        {exercise.steps2.map((step, index) => (
                                            <li key={index}> {step}</li>
                                        ))}
                                    </ol>
                                    <div className="video1">
                                    <ReactPlayer
                                        url={exercise.url2}
                                        width="70%"
                                        controls
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-group">
                            <div className="card" id="exercise-card">
                                <div className="card-block">
                                    <h3 className="card-title" id="card-name">{exercise.name3}</h3>
                                    <ul className="card-text exercise-ul">
                                        <li>Diffculty: {exercise.difficulty3}</li>
                                        <li>Equipment: {exercise.equipment3}</li>
                                        {exercise.primary_muscle3.map((muscle, index) => (
                                            <li key={index}>Primary: {muscle}</li>
                                        ))}
                                    </ul>
                                    <h3 id="card-instructions">Instructions</h3>
                                    <ol className="card-text exercise-ol" id="steps">
                                        {exercise.steps3.map((step, index) => (
                                            <li key={index}> {step}</li>
                                        ))}
                                    </ol>
                                    <div className="video">
                                    <ReactPlayer
                                        url={exercise.url3}
                                        width="70%"
                                        controls
                                    />
                                    </div>
                                </div>
                            </div>
                            <div className="card" id="exercise-card">
                                <div className="card-block">
                                    <h3 className="card-title" id="card-name">{exercise.name4}</h3>
                                    <ul className="card-text exercise-ul">
                                        <li>Difficulty: {exercise.difficulty4}</li>
                                        <li>Equipment: {exercise.equipment4}</li>
                                        {exercise.primary_muscle4.map((muscle, index) => (
                                            <li key={index}>Primary: {muscle}</li>
                                        ))}
                                    </ul>
                                    <h3 id="card-instructions">Instructions</h3>
                                    <ol className="card-text exercise-ol" id="steps">
                                        {exercise.steps4.map((step, index) => (
                                            <li key={index}> {step}</li>
                                        ))}
                                    </ol>
                                    <div className="video1">
                                    <ReactPlayer
                                        url={exercise.url4}
                                        width="70%"
                                        controls
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                )}
            </div>
        </>
    )}



export default ExerciseList