const Homepage = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="mb-3">Benvenuto nel nostro store!</h1>
            <p className="lead">
              Scopri la nostra selezione di prodotti di qualità, dalle ultime
              novità tecnologiche alla moda più trendy. Offerte imperdibili ogni
              giorno!
            </p>
          </div>
          {/* Finta immagine promozionale, finto link */}
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/600x400?text=Promozione+Speciale" 
              alt="Promozione"
              className="img-fluid rounded shadow"
            />  
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
