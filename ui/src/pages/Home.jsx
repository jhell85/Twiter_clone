import React, { useGlobal } from "reactn";


const Home = () => {
  const { 0: token } = useGlobal("token");

  return (
    <div>
      {/* <div>
        <Link to="/Signup">Signup</Link>
      </div> */}
      <h1>Home {JSON.stringify(token)}</h1>
    </div>
  )
}

export default Home;