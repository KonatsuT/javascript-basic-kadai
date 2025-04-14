const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0〜11なので +1 が必要
const day = today.getDate();

console.log(`${year}年${month}月${day}日`);