
const MisEntradasCard = ({ evento: { date, img, title } }) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 ">
        <div className="card">
          <img src={img} alt={title} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-main-text">{title}</h5>
            <p className="card-text">Lunes 20 dic - 5:00 pm</p>
            <div className="card-detail text-dark">
              <button className="card-button bg-secondary">MI TICKET</button>
              <button className="card-button">DETALLES</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MisEntradasCard;
  