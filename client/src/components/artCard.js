import React from 'react';

const ArtCard = work => {

    return <div className='container'>
      <img className="image" src={work.work.thumbnail_url}/>
      <div key={work.work.id} className='overlay'>
        <div className='textOverlay'>
          {work.work.title}, {work.work.collecting_institution}
          <br></br>
          <a href='/{work.work.slug}'>Details</a>
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
