import ScoreList from "./ScoreList";

const StudentCard = (props) => {
  return (
    <div className="student-card" >
      <h1>{props.student.name}</h1>
      <h3>{props.student.bio}</h3>
      <ScoreList scores={props.student.scores} />
    </div>
  )
}

export default StudentCard;