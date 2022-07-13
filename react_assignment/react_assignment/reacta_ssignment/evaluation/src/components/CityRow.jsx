import styles from "./CityRow.module.css";
 // {name: 'Palm Bay', population: 55744, country: 'Guinea-Bissau', id: '1'}
function CityRow({id,name,population,country,}) {
  return (
    <tr data-testid="countries-container" className={styles.container} >
      <td> {id} </td>
      <td> {name} </td>
      <td> {country}</td>
      <td>{population} </td>
    </tr>
  );
}

export default CityRow;
