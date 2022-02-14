import type { NextPage } from "next";
import classes from "./index.module.css";

const Home: NextPage = () => {
  return (
    <div className={classes.item}>
      <h3>Hallo Welt!</h3>
    </div>
  );
};

export default Home;
