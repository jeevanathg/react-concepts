function Welcome() {
  return <p>Welcome Username....</p>;
}

function Guest() {
  return <p>Guest User....</p>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  return (
    <>
      The user is <b> {isLoggedIn ? "currently" : "not"}</b> logged in.
      {isLoggedIn ? <Welcome /> : <Guest />}
    </>
  );
}

export default Greeting;
