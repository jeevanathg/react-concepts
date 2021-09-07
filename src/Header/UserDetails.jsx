const UserDetails = (props) => {
  console.log(props);

  return (
    <div className="comments">
      <h3>Comments:</h3>
      <img src={props.avator} alt="Placeholder" />
      <p>{props.name}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default UserDetails;
