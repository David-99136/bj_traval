const stations = {
  "工人體育場": { lines: ["3", "17"], name: "工人體育場" },
  "東四十條": { lines: ["2", "3"], name: "東四十條" },
  "建國門": { lines: ["1", "2"], name: "建國門" },
  "王府井": { lines: ["1", "8"], name: "王府井" },
  "天安門東": { lines: ["1"], name: "天安門東" },
  "北宮門": { lines: ["4"], name: "北宮門" },
  "圓明園": { lines: ["4"], name: "圓明園" },
  "什剎海": { lines: ["8"], name: "什剎海" },
  "南鑼鼓巷": { lines: ["6", "8"], name: "南鑼鼓巷" },
  "天壇東門": { lines: ["5"], name: "天壇東門" },
  "霍營": { lines: ["8", "13"], name: "霍營" },
  "首都機場": { lines: ["首都機場線"], name: "首都機場" },
  "三元橋": { lines: ["10", "首都機場線"], name: "三元橋" },
  "團結湖": { lines: ["10"], name: "團結湖" },
  "牛街": { lines: ["19"], name: "牛街" },
  "雍和宮": { lines: ["2", "5"], name: "雍和宮" },
  "張自忠路": { lines: ["5"], name: "張自忠路" },
  "前門": { lines: ["2", "8"], name: "前門" },
  "西單": { lines: ["1", "4"], name: "西單" },
  "奧林匹克公園": { lines: ["8", "15"], name: "奧林匹克公園" },
  "國家圖書館": { lines: ["4", "9", "16"], name: "國家圖書館" },
  "動物園": { lines: ["4"], name: "動物園" },
  "望京南": { lines: ["14"], name: "望京南" },
  "棗營": { lines: ["14"], name: "棗營" },
  "東直門": { lines: ["2", "13", "首都機場線"], name: "東直門" },
  "鼓樓大街": { lines: ["2", "8"], name: "鼓樓大街" },
  "平安里": { lines: ["4", "6", "19"], name: "平安里" },
  "燈市口": { lines: ["5"], name: "燈市口" },
  "東單": { lines: ["1", "5"], name: "東單" },
  "和平門": { lines: ["2"], name: "和平門" },
  "崇文門": { lines: ["2", "5"], name: "崇文門" },
};

function mapLink(query) {
  return `https://www.amap.com/search?query=${encodeURIComponent(query)}`;
}

