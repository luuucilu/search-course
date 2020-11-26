function Course(props) {
  return (
    <>
      <div className="cardWrapper">
        <div style={{ backgroundColor: props.course.color }} className="image">
          <img src={props.course.img} alt="" className="img" />
        </div>

        <div class="text">
          <h1 className="title">{props.course.name}</h1>
          <p className="desc">{props.course.desc}</p>
        </div>
      </div>
    </>
  );
}

export default Course;
