import React from 'react';

const ArtCard = props => {

  const art = props.art.map((work, index) => {
      return <li key={index}>{work.title}, {work.collecting_institution}</li>;
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
