// モックアップAPI
// 実際はAPIから取得してVuexで管理する
const database = [
  { id: 1, name: "りんご", price: 200, content: "青森産のりんご" },
  { id: 2, name: "ばなな", price: 300, content: "海外産のばなな" },
  { id: 3, name: "おれんじ", price: 100, content: "愛媛産のオレンジ" }
];

// インポート先で使用できる関数をまとめる
export default {
  fetch(id) {
    return database;
  },
  find(id) {
    return database.find(el => el.id === id);
  },
  asyncFind(id, callback) {
    setTimeout(() => {
      callback(database.find(el => el.id === id));
    }, 500);
  }
};
