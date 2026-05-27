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
    name: "工體 / 三里屯足療",
    tag: "近住宿",
    note: "適合 Day 1 或 Day 3 晚上，優先找評價穩定、可線上預約的連鎖足療。",
    image: "./assets/ppt-108.jpeg",
  },
  {
    name: "什剎海周邊肩頸放鬆",
    tag: "故宮日後",
    note: "Day 2 步行量大，晚間可選肩頸與足底組合，避免隔天園林日疲勞。",
    image: "./assets/ppt-109.jpeg",
  },
  {
    name: "長城日後足底按摩",
    tag: "高步行量",
    note: "Day 4 最建議安排足底與小腿放鬆，時間抓 60 到 90 分鐘較剛好。",
    image: "./assets/ppt-128.png",
  },
];

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

function renderMassage() {
  document.querySelector("#massageGrid").innerHTML = massages.map((item) => `
    <article class="massage-card">
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <div>
        <span class="tag">${item.tag}</span>
        <h3>${item.name}</h3>
        <p>${item.note}</p>
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

renderFood();
renderItinerary();
renderMassage();
renderGallery();
