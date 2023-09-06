import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Root(props) {
  return (
    <Router>
      <div>
        <h1>{props.name}</h1>

        <Routes>
          <Route path="/contact" element={<div>contact</div>} />
          <Route path="/" element={<div>home</div>} />
        </Routes>
      </div>
    </Router>
  );
}
