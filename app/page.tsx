import styles from "./page.module.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Button variant="success">Find Job</Button>
    </main>
  );
}
