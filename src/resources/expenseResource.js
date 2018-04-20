import axios from 'axios';

const expense_api_url = 'http://localhost:4444';

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