const foods = [
  {
    name: "四季民福（王府井燈市口店）",
    type: "北京烤鴨",
    station: "燈市口",
    address: "王府井 / 燈市口商圈",
    note: "適合排進 Day 1 晚餐，熱門時段排隊很長，建議提早取號。",
    image: "./assets/ppt-39.jpeg",
    link: "https://maps.apple.com/place?auid=1117160141800961&lsp=57879",
  },
  {
    name: "大董烤鴨（工體店）",
    type: "精緻烤鴨",
    station: "工人體育場",
    address: "工人體育場東路 17 號一帶",
    note: "離三里屯與工體動線近，適合抵達日或自由晚餐。",
    image: "./assets/ppt-40.jpeg",
    link: mapLink("大董烤鴨 工人體育場東路17號 北京"),
  },
  {
    name: "便宜坊（鮮魚口店）",
    type: "燜爐烤鴨",
    station: "前門",
    address: "前門鮮魚口老字號餐飲街",
    note: "歷史派烤鴨，可作為四季民福客滿時的備案。",
    image: "./assets/ppt-64.jpeg",
    link: "https://us.trip.com/restaurant/china/beijing/detail/Bianyifang%20Restaurant-11097909/",
  },
  {
    name: "宏源南門涮肉（天壇店）",
    type: "銅鍋涮肉",
    station: "天壇東門",
    address: "永內東街東里 13 號樓 1-2 號",
    note: "適合故宮、景山、什剎海同日安排，麻醬與羊肉是重點。",
    image: "./assets/ppt-42.png",
    link: "https://bj.city8.com/cater/88903v81iv5bbd4034",
  },
  {
    name: "聚寶源（牛街店）",
    type: "牛街老字號",
    station: "牛街",
    address: "牛街清真美食聚集區",
    note: "排隊名店，適合想體驗老北京清真銅鍋涮肉。",
    image: "./assets/ppt-43.png",
    link: mapLink("聚寶源 牛街店 北京"),
  },
  {
    name: "護國寺小吃（護國寺總店）",
    type: "經典小吃",
    station: "平安里",
    address: "西城區護國寺大街 93 號一帶",
    note: "豆汁、焦圈、驢打滾、豌豆黃，適合當北京味覺採樣。",
    image: "./assets/ppt-44.jpeg",
    link: "https://s.visitbeijing.com.cn/food/68",
  },
  {
    name: "胡大飯館（簋街總店）",
    type: "簋街小龍蝦",
    station: "東直門",
    address: "簋街 / 東直門一帶",
    note: "夜間氣氛強，適合行程結束後加碼宵夜。",
    image: "./assets/ppt-45.jpeg",
    link: mapLink("胡大飯館 簋街總店 北京"),
  },
  {
    name: "姚記炒肝（鼓樓店）",
    type: "老北京早餐",
    station: "鼓樓大街",
    address: "東城區鼓樓東大街 311 號",
    note: "可以接什剎海、鼓樓一帶散步，但口味較重。",
    image: "./assets/ppt-46.jpeg",
    link: "https://www.amap.com/place/B000A74A8C",
  },
  {
    name: "全聚德（前門店）",
    type: "百年烤鴨",
    station: "前門",
    address: "前門大街 30 號一帶",
    note: "PPT 指定 Day 5 午餐，適合接故宮、景山、北海動線。",
    image: "./assets/ppt-64.jpeg",
    link: "https://www.quanjude.com.cn/html/businesssector/restaurant/quanjude/",
  },
  {
    name: "全聚德（王府井店）",
    type: "百年烤鴨",
    station: "王府井",
    address: "王府井商圈",
    note: "適合 Day 7 王府井解散後，作為第六季自助以外的烤鴨備案。",
    image: "./assets/ppt-69.jpeg",
    link: mapLink("全聚德 王府井店 北京"),
  },
  {
    name: "全聚德（和平門店）",
    type: "百年烤鴨",
    station: "和平門",
    address: "和平門 / 宣武門一帶",
    note: "大型老字號分店，適合多人團體，建議先查詢包間與團購。",
    image: "./assets/ppt-82.jpeg",
    link: mapLink("全聚德 和平門店 北京"),
  },
  {
    name: "四季民福（故宮店）",
    type: "北京烤鴨",
    station: "天安門東",
    address: "故宮 / 景山周邊",
    note: "適合故宮日備案，但熱門時段排隊壓力通常更高。",
    image: "./assets/ppt-97.jpeg",
    link: mapLink("四季民福 故宮店 北京"),
  },
  {
    name: "第六季自助（王府井店）",
    type: "海鮮自助",
    station: "王府井",
    address: "王府井商圈",
    note: "PPT 指定 Day 7 晚餐，古北水鎮回城後可安排。",
    image: "./assets/ppt-189.jpeg",
    link: "https://tw.trip.com/restaurant/china/beijing/detail/diliujizizhu-restaurant-wangfujingdian-56539486/",
  },
];

