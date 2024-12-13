import { useEffect, useState } from "react";
import "./App.css";
import { Student } from "./types/Student";
import StudentTable from "./components/StudentTable";
import { getStudents } from "./services/api";

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getStudents();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  return (
    <>
      <StudentTable students={students} />
    </>
  );
}

export default App;
