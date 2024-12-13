import { Student } from "../types/Student";
import "bootstrap/dist/css/bootstrap.css";

interface Props {
  students: Student[];
}

const StudentTable = ({ students }: Props) => {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th align="left">First name</th>
            <th align="right">Last name</th>
            <th align="right">Check in time</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.first_name}</td>
              <td align="right">{student.last_name}</td>
              <td align="right">
                {new Date(student.check_in_time).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
