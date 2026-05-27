# 北京旅程網站部署說明

## 目前狀態

這是一個可部署的靜態網站版本，已整合 `北京8天7夜学生行程PPT.pptx.pptx` 與原始 `北京.html`，包含：

- 第一子頁：北京地鐵與美食地圖
- 第二子頁：8 天 7 夜旅遊行程互動時間軸
- 第三子頁：按摩推薦
- 24 張圖集圖片，素材來自 PPT 內嵌媒體
- 地鐵圖縮放、拖曳與簡易路線計算
- PPT 預約表、每日費用、餐飲重點已轉成網站敘事

## WordPress.com 注意事項

這個網站需要 HTML、CSS、JavaScript。若要完整互動功能，WordPress.com 需要允許自訂 JavaScript 的方案或外部嵌入方式。免費或較低階方案可能會移除 `<script>`、`iframe`、`input` 等互動元素。

另外，若目標是中國大陸可穩定訪問，WordPress.com 不是理想選擇。更穩定的做法是：

- 使用中國大陸或香港可訪問性較好的靜態主機
- 避免 Google Fonts、Google Maps、YouTube、Facebook、Instagram 等外部資源
- 圖片與 JS/CSS 盡量同站託管
- 使用中國可訪問的地圖服務，例如高德地圖

## 上線流程

1. 將 `index.html`、`styles.css`、`app.js` 上傳到可支援靜態網站的 HTTPS 主機。
2. 如果仍要使用 WordPress.com，請先確認帳號方案允許自訂 JavaScript。
3. 登入 WordPress.com 後建立頁面，使用 Custom HTML 或外部靜態站 iframe 嵌入。
4. 上線後測試：桌機、手機、地圖縮放、路線計算、圖片載入速度。

## 待補

- 若要真的做到完整北京地鐵路徑演算法，需要官方或可靠的全站點線網資料，現在版本先聚焦旅程常用站與美食目的地。
- PPT 內少數不適合公開網站的粗俗字句已在網站版中改寫為中性內容。
