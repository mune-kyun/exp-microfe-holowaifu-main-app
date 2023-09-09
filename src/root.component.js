import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Parcel from "single-spa-react/parcel";
import { Helmet } from "react-helmet";

export default function Root(props) {
  return (
    <Router>
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <div>
        <h1 className="text-lg text-red-500 font-semibold">{props.name}</h1>

        <Routes>
          <Route path="/contact" element={<div>contact</div>} />
          <Route
            path="/"
            element={
              <div>
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
