import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (

    <div className="widgets_articles">

        <div className="widgets_left">
            <FiberManualRecordIcon />
        </div>

        <div className="widgets_right">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className="widgets_header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
      </div>

      {newsArticle("Luigix testing the redux and more functionality", "Top News - 1,000")}
      {newsArticle("Learning programming from YouTube is better", "Top News - 850")}
      {newsArticle("Subscribe to Sonny Sangha channel", "Top News - 2,000")}
    </div>
  )
}

export default Widgets
