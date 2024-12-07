import axios from 'axios';
import { Student } from '../types/Student';

const API_URL = 'http://127.0.0.1:5000/index';

export const getStudents = async (): Promise<Student[]> => {
    const response = await axios.get<Student []>(`${API_URL}`);
    return response.data;
};