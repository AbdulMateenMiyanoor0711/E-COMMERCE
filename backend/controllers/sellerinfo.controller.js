const db = require("./../db");

async function getSellerInfo() {
  try {
    const sellerInfo = await db.query(`SELECT * FROM ecommerce.seller_profiles;`);
    console.log("sellerInfo", sellerInfo[0]);
    return sellerInfo[0];
  } catch (error) {
    throw error;
  }
}          

module.exports = {
  getSellerInfo: getSellerInfo,
};  