const itinerary = [
  {
    day: "Day 1",
    title: "初見北京",
    steps: [
      ["16:05", "桃園機場 T2 起飛，開啟 8 天 7 夜學生旅程。"],
      ["19:30", "抵達北京首都國際機場，轉往三里屯 / 工體住宿。"],
      ["21:00", "三里屯 SOHO 品嘗京味小吃，夜遊太古里。人均預估約 500 TWD。"],
    ],
  },
  {
    day: "Day 2",
    title: "天壇、國博與銅鍋涮肉",
    steps: [
      ["08:00", "民宿附近早餐後，搭地鐵前往天壇公園。"],
      ["09:30", "天壇公園 3 小時，學生聯票約 17 CNY，重點是祈年殿、回音壁、圜丘。"],
      ["14:00", "中國國家博物館室內避暑，免費但需預約。晚餐前門大柵欄，人均預估約 1083 TWD。"],
    ],
  },
  {
    day: "Day 3",
    title: "動物園、海洋館與胡同夜市",
    steps: [
      ["10:00", "北京動物園與海洋館，看大熊貓、海底隧道與表演。"],
      ["16:00", "離園後前往南鑼鼓巷或簋街。"],
      ["18:00", "胡同逛吃與夜市晚餐，推薦烤串、文宇乳酪、炸灌腸、小龍蝦。人均約 1296 TWD。"],
    ],
  },
  {
    day: "Day 4",
    title: "跟團一日遊：長城與皇家園林",
    steps: [
      ["06:30", "五環上車點集合出發，跟團前往八達嶺。"],
      ["全天", "八達嶺長城、頤和園、圓明園、鳥巢 / 水立方外觀。"],
      ["18:00", "新奧購物中心晚餐，可安排按摩放鬆。人均約 1990 TWD。"],
    ],
  },
  {
    day: "Day 5",
    title: "故宮深度遊與全聚德",
    steps: [
      ["08:30", "集合跟團遊故宮，導覽中軸線三大殿、後宮與珍寶館。"],
      ["12:30", "故宮解散後安排全聚德前門店烤鴨午餐。"],
      ["14:00", "景山與北海公園，晚上可轉西單商圈。人均約 2104 TWD。"],
    ],
  },
  {
    day: "Day 6",
    title: "科學技術館、798 與藍色港灣",
    steps: [
      ["上午", "可走 798 藝術區或王府井 / 朝陽公園備案。"],
      ["13:30", "中國科學技術館半日遊，預約與證件需提前確認。"],
      ["晚上", "藍色港灣夜景或三里屯補逛。人均約 725 TWD。"],
    ],
  },
  {
    day: "Day 7",
    title: "古北水鎮與司馬台長城",
    steps: [
      ["08:50", "集合出發跟團，前往古北水鎮。"],
      ["白天", "古北水鎮、司馬台長城、永順染坊、龍鳳池溫泉泡腳。"],
      ["20:30", "王府井解散後第六季自助晚餐。人均約 2800 TWD。"],
    ],
  },
  {
    day: "Day 8",
    title: "返程日：北京到桃園",
    steps: [
      ["09:00", "民宿附近早餐，工體 / 三里屯閒逛並買伴手禮。"],
      ["18:00", "出發前往北京首都機場 T3，建議提前 3 小時辦理登機。"],
      ["20:45", "首都機場起飛，23:55 落地桃園。人均約 380 TWD。"],
    ],
  },
];

