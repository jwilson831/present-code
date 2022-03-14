const DigiSide = (programs) => {
  const places = programs.programs[0].acf.locations.split(",");

  const list = places.map((place) => (
    <p style={{ padding: "15px", fontSize: "1.4rem" }}>{place}</p>
  ));

  return (
    <>
      <img
        alt="world"
        style={{ marginTop: "20px", borderRadius: "500px" }}
        src="https://skytop-strategies.com/wp-content/uploads/2022/03/world.png"
      />
      <h3>Skytop Brings You the World</h3>
      <hr
        style={{
          color: "gold",
          backgroundColor: "gold",
          height: 1,
          marginLeft: "15px",
        }}
      />
      <ul>{list}</ul>
    </>
  );
};

export default DigiSide;
