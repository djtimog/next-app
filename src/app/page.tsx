import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  <main>
    <div className="container">
      <div className="content">
        <label htmlFor= "polling_unit">Choose a polling unit..</label>
        <select name="polling_unit" id="polling_unit">
          <option value="" defaultChecked></option>
          <option value="1">1</option>
        </select>
      </div>
    </div>
  </main>
}
