import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Student } from "../types/Student";

interface Props {
  students: Student[];
  minWidth?: number;
}

const StudentTable = ({ students, minWidth = 650 }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: minWidth }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">First name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Check in time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.first_name}
              </TableCell>
              <TableCell align="right">{student.last_name}</TableCell>
              <TableCell align="right">
                {new Date(student.check_in_time).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentTable;
