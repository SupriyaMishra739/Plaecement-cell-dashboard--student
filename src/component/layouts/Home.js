import Body from "./Body";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";
import Header from "./Header";
import DatafetchingBody from "./Datafetching/DatafetchingBody";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "30px" }}>
        <Header />
        <div
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "space-between",
            backgroundColor: "rgb(196, 196, 196)",
          }}
        >
          <BodyLeft />
          <DatafetchingBody />
          <BodyRight />
        </div>
      </div>
    </>
  );
};

export default Home;