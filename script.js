// 1. 地図の初期化
// 'map' は index.html の <div id="map"> に対応しています。
// setViewの [35.681, 139.767] は中心の座標 (東京駅)、13 はズームレベルです。
const map = L.map('map').setView([35.681, 139.767], 13);

// 2. 地図タイルの設定
// OpenStreetMap (無料の地図) を使います。
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 3. マーカー (ピン) を立てる
// L.marker([座標]).addTo(map) でピンを立てられます。
const marker = L.marker([35.681, 139.767]).addTo(map);

// 4. マーカーにポップアップ (メモ) を追加
marker.bindPopup("<b>東京駅</b><br>日本の中心！").openPopup();

// ------------------------------------
// 【応用】キャンプ場や山を追加してみる
// ------------------------------------

// 例：筑波山
const tsukuba = L.marker([36.220, 140.109]).addTo(map);
tsukuba.bindPopup("<b>筑波山</b><br>登ってみたい山。");

// 例：ふもとっぱらキャンプ場
const fumotoppara = L.marker([35.405, 138.583]).addTo(map);
fumotoppara.bindPopup("<b>ふもとっぱら</b><br>富士山がきれいなキャンプ場。");