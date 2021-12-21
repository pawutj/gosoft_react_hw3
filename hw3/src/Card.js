export default function Card({ background }) {
  return (
    <div
      className="card"
      style={{
        background,
        border: "1px solid gray",
      }}
    ></div>
  );
}
