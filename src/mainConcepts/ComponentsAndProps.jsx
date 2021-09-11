const UserDetails = (props) => {
  console.log(props);

  return (
    <div className="comments">
      <hr />
      <h3>3. Components and Props: User Details</h3>
      <img src={props.avator} alt="Placeholder" />
      <p>{props.name}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default UserDetails;
