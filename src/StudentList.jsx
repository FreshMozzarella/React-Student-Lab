import ScoreList from "./ScoreList";
export default function Student({ studentData }) {
  return (
    <div>
      <p>
        Name:
        <span> {studentData.name} </span>
      </p>
      <p>
        Bio:
        <span> {studentData.bio} </span>
      </p>
      <div>
        {studentData.scores.map((score, index) => (
          <ScoreList key={index} scoreData={score} />
        ))}
      </div>
    </div>
  );
}
