import styles from "./Button.module.css";

function ButtonComponent({ title, onClick, pagedisabled, id }) {
  return (
    <button id={id} disabled={pagedisabled} data-testid="button-component" className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
}

export default ButtonComponent;
