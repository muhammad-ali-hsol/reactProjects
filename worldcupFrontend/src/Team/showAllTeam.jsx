import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowAllTeam = () => {
  const [teamData, setTeamData] = useState([]);  
  const [independentCount, setInDependentCount] = useState(0);


  const fetchAllTeamsData = async () => {
    try {
      console.log("nhohiociorjhf;iowejdpiohdpi2edpoejdohenpidn2dn2pio3jd3klekl23koqwjuowgvshbqk djqigdiq:d2divedweg2yfeu2hdvsdbhkwgduqwhdiljhwjkv jfyqwgs ");
      const { data } = await axios.get("http://100.98.17.116:3001/team/showAll");
      setTeamData(data.teamsData || []);
    } catch (error) {
      console.error("Error fetching teams data:", error.message);
    }
  };

  useEffect(() => {
    fetchAllTeamsData();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold text-center underline text-orange-500 font-serif mb-5">
        All Teams Data
      </h1>
      <div className="flex flex-row flex-wrap justify-center mx-5">
        {teamData.map((team) => (
          <div
            key={team.id}
            className="flex justify-center w-[400px] h-[400px] border border-gray-500 rounded-lg shadow-xl hover:shadow-gray-950 hover:border-lime-400 transition duration-200 mb-10 mx-5"
          >
            <div className="flex flex-col">
              <img
                className="w-[400px] h-[250px] hover:h-[280px] rounded-t-lg object-cover"
                src={team.imageURL}
                alt={team.identityName}
              />
              <h2 className="text-center font-extrabold text-2xl text-gray-700">
                {team.identityName}
              </h2>
              <p className="text-center text-gray-600">
                {team.meta?.description || "No description available"}
              </p>
            </div>
          </div>
        ))}
      </div> <button
        className="p-2 m-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300"
        onClick={() => setInDependentCount(independentCount + 1)}
      >
        Increment Independent Count
      </button>
      <p>Independent Count: {independentCount}</p>

    </>
  );
};

export default ShowAllTeam;
