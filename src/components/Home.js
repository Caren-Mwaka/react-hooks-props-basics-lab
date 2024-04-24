import React from "react";

function Home(props) {
  const { name, city, color, user } = props;

  return (
    <div id="home">
      <h1 style={{ color: user ? user.color : color }}>
        {user ? `${user.name} is a Web Developer from ${user.city}` : `${name} is a Web Developer from ${city}`}
      </h1>
    </div>
  );
}

export default Home;
