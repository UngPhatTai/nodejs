import pool from '../configs/connectDB.js';

const getAllUser = async () => {
    const [rows, fields] = await pool.execute('SELECT * FROM user');
    return rows;
};

const createUser = async (userData) => {
    const { username, password, fullname, address, sex, email } = userData;
    const [result] = await pool.execute(
        'INSERT INTO user (username, password, fullname, address, sex, email) VALUES (?, ?, ?, ?, ?, ?)',
        [username, password, fullname, address, sex, email]
    );
    return result;
};

export default { getAllUser, createUser };
