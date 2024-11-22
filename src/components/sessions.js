import React, { useEffect, useState } from 'react';

const Sessions = () => {
    const [sessions, setSessions] = useState([]);

    const fetchData = () => {
        console.log("called sessionize")
        fetch('https://sessionize.com/api/v2/p2cwoiyr/view/Sessions')
            .then(response => response.json())
            .then(data => {
                console.log("data",data)

                if (data && data[0] && data[0].sessions) {
                    setSessions(data[0].sessions);
                }
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="text-center bg-LightBlue py-10">
            <h2 className="text-center">Sessions</h2>
            <div className='w-11/12 mx-auto'>
                {sessions.length > 0 && sessions.map((session, idx) => (
                    <div className='session-component my-10 p-5' key={idx}>
                        <h3 className='mb-3'>{session.title}</h3>
                        {session.speakers && session.speakers.length > 0 && (
                            <p className='font-semibold'>
                                Speakers: {session.speakers.map((speaker, speakerIdx) => (
                                <span key={speakerIdx}>
                                        {speaker.name}{speakerIdx < session.speakers.length - 1 ? ', ' : ''}
                                    </span>
                            ))}
                            </p>
                        )}
                        <p className='mb-3'>{session.description}</p>
                        {session.categories.map(category =>
                            category.categoryItems.map((item, itemIdx) => {
                                const pillClass = item.name.includes("Talk") ? "talk-pill" : "workshop-pill";
                                return (
                                    <span key={itemIdx} className={pillClass}>
                                        {item.name.includes("Talk") ? "Talk" : "Workshop"}
                                    </span>
                                );
                            })
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Sessions;
