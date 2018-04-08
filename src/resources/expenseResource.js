import axios from 'axios';

const expense_api_url = 'http://localhost:4444';
const EXPENSES = [
    {
        "id": "1",
        "amount": 100,
        "category": "",
        "date": "2018-03-01",
        "userId": "1"
    },
    {
        "id": "4",
        "amount": 150,
        "category": "",
        "date": "2018-03-02",
        "userId": "1"
    },
    {
        "id": "5",
        "amount": 50,
        "category": "",
        "date": "2018-03-03",
        "userId": "1"
    }
];

export let fetchExpensesFromAPI = () => {
    const url = expense_api_url + '/expenses';
    return axios.get(url)
        .then(d => d.data);
};

export let submitExpenseToAPI = (expenseToSubmit) => {
    const url = expense_api_url + '/expense';
    return axios.post(url, expenseToSubmit)
        .then(d => d.data);
};