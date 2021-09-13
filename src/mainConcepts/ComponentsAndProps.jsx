const UserDetails = (props) => {
  return (
    <div className="comments">
      <hr />
      <h3>4. Components and Props: User Details</h3>
      <img src={props.avator} alt="Placeholder" />
      <div>{props.name}</div>
      <div>{props.date}</div>
    </div>
  );
};

export default UserDetails;