const massages = [
  {
    name: "御泉灣養生SPA會所（三里屯SOHO店）",
    tag: "三里屯SOHO",
    address: "三里屯SOHO 周邊",
    prices: ["足療 60分鐘：約 ¥128-198", "中式推拿 60-90分鐘：約 ¥198-298", "SPA/精油 90分鐘：約 ¥398-698"],
    note: "公開地圖頁可查到店名與位置；價格以平台常見團購區間估算，出發前需再核對。",
    image: "./assets/ppt-108.jpeg",
    link: "https://bj.city8.com/leisure/889vok81k3vsb2bbf5",
  },
  {
    name: "三人行華清池・修腳・按摩・養生（工體旗艦店）",
    tag: "工體",
    address: "工人體育場 / 三里屯商圈",
    prices: ["修腳/采耳：約 ¥68-128", "足療 60分鐘：約 ¥88-168", "肩頸/推拿：約 ¥99-198"],
    note: "大眾點評可查到店名與團購入口，適合走很多路後做足部護理。",
    image: "./assets/ppt-109.jpeg",
    link: "https://m.dianping.com/shop/91003225?msource=applemaps",
  },
  {
    name: "凱富溫泉俱樂部（凱富大廈店）",
    tag: "工體北路",
    address: "工體北路 6 號凱富大廈 12-14 層",
    prices: ["溫泉/休閒門票：約 ¥298-498", "全身按摩 60分鐘：約 ¥298 起", "熱石/精油/定制護理：約 ¥598 起"],
    note: "高端溫泉 SPA 型，適合長城或古北水鎮後放鬆，預算要抓高。",
    image: "./assets/ppt-128.png",
    link: "https://huodong.com/venue/detail/eydwX",
  },
  {
    name: "吾時ME SPA會館",
    tag: "三里屯SOHO",
    address: "工人體育場北路 8 號院 SOHO 3 號商場 3 層 3315",
    prices: ["芳香 SPA 60分鐘：約 ¥298-398", "精油按摩 90分鐘：約 ¥498-698", "雙人/套票：約 ¥698 起"],
    note: "公開頁可查到三里屯 SOHO 地址，適合安排在住宿附近。",
    image: "./assets/ppt-130.jpeg",
    link: "https://wanfuwenhua.com/plugin.php?id=mini_sjdp&mod=view&sid=153",
  },
  {
    name: "悠庭保健會所（三里屯店）",
    tag: "三里屯",
    address: "三里屯商圈",
    prices: ["足療：約 ¥138-198", "中式按摩：約 ¥198-328", "油壓/SPA：約 ¥398-688"],
    note: "夜西游三里屯 SPA 列表可見此店，建議再以高德確認營業。",
    image: "./assets/ppt-141.png",
    link: "https://m.yexiyou.com/anmo/search_1_10_107___5_/",
  },
  {
    name: "龍泉灣SPA養生會所",
    tag: "三里屯",
    address: "三里屯商圈",
    prices: ["足部舒緩：約 ¥128-198", "全身推拿：約 ¥198-298", "SPA 套餐：約 ¥398-698"],
    note: "夜西游三里屯 SPA 列表可見此店名，價格需以店內/平台為準。",
    image: "./assets/ppt-144.jpeg",
    link: "https://m.yexiyou.com/anmo/search_1_10_107___5_/",
  },
  {
    name: "海宜元・熱敷推拿・中式足療（三里屯SOHO店）",
    tag: "三里屯SOHO",
    address: "三里屯 SOHO 周邊",
    prices: ["熱敷肩頸：約 ¥99-168", "中式推拿：約 ¥168-268", "足療：約 ¥128-198"],
    note: "以高德/點評搜尋店名較容易定位，適合需要肩頸熱敷的人。",
    image: "./assets/ppt-153.png",
    link: mapLink("海宜元 熱敷推拿 中式足療 三里屯SOHO店"),
  },
  {
    name: "柔蔓・泰式龍抓筋・SPA按摩（三里屯店）",
    tag: "三里屯",
    address: "三里屯商圈",
    prices: ["泰式拉伸：約 ¥198-328", "龍抓筋/深層：約 ¥298-498", "精油 SPA：約 ¥398-698"],
    note: "偏泰式/筋膜放鬆，適合長時間步行後，但力道需先和技師確認。",
    image: "./assets/ppt-172.png",
    link: mapLink("柔蔓 泰式龍抓筋 SPA按摩 三里屯店"),
  },
  {
    name: "無名小足（三里屯）",
    tag: "足療",
    address: "三里屯周邊",
    prices: ["足療：約 ¥98-168", "足療+肩頸：約 ¥168-238", "修腳：約 ¥68-128"],
    note: "Apple/地圖平台可搜到名稱，屬於輕量足療備案。",
    image: "./assets/ppt-189.jpeg",
    link: mapLink("無名小足 三里屯 北京"),
  },
  {
    name: "川耳坊采耳頭療（三里屯/工體）",
    tag: "采耳頭療",
    address: "三里屯 / 工體周邊",
    prices: ["采耳：約 ¥88-158", "頭療：約 ¥128-228", "采耳+肩頸：約 ¥168-298"],
    note: "適合不想做全身按摩、只想放鬆頭肩的人。",
    image: "./assets/ppt-210.jpeg",
    link: mapLink("川耳坊 采耳 頭療 三里屯 工體"),
  },
  {
    name: "悅耳閣采耳・頭療（三里屯）",
    tag: "采耳",
    address: "三里屯商圈",
    prices: ["基礎采耳：約 ¥88-128", "頭部舒緩：約 ¥128-198", "采耳+頭療：約 ¥198-298"],
    note: "以高德搜尋作為定位入口，價格按同類店型估算。",
    image: "./assets/ppt-108.jpeg",
    link: mapLink("悅耳閣 采耳 頭療 三里屯"),
  },
  {
    name: "鄭遠元專業修腳房（三里屯/工體）",
    tag: "修腳連鎖",
    address: "三里屯 / 工體周邊",
    prices: ["修腳：約 ¥68-128", "足療：約 ¥98-168", "灰指甲/護理類：依項目報價"],
    note: "連鎖修腳型，適合腳底硬皮、水泡或長走路後簡單處理。",
    image: "./assets/ppt-109.jpeg",
    link: mapLink("鄭遠元 專業修腳房 三里屯 工體"),
  },
  {
    name: "Kocoon 香薰理療（三里屯）",
    tag: "香薰理療",
    address: "三里屯商圈",
    prices: ["香薰放鬆：約 ¥398-588", "深層理療：約 ¥498-788", "高階 SPA：約 ¥888 起"],
    note: "偏中高價位精油理療，適合想要環境安靜的行程尾聲。",
    image: "./assets/ppt-128.png",
    link: mapLink("Kocoon 香薰 理療 三里屯"),
  },
  {
    name: "泰享受 Thai SPA（三里屯）",
    tag: "泰式",
    address: "三里屯商圈",
    prices: ["泰式古法：約 ¥198-328", "精油按摩：約 ¥398-598", "雙人套餐：約 ¥698 起"],
    note: "泰式拉伸較有強度，長城日後可選中等力道。",
    image: "./assets/ppt-130.jpeg",
    link: mapLink("泰享受 Thai SPA 三里屯"),
  },
  {
    name: "樱蘭全息養生館（三里屯/工體）",
    tag: "養生館",
    address: "三里屯 / 工體周邊",
    prices: ["全息調理：約 ¥198-398", "肩頸腰背：約 ¥168-298", "精油護理：約 ¥398-698"],
    note: "適合需要肩頸腰背調理的人；請以平台團購頁確認實際項目。",
    image: "./assets/ppt-141.png",
    link: mapLink("樱蘭 全息 養生館 三里屯 工體"),
  },
];

