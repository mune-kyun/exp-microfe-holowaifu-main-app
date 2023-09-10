import { useParams } from "react-router-dom";
import Parcel from "single-spa-react/parcel";

export default function TalentPage(props) {
  const { slug } = useParams();

  return (
    <Parcel
      config={() => System.import("@component/detail-page")}
      customProps={{ name: slug }}
    />
  );
}
