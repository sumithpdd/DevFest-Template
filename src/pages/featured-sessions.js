import React, { useEffect, useState } from "react";
const FeaturedSessions = () => {
  const [sessions, setSessions] = useState([]);

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
    fetch("https://sessionize.com/api/v2/fvji6esg/view/Sessions")
      .then((response) => response.json())
      .then((data) => {
        if (data && data[0] && data[0].sessions) {
          const filteredSessions = data[0].sessions.filter((session) =>
            session.speakers.some((speaker) =>
              allowedSpeakers.includes(speaker.name),
            ),
          );
          setSessions(filteredSessions);
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="text-center bg-LightBlue py-10">
      <h2 className="text-center"> Featured Sessions</h2>
      <div className="w-11/12 mx-auto">
        {sessions.length > 0 &&
          sessions.map((session, idx) => (
            <div className="session-component my-10 p-5" key={idx}>
              <h3 className="mb-3">{session.title}</h3>
              {session.speakers && session.speakers.length > 0 && (
                <p className="font-semibold">
                  Speaker: {session.speakers[0].name}
                </p>
              )}
              <p className="mb-3">{session.description}</p>

              {session.categories.map((category) =>
                category.categoryItems.map((item) => {
                  // Determine the class based on the item name
                  const pillClass = item.name.includes("Talk")
                    ? "talk-pill"
                    : "workshop-pill";

                  return (
                    <span className={pillClass}>
                      {item.name.includes("Talk") ? "Talk" : "Workshop"}
                    </span>
                  );
                }),
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default FeaturedSessions;
