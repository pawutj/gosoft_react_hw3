const Card = ({ id, imgSrc, createBy, date, likeCount, commentCount }) => {
  return (
    <div>
      <p>id : {id}</p>
      <img src={imgSrc} alt="img" />
      <p>create by : {createBy}</p>
      <p> date:{date} </p>
      <p> likeCount : {likeCount} </p>
      <p> Comment Count : {commentCount}</p>
    </div>
  );
};

export default Card;
