import { createContext, useState, useContext } from "react";

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const [budgetMode, setBudgetMode] = useState(false);

  const toggleBudgetMode = () => {
    setBudgetMode(!budgetMode);
  };

  return (
    <BudgetContext.Provider value={{ budgetMode, setBudgetMode, toggleBudgetMode }}>
      {children}
    </BudgetContext.Provider>
  );
};

const useBudget = () => {
  const context = useContext(BudgetContext);
  return context;
};

export { BudgetProvider, useBudget };
