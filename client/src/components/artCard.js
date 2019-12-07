import React from 'react';

const ArtCard = props => {

  const overlay = {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    height: '100%',
    width: '100%',
    opacity: '0',
    transition: '.5s ease',
    background_color: '#008CBA',
    opacity: "1"
  }

  const container = {
    position: 'relative',
    width: '50%',
    float: 'left'
  }

  const textOverlay = {
    color: 'white',
    font_size: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    webkit_transform: 'translate(-50%, -50%)',
    ms_transform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    text_align: 'center',
    opacity: '1'
  }

  const image = {
    width: 'auto',
    height: 'auto'
  }

  const art = props.art.map((work, index) => {
      return <div key={index} style={container}>
        <img style={image} src={work._links.thumbnail.href}/>
        <div style={overlay}>
        <div style={textOverlay}>{work.title}, {work.collecting_institution}</div>
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
