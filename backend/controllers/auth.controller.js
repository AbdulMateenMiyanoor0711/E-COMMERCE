const db = require("./../db");

async function getUser() {
  try {
    const users = await db.query(`SELECT * FROM users;`);
    console.log("users", users[0]);
    return users[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUser: getUser,
};
