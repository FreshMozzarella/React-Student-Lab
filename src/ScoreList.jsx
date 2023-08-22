export default function Student({ scoreData }) {
  return (
    <div className="score">
      <span>Date: {scoreData.date}</span>
      <span>Score: {scoreData.score}</span>
    </div>
  );
}
