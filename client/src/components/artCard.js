import React from 'react';

const ArtCard = work => {
  debugger; 
    return <div className='container'>
      <img className="image" src={work.thumbnail_url}/>
      <div className='overlay'>
        <div className='textOverlay'>
          {work.title}, {work.collecting_institution}
          <br></br>
          <a href='/{work.slug}'>Details</a>
          <br></br>
          <button> Add to Favorites </button>
        </div>
      </div> </div>;
}


  // handleDetailClick = (work) => {
  //
  //   this.props.setArtDetail(work)
  //
  //     return <div>
  //       <ArtDetail work={work}/>
  //     </div>
  //
  //
  // }



export default ArtCard;
