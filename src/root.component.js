import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import Parcel from "single-spa-react/parcel";
import { Helmet } from "react-helmet";

export default function Root(props) {
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
}

function MainPage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("InterComponent", (event) => {
      const { from, action } = event.detail.customData;

      if (from == "landing-component") {
        if (action == "press-enter") navigate("/contact");
      }
    });
  }, []);

  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/contact" element={<div>contact</div>} />
        <Route
          path="/"
          element={
            <Parcel
              config={() => System.import("@component/landing-component")}
            />
          }
        />
      </Routes>
    </div>
  );
}