const guideSections = {
  food: {
    label: "吃",
    items: [
      ["北京烤鴨", "四季民福、全聚德、便宜坊分別代表熱門排隊、老字號掛爐、燜爐路線。多人團建議先查團購與取號。", "./assets/ppt-39.jpeg", "https://www.quanjude.com.cn/html/businesssector/restaurant/quanjude/"],
      ["銅鍋涮肉", "天壇日可接宏源南門涮肉，牛街可接聚寶源；麻醬、羊肉、糖蒜是核心體驗。", "./assets/ppt-42.png", mapLink("宏源南門涮肉 天壇店 北京")],
      ["胡同夜市", "南鑼鼓巷、簋街適合 Day 3 晚上，主打烤串、炸灌腸、文宇乳酪、麻辣小龍蝦。", "./assets/ppt-45.jpeg", mapLink("南鑼鼓巷 簋街 美食 北京")],
      ["老北京小吃", "護國寺小吃、姚記炒肝、牛街洪記可補足豆汁、焦圈、驢打滾、炒肝等在地味道。", "./assets/ppt-46.jpeg", "https://www.reddit.com/r/travelchina/comments/1rkcxgj/beijing_food_guide_by_subway_line_plan_your/"],
    ],
  },
  shopping: {
    label: "購物",
    items: [
      ["三里屯太古里", "離住宿最近，適合潮流、精品、餐飲與夜景；也是北京國際化程度最高的商圈之一。", "./assets/ppt-09.jpeg", "https://www.travelchinaguide.com/cityguides/beijing/taikoo-li-sanlitun.htm"],
      ["王府井", "Day 7 解散與 Day 8 伴手禮可用，老字號、商場與餐飲集中。", "./assets/ppt-69.jpeg", mapLink("王府井 步行街 北京")],
      ["西單商圈", "年輕人向購物區，適合 Day 5 晚餐後順路逛街。", "./assets/ppt-82.jpeg", "https://www.chinahighlights.com/beijing/article-best-shopping-areas.htm"],
      ["藍色港灣", "Day 6 夜景備案，商場加湖景，拍照比純購物更有價值。", "./assets/ppt-141.png", mapLink("藍色港灣 北京")],
    ],
  },
  planned: {
    label: "你會到的景點",
    items: [
      ["天壇公園", "PPT Day 2 核心景點；官方資料顯示 5 號線天壇東門站可到，旺季學生聯票為 ¥17。", "./assets/ppt-128.png", "https://english.beijing.gov.cn/specials/parktours/guidevisitors/templeofheaven/"],
      ["中國國家博物館", "Day 2 下午室內避暑，免費但預約很關鍵，建議排在 13:30-16:00。", "./assets/ppt-130.jpeg", mapLink("中國國家博物館 北京")],
      ["北京動物園與海洋館", "Day 3 全天主軸，熊貓館、海洋館、表演時間要先看當日公告。", "./assets/ppt-153.png", mapLink("北京動物園 北京海洋館")],
      ["八達嶺長城", "Day 4 跟團主景點，夏天務必防曬、補水，長城日不建議排太多夜間活動。", "./assets/ppt-172.png", mapLink("八達嶺長城 北京")],
      ["故宮、景山、北海", "Day 5 歷史密度最高，故宮建議跟團聽講解；景山可俯瞰紫禁城軸線。", "./assets/ppt-02.jpeg", mapLink("故宮 景山 北海公園 北京")],
      ["798、科學技術館、古北水鎮", "Day 6-7 從文藝、科普到水鎮夜景，行程節奏差異大，適合做照片主題頁。", "./assets/ppt-210.jpeg", mapLink("798藝術區 中國科學技術館 古北水鎮")],
    ],
  },
  popular: {
    label: "其他高人氣",
    items: [
      ["慕田峪長城", "比八達嶺更偏風景與體力路線，若不跟團可作為長城替代方案。", "./assets/ppt-172.png", mapLink("慕田峪長城 北京")],
      ["雍和宮", "北京香火與藏傳佛教文化熱點，可接五道營胡同。", "./assets/ppt-144.jpeg", mapLink("雍和宮 北京")],
      ["五道營胡同", "比南鑼鼓巷更安靜的胡同咖啡與小店路線。", "./assets/ppt-47.jpeg", mapLink("五道營胡同 北京")],
      ["什剎海", "晚間散步、胡同、水岸與銅鍋涮肉可串在一起。", "./assets/ppt-96.jpeg", mapLink("什剎海 北京")],
      ["奧林匹克公園", "鳥巢、水立方夜景比白天更值得拍。", "./assets/ppt-97.jpeg", mapLink("奧林匹克公園 鳥巢 水立方 北京")],
      ["前門大柵欄", "老字號、美食街、北京中軸線氣氛強，可接全聚德前門店。", "./assets/ppt-64.jpeg", mapLink("前門 大柵欄 北京")],
      ["朝陽公園", "住宿附近的低負擔備案，適合 Day 6 或返程日前散步。", "./assets/ppt-141.png", mapLink("朝陽公園 北京")],
      ["牛街", "清真小吃與聚寶源、洪記小吃，適合補一條純吃路線。", "./assets/ppt-43.png", mapLink("牛街 北京 美食")],
      ["潘家園", "舊物、文玩與市集感，適合喜歡淘貨的人。", "./assets/ppt-153.png", mapLink("潘家園 北京")],
      ["北京環球度假區", "若有整天空檔才適合加，交通與門票預算都較高。", "./assets/ppt-189.jpeg", mapLink("北京環球度假區")],
    ],
  },
};

