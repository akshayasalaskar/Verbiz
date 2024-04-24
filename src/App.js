import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Table } from "./Components/Table/Table";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex flex-row">
        <Sidebar />

        <Table />
      </div>
    </div>
  );
}

export default App;
