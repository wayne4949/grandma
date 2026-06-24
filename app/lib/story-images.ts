// 圖片 manifest：把每頁對到 public/story/pages/ 的圖檔。
// src 為「根相對路徑」（以 / 開頭），不要手動加 basePath：
// StoryImage 以 next/image 顯示，並用 asset() 補上 basePath；圖檔未到位時 onError
// 會自動退回純色塊＋頁碼佔位圖。老闆用 Gemini 生 p01–p32.png，覆蓋同名檔即顯示。

export interface StoryImage {
  src: string | null;
  alt: string;
  placeholderLabel: string;
}

export const storyImages: Record<string, StoryImage> = {
  // ===== 第一幕・接單 =====
  "P.1": {
    src: "/story/pages/p01.png",
    alt: "天拄光的老灶間，大鼎掛著、蒸氣初起，黑貓阿咪睡在灶邊，桃姨的背影正在綁圍裙。",
    placeholderLabel: "灶頂的早晨",
  },
  "P.2": {
    src: "/story/pages/p02.png",
    alt: "桃姨、學徒孫子阿明、黑貓阿咪與四十年的老鼎四格並列登場。",
    placeholderLabel: "阮三个kap一口鼎",
  },
  "P.3": {
    src: "/story/pages/p03.png",
    alt: "灶桌上一張紅色辦桌訂單，只寫十道、傍晚開桌、地點廟埕，辦給誰那欄空空的。",
    placeholderLabel: "一張紅單",
  },
  "P.4": {
    src: "/story/pages/p04.png",
    alt: "紅單放大，十道菜名與所需主料一字排開。",
    placeholderLabel: "讀單",
  },
  "P.5": {
    src: "/story/pages/p05.png",
    alt: "桃姨在小黑板上把一桌拆成三站：備料站、火頭站、出菜站。",
    placeholderLabel: "拆場",
  },

  // ===== 第二幕・備辦 =====
  "P.6": {
    src: "/story/pages/p06.png",
    alt: "桃姨與阿明提著菜籃出門，晨光斜照。",
    placeholderLabel: "出發去市場",
  },
  "P.7": {
    src: "/story/pages/p07.png",
    alt: "傳統市場肉攤前並排三塊五花肉，肥瘦比例各不同，桃姨要阿明挑三比七那塊。",
    placeholderLabel: "揀五花肉",
  },
  "P.8": {
    src: "/story/pages/p08.png",
    alt: "灶台上醬油、米酒、冰糖、蒜頭、五香粉、薑一字排開的特寫。",
    placeholderLabel: "認食材",
  },
  "P.9": {
    src: "/story/pages/p09.png",
    alt: "一大鍋高湯在滾，旁邊列著幾道待用的湯品，這鍋湯底要餵整桌的菜。",
    placeholderLabel: "高湯底",
  },
  "P.10": {
    src: "/story/pages/p10.png",
    alt: "三口爐火點起，桃姨指揮阿明把鼎一一上爐，排兵布陣。",
    placeholderLabel: "起灶",
  },
  "P.11": {
    src: "/story/pages/p11.png",
    alt: "控肉一道菜的五張步驟卡被打散，等著排出正確順序。",
    placeholderLabel: "排步驟",
  },
  "P.12": {
    src: "/story/pages/p12.png",
    alt: "控肉、炒時蔬、煮湯三道菜並列，共同步驟都是爆香，並共用一鍋高湯底。",
    placeholderLabel: "揣規律",
  },
  "P.13": {
    src: "/story/pages/p13.png",
    alt: "三口爐同時跑著不同進度的菜，桃姨眼觀四面調度時間與火力。",
    placeholderLabel: "多爐並進",
  },
  "P.14": {
    src: "/story/pages/p14.png",
    alt: "招牌控肉正要落醬上色，那瓶上好的老豆油剛好見底，窗外天色暗下，阿明緊張。",
    placeholderLabel: "老豆油焦去",
  },
  "P.15": {
    src: "/story/pages/p15.png",
    alt: "桃姨手起手落用蠔油加糖救場，側邊一張泛黃的老照片。",
    placeholderLabel: "急中生智",
  },
  "P.16": {
    src: "/story/pages/p16.png",
    alt: "塞滿瓶罐的冰箱，要在番茄醬、養樂多、牛奶、果醬、沙拉醬中鎖定蠔油。",
    placeholderLabel: "揣冰櫥",
  },
  "P.17": {
    src: "/story/pages/p17.png",
    alt: "擬真食物特寫：油亮的控肉與蒸氣；阿明洗鼎翻面，瞥見鼎底刻著阿桃兩字。",
    placeholderLabel: "老鼎會講話",
  },
  "P.18": {
    src: "/story/pages/p18.png",
    alt: "三口爐各自進度，桃姨心中盤點哪鼎好了、還缺哪幾道。",
    placeholderLabel: "點數",
  },
  "P.19": {
    src: "/story/pages/p19.png",
    alt: "阿明把手機計時器與清單 app 排出來，幫桃姨盯著各爐的時間。",
    placeholderLabel: "學徒上手",
  },
  "P.20": {
    src: "/story/pages/p20.png",
    alt: "十道菜接近完成，香氣四溢，遠處有人陸續往廟埕走來。",
    placeholderLabel: "人客欲到矣",
  },

  // ===== 第三幕・開桌 =====
  "P.21": {
    src: "/story/pages/p21.png",
    alt: "出菜台上十道菜一字排開，桃姨擦著汗，滿意地準備上菜。",
    placeholderLabel: "排盤",
  },
  "P.22": {
    src: "/story/pages/p22.png",
    alt: "擬真食物大特寫：紅蟳米糕、白斬雞、控肉、四神湯，蒸氣油光，一道道捀上桌。",
    placeholderLabel: "上菜",
  },
  "P.23": {
    src: "/story/pages/p23.png",
    alt: "紅色塑膠桌坐滿了人，全是鄰里、舊識、三代家人，主桌中央留著一個位。",
    placeholderLabel: "入座",
  },
  "P.24": {
    src: "/story/pages/p24.png",
    alt: "阿明把桃姨牽到主桌中央那個位，眾人舉杯；紅單空白那欄翻面寫著謝桃姨。",
    placeholderLabel: "大揭露",
  },
  "P.25": {
    src: "/story/pages/p25.png",
    alt: "桃姨望著滿桌人眼角濕潤，蒙太奇小格閃過她年輕學藝、第一次辦桌、養大一家的畫面。",
    placeholderLabel: "回望",
  },
  "P.26": {
    src: "/story/pages/p26.png",
    alt: "桃姨把刻著阿桃的老鼎連同磨亮的木鏟，交到阿明手上。",
    placeholderLabel: "交鏟",
  },
  "P.27": {
    src: "/story/pages/p27.png",
    alt: "全景：紅桌、暖燈、笑聲，三代與鄰里同席圍著桃姨。",
    placeholderLabel: "一桌人",
  },
  "P.28": {
    src: "/story/pages/p28.png",
    alt: "半年後，阿明繫著藍圍裙在另一場辦桌指揮三口爐，手機計時器排得整整齊齊。",
    placeholderLabel: "阿明掌一桌",
  },
  "P.29": {
    src: "/story/pages/p29.png",
    alt: "桃姨坐在台下，夾一口阿明做的菜點頭，嘴角偷笑。",
    placeholderLabel: "桃姨做人客",
  },
  "P.30": {
    src: "/story/pages/p30.png",
    alt: "呼應封面：老灶間天剛亮，鼎掛著、黑貓睡灶邊，綁圍裙的背影換成了阿明。",
    placeholderLabel: "老鼎的早晨",
  },
  "P.31": {
    src: "/story/pages/p31.png",
    alt: "一頁食譜卡，收錄今天這桌十道菜（含蠔油救場菜）的簡要做法，可印可帶走。",
    placeholderLabel: "食譜卡",
  },
  "P.32": {
    src: "/story/pages/p32.png",
    alt: "結語頁：拆場、揣規律、排時間、隨機應變，煮一桌菜如此，過一世人也如此。",
    placeholderLabel: "結語",
  },
};