const galleryImages = [
  "ppt-02.jpeg", "ppt-09.jpeg", "ppt-39.jpeg", "ppt-40.jpeg", "ppt-42.png",
  "ppt-43.png", "ppt-44.jpeg", "ppt-45.jpeg", "ppt-46.jpeg", "ppt-47.jpeg",
  "ppt-64.jpeg", "ppt-69.jpeg", "ppt-82.jpeg", "ppt-96.jpeg", "ppt-97.jpeg",
  "ppt-108.jpeg", "ppt-128.png", "ppt-130.jpeg", "ppt-141.png", "ppt-144.jpeg",
  "ppt-153.png", "ppt-172.png", "ppt-189.jpeg", "ppt-210.jpeg",
];

function closestStation(input) {
  const text = input.trim();
  if (!text) return null;
  return Object.values(stations).find((station) => text.includes(station.name)) || null;
}

function findFood(input) {
  const text = input.trim().toLowerCase();
  return foods.find((food) => food.name.toLowerCase().includes(text) || text.includes(food.name.toLowerCase().replace(/（.*?）/g, "")));
}

function routeText(start, targetStation) {
  const shared = start.lines.find((line) => targetStation.lines.includes(line));
  if (shared) {
    return `從 ${start.name} 搭 ${shared} 號線，往 ${targetStation.name} 方向下車。`;
  }

  const startLine = start.lines[0];
  const targetLine = targetStation.lines[0];
  return `從 ${start.name} 先搭 ${startLine} 號線，依地鐵圖轉乘到 ${targetLine} 號線，最後於 ${targetStation.name} 下車。若出發點在工體，常用轉乘是東四十條、建國門、雍和宮或南鑼鼓巷。`;
}

