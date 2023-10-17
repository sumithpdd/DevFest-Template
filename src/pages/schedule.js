import React from 'react';

const Schedule = () => (

    <div className='w-11/12 mx-auto my-5 p-5'>
        <h1 className='text-center'>DevFest {process.env.REACT_APP_CHAPTER_NAME} Sessions</h1>
        <div 
        src="https://sessionize.com/api/v2/fbau7brs/view/GridSmart">            
        </div>
    </div>
   
);

export default Schedule;