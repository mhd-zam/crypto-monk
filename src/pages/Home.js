import axios from "axios";
import { useEffect, useState,useContext } from "react";
import Carousel from "../component/carousel/Carousel";
import Header from "../component/header/header";
import Center from "../component/middlepart/Center";
import TableComponent from "../component/Table/Table";
import { CoinList } from "../config/api";
import { PageContext } from "../context/Page";

function Home() {
  let [state, Setstate] = useState();
  let header = [
    { field: "image", pic: true },
    { field: "name" },
    { field: "total_volume" },
    { field: "current_price" },
    { field:'details' ,button:true }
  ];
  let {page}=useContext(PageContext)
  let listofcoin = async () => {
    let { data } = await axios.get(CoinList(page));
    console.log(data);
    Setstate(data);
  };
  useEffect(() => {
    listofcoin();
  }, [page]);

  return (
    <div>
      <Header />
      <Carousel />
      <Center />
      <TableComponent state={state} header={header}  />
    </div>
  );
}

export default Home;
