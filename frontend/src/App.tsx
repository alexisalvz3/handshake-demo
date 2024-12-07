import { useEffect, useState } from "react";
import "./App.css";
import { getStudents } from "./services/api";
import { Student } from "./types/Student";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getStudents();
      setStudents(data);
    };
    fetchStudents();
  }, []);
  return (
    <>
      <StudentTable students={students} minWidth={650} />
    </>
  );
}

export default App;
