import { Calculator } from "components/Calculator/Calculator";
import s from "./App.module.css";
import { RandomUser } from "components/RandomUser/RandomUser";
export function App() {
  return <div className={s.root}>
    <Calculator></Calculator>
    <RandomUser/>
    </div>;
}
