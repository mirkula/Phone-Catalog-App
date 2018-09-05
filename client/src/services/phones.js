import axios from 'axios';

export const getPhoneList = () => axios('http://localhost:8080/phones');