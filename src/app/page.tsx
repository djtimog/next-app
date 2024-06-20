import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
    <div className= "container">
      <div className="content">
        <label htmlFor= "polling_unit">Choose a polling unit..</label>
        <select name="polling_unit" id="polling_unit">
          <option value="" defaultChecked>13579</option>
        </select>
        <input type="text" placeholder="polling unit result" readOnly />
        
      </div>
    </div>
    <div>
    <a href="/page2">next page</a>
    </div>
  </main>
  );
}
const data: any[] = []; // Assuming we've fetched the data from MySQL

data.forEach((data: any) => {
  const pollingUnit = data.pollingUnit; 
  const option = document.createElement("option");
  option.value = pollingUnit;
  option.textContent = pollingUnit;
  document.getElementById("polling_unit")?.appendChild(option);
});
