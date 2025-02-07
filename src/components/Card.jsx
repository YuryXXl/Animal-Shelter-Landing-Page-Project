import PropTyps from 'prop-types'


function Card({titleName, text, src}) {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card">
        <img src={src} alt="Beautiful Accessories" />
        <div className="card-body">
          <h5 className="card-title">{titleName}</h5>
          <p className="card-text">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

// Card.defaultProps = {
//   titleName: "Default Title",
//   text: "Default Text",
//   src: "/img1.png",
// }

// Card.propTypes = {
//   titleName: PropTyps.string,
//   text: PropTyps.string,
//   src: PropTyps.string,
// }


export default Card;
