import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Parcel from "single-spa-react/parcel";

export default function Root(props) {
  return (
    <Router>
      <div>
        <h1>{props.name}</h1>

        <Routes>
          <Route path="/contact" element={<div>contact</div>} />
          <Route
            path="/"
            element={
              <div>
                <p>home</p>
                <Parcel
                  config={() => System.import("@component/landing-component")}
                />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
