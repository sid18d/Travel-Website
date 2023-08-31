import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tour give you the Opportunity to see a lot, within a time frame</p>
      <DestinationData
      className="first-des"
      Heading="Taal Volcano,Batangas"
      text="Taal Volcano is a complex volcano located on the island of Luzon in the Philippines. It is famous for being one of the World’s smallest active volcanoes and is part of the Pacific Ring of Fire. Taal Volcano is known for its unique geological features, including a large crater lake with several islands. You can take a boat tour of the lake to closely examine the Volcano and the Taal Volcano island."
      img1={Mountain1}
      img2={Mountain2}
      />

      <DestinationData
      className="first-des-reverse"
      Heading="Mt. Daguldul,Batangas"
      text="Batangas in prominent with their beautiful beaches and outstanding underwater activities but if you want to strike two different destinations in one day, it is possible. Not so  far from the shoreline of San Juan, Batangas, you can find Mt. Daguldol, one of the hiking destinations in the province. This mountain is one of their assets in terms of mountain ranges with beaches on the background. Daguldol is perfect for first time hikers because the trail is simple to moderate, but the beauty on the summit was remarkably beautiful."
      img1={Mountain3}
      img2={Mountain4}
      />
      
    </div>
  );
};

export default Destination;
