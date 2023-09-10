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
import TalentPage from "./components/TalentPage";

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
        if (action == "press-enter") {
          navigate("/home");
          window.location.reload();
        }
      } else if (from == "list-hololive") {
        if (action == "click-card") {
          const { name } = event.detail.customData.additionalData;
          navigate(`/talent/${name}`);
        }
      } else if (from == "detail-page") {
        if (action == "back-to-home") {
          navigate(`/home`);
        }
      }
    });
  }, []);

  return (
    <div className="w-full h-full">
      <Routes>
        <Route
          path="/home"
          element={
            <Parcel config={() => System.import("@component/list-hololive")} />
          }
        />
        <Route path="/talent/:slug" element={<TalentPage />} />
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
