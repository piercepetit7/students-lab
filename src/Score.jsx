const Score = (props) => {
  return (
    <div>
      <h5>{props.score.score}</h5>
      <p>{props.score.date}</p>
    </div>
  )
}

export default Score