import "antd/dist/antd.css";
import "./App.css";
import { useEffect, useState } from "react/cjs/react.development";

function App() {
  const [facts, setFacts] = useState([]);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    if (!listening) {
      const events = new EventSource(
        "http://localhost:3008/api/events?id=mob-101"
      );

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        console.log(parsedData);

        setFacts((facts) => facts.concat(parsedData));
      };

      setListening(true);
    }
  }, [listening, facts]);
  return (
    <table className="stats-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Msg</th>
        </tr>
      </thead>
      <tbody>
        {facts.map((fact, i) => (
          <tr key={i}>
            <td>{fact.id}</td>
            <td>{fact.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
