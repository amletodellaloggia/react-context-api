// Prodotti.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";

const Prodotti = () => {
  const [prodotti, setProdotti] = useState([]);
  const { budgetMode } = useBudget();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      setProdotti(resp.data);
    });
  }, []);

  const prodottiDaMostrare = budgetMode
    ? prodotti.filter((prodotto) => prodotto.price <= 30)
    : prodotti;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Prodotti</h1>

      <div className="row">
        {prodottiDaMostrare.map((prodotto) => (
          <div className="col-md-3 mb-4" key={prodotto.id}>
            <div className="card h-100 shadow">
              <img
                src={prodotto.image}
                className="card-img-top p-3"
                alt={prodotto.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{prodotto.title}</h5>
                <p className="card-text text-truncate">{prodotto.description}</p>
                <p className="fw-bold mt-auto">€ {prodotto.price}</p>
                <Link
                  className="btn btn-warning fw-bold"
                  to={`/dettaglio-prodotto/${prodotto.id}`}
                >
                  Dettagli
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prodotti;
