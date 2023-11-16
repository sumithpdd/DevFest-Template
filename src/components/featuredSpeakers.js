import React, { useEffect, useState } from "react";
import { FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa";
import BioModal from "./modal";

const FeaturedSpeakerProfiles = () => {
  const [speakers, setSpeakers] = useState([]);

  const allowedSpeakers = [
    "Tom Colvin",
    "Natalie Godec",
    "Patty O'callaghan",
    "Marc Cohen",
    "Stefano Le Pera",
    "Steven Gray",
    "Sumith Damodaran",
    "Luiz Gustavo Martins",
    "Jose Enrique Calderon Sanz",
    "Alejandra Stamato",
    "Randy Gupta",
    "Vasudev Maduri",
    "Vadym Pinchuk",
    "Annalisa Arcella",
    "Mohammed Aboullaite",
    "Renuka Kelkar",
  ];

  const fetchData = () => {
    fetch("https://sessionize.com/api/v2/fvji6esg/view/Speakers")
      .then((response) => response.json())
      .then((data) => {
        // Filter the speakers to only include the ones in the allowedSpeakers list
        const filteredSpeakers = data.filter((speaker) =>
          allowedSpeakers.includes(speaker.fullName),
        );
        // Sort the filtered speakers by last name
        filteredSpeakers.sort((a, b) => a.lastName.localeCompare(b.lastName));
        // Set the speakers to state
        setSpeakers(filteredSpeakers);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="text-center bg-LightBlue py-10">
      <h2 className="my-10">Featured Speakers</h2>
      <div className="w-11/12 mx-auto">
        {speakers.length > 0 && (
          <div className="flex flex-wrap justify-center">
            {speakers.map((speaker) => (
              <div className="p-5 w-full md:w-1/2 lg:w-1/3" key={speaker.id}>
                <img
                  src={speaker.profilePicture}
                  alt={speaker.fullName}
                  className="rounded-full w-48 mx-auto"
                ></img>
                <h3 className="font-semibold">{speaker.fullName}</h3>
                <h4>{speaker.tagLine}</h4>
                {speaker.links.length > 0 && (
                  <ul className="inline-flex space-x-4 text-xl my-2">
                    <li>
                      <BioModal speaker={speaker} />
                    </li>
                    {speaker.links.map((link) => {
                      let icon;
                      if (link.title === "Twitter") {
                        icon = <FaTwitter />;
                      } else if (link.title === "LinkedIn") {
                        icon = <FaLinkedin />;
                      } else if (
                        link.title === "Company Website" ||
                        link.title === "Blog" ||
                        link.title === "Website"
                      ) {
                        icon = <FaGlobe />;
                      }
                      return (
                        <li key={speaker.lastName + link.linkType}>
                          <a
                            href={link.url}
                            className="hover:text-white"
                            aria-label={link.linkType}
                          >
                            {icon}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedSpeakerProfiles;
