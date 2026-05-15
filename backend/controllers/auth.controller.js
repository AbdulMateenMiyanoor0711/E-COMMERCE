const db = require("./../db");
const hahshed = require("./../utils/hashed");
async function getUser() {
  try {
    const users = await db.query(`SELECT * FROM users;`);
    console.log("users", users[0]);
    return users[0];
  } catch (error) {
    throw error;
  }
}

async function addUser(name, email, phone, password, role, account_status, created_at) {
  try {
    
    let hashedPassword = await hahshed.hashedPassword(password);
    const result = await db.query(
      `INSERT INTO users (name, email, phone, password, role, account_status, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW());`,
      [name, email, phone, hashedPassword, role, account_status]
    );
    console.log("User added:", result[0]);
    return result[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUser: getUser,
  addUser: addUser
};
