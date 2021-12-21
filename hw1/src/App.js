import Card from "./Card";

function App() {
  return (
    <div style={{ margin: 10 }}>
      <span>
        <Card
          id={1}
          imgSrc={"https://s2.vndb.org/cv/14/38614.jpg"}
          createBy={"favorite"}
          date={"12/21"}
          likeCount={10}
          commentCount={12}
        />

        <Card
          id={2}
          imgSrc={"https://s2.vndb.org/cv/06/51006.jpg"}
          createBy={"favorite"}
          date={"12/21"}
          likeCount={10}
          commentCount={12}
        />

        <Card
          id={3}
          imgSrc={"https://s2.vndb.org/cv/08/32608.jpg"}
          createBy={"favorite"}
          date={"12/21"}
          likeCount={11}
          commentCount={14}
        />

        <Card
          id={4}
          imgSrc={"https://s2.vndb.org/cv/08/32708.jpg"}
          createBy={"Saga Planets"}
          date={"12/21"}
          likeCount={21}
          commentCount={51}
        />

        <Card
          id={5}
          imgSrc={"https://s2.vndb.org/cv/33/38033.jpg"}
          createBy={"Saga Planets"}
          date={"12/21"}
          likeCount={21}
          commentCount={35}
        />
      </span>
    </div>
  );
}

export default App;
