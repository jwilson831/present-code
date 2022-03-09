import "./styles/menuStyles.css";

const DigiMenu = () => {
  const places = [
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Belarus",
    "Belgium",
    "Bermuda",
    "Bosnia & Herzegovina",
    "Brazil",
    "Bulgaria",
    "Cameroon",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Costa Rica",
    "Croatia",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "Estonia",
    "Ethiopia",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Guatemala",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "India",
    "Indonesia",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Japan",
    "Jordan",
    "Kuwait",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Malaysia",
    "Maldives",
    "Mexico",
    "Mongolia",
    "Morocco",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nigeria",
    "Norway",
    "Pakistan",
    "Panama",
    "Papua New Guinea",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Romania",
    "Russia",
    "Saudi Arabia",
    "Serbia",
    "Singapore",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "Sweden",
    "Switzerland",
    "Taiwan",
    "Tanzania",
    "Thailand",
    "Turkey",
    "U.S. Virgin Islands",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Zambia",
  ];

  const list = places.map(place => <p style={{padding:"15px", fontSize:"1.4rem"}}>{place}</p> )

  return (
    <>
    <img alt="world" style={{borderRadius: "500px"}} src="https://skytop-strategies.com/wp-content/uploads/2022/03/world.png" />
      <h3>Skytop Brings You the World</h3>
      <hr
      style={{
          color: "gold",
          backgroundColor: "gold",
          height: 1,
          marginLeft:"15px"
      }}
  />
      <ul>
          {list}
      </ul>
    </>
  );
};

export default DigiMenu;