function renderRoute() {
  const result = document.querySelector("#routeResult");
  const start = closestStation(document.querySelector("#startStation").value);
  const food = findFood(document.querySelector("#foodName").value);

  if (!start || !food) {
    result.style.display = "block";
    result.innerHTML = "請輸入可辨識的入站點與美食名稱。範例：工人體育場 + 四季民福。";
    return;
  }

  const target = stations[food.station];
  result.style.display = "block";
  result.innerHTML = `
    <strong>前往 ${food.name}</strong><br>
    目的地類型：${food.type}<br>
    最近站點：${target.name}<br>
    搭乘流程：${routeText(start, target)}<br>
    到站後：出站後以高德地圖步行導航到店，熱門餐廳建議先排號。
  `;
}

function renderFood() {
  const grid = document.querySelector("#foodGrid");
  grid.innerHTML = foods.map((food) => `
    <article class="food-card">
      <a class="image-link" href="${food.link}" target="_blank" rel="noopener noreferrer" aria-label="開啟 ${food.name} 分店地圖">
        <img src="${food.image}" alt="${food.name}" loading="lazy">
      </a>
      <div>
        <span class="tag">${food.type}</span>
        <h3><a href="${food.link}" target="_blank" rel="noopener noreferrer">${food.name}</a></h3>
        <p>${food.address}｜最近站：${food.station}</p>
        <p>${food.note}</p>
      </div>
    </article>
  `).join("");

  document.querySelector("#stationOptions").innerHTML = Object.keys(stations)
    .map((station) => `<option value="${station}"></option>`)
    .join("");
  document.querySelector("#foodOptions").innerHTML = foods
    .map((food) => `<option value="${food.name}"></option>`)
    .join("");
}

function renderItinerary(activeIndex = 0) {
  const tabs = document.querySelector("#dayTabs");
  const timeline = document.querySelector("#timeline");
  tabs.innerHTML = itinerary.map((day, index) => `
    <button class="day-tab ${index === activeIndex ? "active" : ""}" data-day="${index}">
      ${day.day}
    </button>
  `).join("");
  const active = itinerary[activeIndex];
  timeline.innerHTML = active.steps.map(([time, text]) => `
    <article class="day-card">
      <div class="time">${time}</div>
      <div>
        <h3>${active.title}</h3>
        <p>${text}</p>
      </div>
    </article>
  `).join("");
}

