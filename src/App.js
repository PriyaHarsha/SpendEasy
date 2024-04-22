import { Routes, Route } from "react-router-dom";
import BillsPayment from "./pages/BillsPayment";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import MyStats from "./pages/MyStats";
import AddExpenses from "./pages/AddExpenses";
import Addcredits from "./pages/Addcredits";
import AddLimit from "./pages/AddLimit";
import AllCredits from "./pages/AllCredits";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bills" element={<BillsPayment />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/mystats" element={<MyStats />} />
        <Route path="/addexpenses" element={<AddExpenses />} />
        <Route path="/addcredits" element={<Addcredits />} />
        <Route path="/setlimit" element={<AddLimit />} />
        <Route path="/credits" element={<AllCredits />} />
      </Routes>
    </>
  );
}

export default App;
