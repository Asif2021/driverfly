"use client"
import styles from "./page.module.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <main className="text-center">
      <Button variant="success" onClick={()=>router.push("/find-job")}>Find Job</Button>
    </main>
  );
}
