import React from 'react';

const ArtCard = props => {

  const cardStyle = {
    width: 'auto',
    height: '300px',
    padding: '20px',
    margin: '10px 6px 6px 10px',
    textDecoration: 'none',
    background: 'grey',
    float: 'left'
  }

  const art = props.art.map((work, index) => {
      return <div style={cardStyle} key={index}>
        <img src={work._links.thumbnail.href}/>
        <p>{work.title}, {work.collecting_institution}</p>
      </div>;
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
