import React from 'react';

const ArtCard = props => {

  const art = props.art.map((work, index) => {
      return <div key={index} className='container'>
        <img className="image" src={work.thumbnail}/>
        <div className='overlay'>
          <div className='textOverlay'>
            {work.title}, {work.collecting_institution}
            <br></br>
            <a href='/{work.slug}'>Details</a>
            <br></br>
            <button> Add to Favorites </button>
          </div>
        </div> </div>;
  })

  return (
    <div>
      {art}
    </div>
  )

}


// class ArtCard extends Component {
//
//   render() {
//     debugger;
//     const { artwork } = this.props;
//     debugger;
//     return (
//       <div>
//         <p> art test </p>
//         <li> {artwork.title}, {artwork.category} </li>
//       </div>
//     )
//   }
//
//
// }

export default ArtCard;