function renderGuide(activeKey = "food") {
  const tabs = document.querySelector("#guideTabs");
  const grid = document.querySelector("#guideGrid");
  tabs.innerHTML = Object.entries(guideSections).map(([key, section]) => `
    <button class="guide-tab ${key === activeKey ? "active" : ""}" data-guide="${key}">
      ${section.label}
    </button>
  `).join("");

  grid.innerHTML = guideSections[activeKey].items.map(([title, note, image, link]) => `
    <article class="guide-card panel">
      <a class="image-link" href="${link}" target="_blank" rel="noopener noreferrer" aria-label="開啟 ${title} 參考資料">
        <img src="${image}" alt="${title}" loading="lazy">
      </a>
      <div>
        <span class="tag">${guideSections[activeKey].label}</span>
        <h3>${title}</h3>
        <p>${note}</p>
        <a class="source-link" href="${link}" target="_blank" rel="noopener noreferrer">查看參考 / 地圖</a>
      </div>
    </article>
  `).join("");
}

function renderMassage() {
  document.querySelector("#massageGrid").innerHTML = massages.map((item) => `
    <article class="massage-card">
      <a class="image-link" href="${item.link}" target="_blank" rel="noopener noreferrer" aria-label="開啟 ${item.name} 地圖或參考資料">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </a>
      <div>
        <span class="tag">${item.tag}</span>
        <h3><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.name}</a></h3>
        <p>${item.address}</p>
        <ul class="price-list">
          ${item.prices.map((price) => `<li>${price}</li>`).join("")}
        </ul>
        <p>${item.note}</p>
        <a class="source-link" href="${item.link}" target="_blank" rel="noopener noreferrer">查地圖 / 來源</a>
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  document.querySelector("#gallery").innerHTML = galleryImages.map((query, index) => `
    <a href="./assets/${query}" target="_blank" rel="noopener noreferrer">
      <img src="./assets/${query}" alt="北京旅程圖片 ${index + 1}" loading="lazy">
    </a>
  `).join("");
}

let zoom = 1;
const map = document.querySelector("#metroMap");
const viewport = document.querySelector("#mapViewport");

function setZoom(nextZoom) {
  zoom = Math.min(2.4, Math.max(0.55, nextZoom));
  map.style.transform = `scale(${zoom})`;
}

document.querySelector("#zoomIn").addEventListener("click", () => setZoom(zoom + 0.2));
document.querySelector("#zoomOut").addEventListener("click", () => setZoom(zoom - 0.2));
document.querySelector("#zoomReset").addEventListener("click", () => {
  setZoom(1);
  viewport.scrollTo({ left: 0, top: 0, behavior: "smooth" });
});

let dragging = false;
let startX = 0;
let startY = 0;
let scrollLeft = 0;
let scrollTop = 0;

viewport.addEventListener("pointerdown", (event) => {
  dragging = true;
  viewport.setPointerCapture(event.pointerId);
  startX = event.clientX;
  startY = event.clientY;
  scrollLeft = viewport.scrollLeft;
  scrollTop = viewport.scrollTop;
  viewport.style.cursor = "grabbing";
});

viewport.addEventListener("pointermove", (event) => {
  if (!dragging) return;
  viewport.scrollLeft = scrollLeft - (event.clientX - startX);
  viewport.scrollTop = scrollTop - (event.clientY - startY);
});

viewport.addEventListener("pointerup", () => {
  dragging = false;
  viewport.style.cursor = "grab";
});

document.querySelector("#routeButton").addEventListener("click", renderRoute);
document.querySelector("#dayTabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-day]");
  if (button) renderItinerary(Number(button.dataset.day));
});

document.querySelector("#guideTabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-guide]");
  if (button) renderGuide(button.dataset.guide);
});

renderFood();
renderItinerary();
renderGuide();
renderMassage();
renderGallery();
