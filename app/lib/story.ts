// 《阿桃師的辦桌》── 全部頁面資料與活動設定。
// 內容權威：STORY_CANON_C_辦桌_v2.md。標 [canon] 的旁白／對白逐字取自第六章逐頁腳本，
// 請勿改寫；活動頁僅有「任務」描述者，旁白為依第十節語氣鐵則 authored 的銜接句
// （桃姨台語碎念、含蓄具體、台語單字夾國語、句尾加「啦喔啊」、避免完整台語長句）。
// 鐵則：桃姨全程是主角與專家；無人去世；任何頁面／活動／回饋不得出現失憶／失智醫療字眼。

export type ActivityKind =
  | "menuRead"
  | "ingredient"
  | "marketPick"
  | "stepSort"
  | "pattern"
  | "condition"
  | "memory"
  | "decompose"
  | "fridgeSearch"
  | "scheduleStoves"
  | "heatControl";

export interface Dialogue {
  /** 角色名；旁白式舞台指示（整句括號）為 null */
  speaker: string | null;
  text: string;
}

export interface Page {
  id: string; // 例：P.1
  title: string;
  narration: string;
  dialogue: Dialogue[];
  /** 該頁對應的互動活動 id；故事頁只放一顆選配深連結，不在故事流硬插測驗 */
  activity?: ActivityKind;
  /** 紅單機關頁：P.3 空白、P.24 翻面成「謝桃姨」 */
  redSlip?: "blank" | "reveal";
  /** 擬真食物特寫頁：版面讓圖滿版、文字最少 */
  fullBleed?: boolean;
}

// ── 32 頁・三幕結構（逐頁照 canon §6） ──
export const pages: Page[] = [
  // ===== 第一幕・接單（這桌的開始） =====
  {
    id: "P.1",
    title: "封面 ── 灶頂的早晨",
    narration: "今仔日，這口灶欲煮一桌人的代誌。", // [canon]
    dialogue: [
      { speaker: null, text: "（天拄光，老灶間。大鼎掛咧，蒸氣初起，黑貓阿咪睏佇灶邊。桃姨的背影咧縛圍裙。）" },
    ],
  },
  {
    id: "P.2",
    title: "人物登場 ── 阮三个kap一口鼎",
    narration: "桃姨、阿明、黑貓阿咪，閣有彼口四十冬的老鼎，今仔日欲做伙撐起一桌。",
    dialogue: [
      { speaker: "桃姨", text: "鼎仔，今仔日換你出場啊。" }, // [canon]
      { speaker: "阿明", text: "（舉手機）阿嬤，我錄起來喔。" }, // [canon]
    ],
  },
  {
    id: "P.3",
    title: "一張紅單 ── 今仔日有一桌",
    narration: "紅單來矣，啥人欲辦的？頂懸無寫清楚。", // [canon]
    dialogue: [
      { speaker: "阿明", text: "這是辦予啥人的？" }, // [canon]
      { speaker: "桃姨", text: "免問遐濟，先煮就著。" }, // [canon]
    ],
    redSlip: "blank",
  },
  {
    id: "P.4",
    title: "讀單 ── 這桌欲幾道菜？",
    narration: "紅單頂懸，十道菜一字排開。逐道欲用著啥物主料，先讀予清楚。",
    dialogue: [
      { speaker: "桃姨", text: "看單愛看予明，菜名、主料對予著，才袂落勾。" },
    ],
    activity: "menuRead",
  },
  {
    id: "P.5",
    title: "拆場 ── 一桌按怎變十道菜",
    narration: "桃姨佇細塊烏枋頂懸，共規桌拆做三站：備料站、火頭站、出菜站。",
    dialogue: [
      { speaker: "桃姨", text: "規桌看著驚，拆做三堆就袂亂。" }, // [canon]
    ],
    activity: "decompose",
  },

  // ===== 第二幕・備辦（規工的火） =====
  {
    id: "P.6",
    title: "出發去市場",
    narration: "欲辦好一桌，代先愛揀好料。", // [canon]
    dialogue: [
      { speaker: null, text: "（桃姨kap阿明提菜籃出門，晨光斜照。）" },
    ],
  },
  {
    id: "P.7",
    title: "揀肉 ── 五花肉肥瘦三比七",
    narration: "肉攤頭前园三塊五花肉。桃姨叫阿明揀彼塊「肥瘦三比七」的。",
    dialogue: [
      { speaker: "桃姨", text: "我頭一擺綴師父來市仔，連肉都袂曉揀…" }, // [canon]〈回憶〉
      { speaker: "桃姨", text: "肥的三分、瘦的七分，燉起來才袂柴，嘛袂傷油。" },
    ],
    activity: "marketPick",
  },
  {
    id: "P.8",
    title: "認食材 ── 逐項攏有名有來歷",
    narration: "轉去灶間，醬油、米酒、冰糖、蒜頭、五香粉、薑，一字排開。逐項攏有名有來歷。",
    dialogue: [
      { speaker: "桃姨", text: "醬油揀甘甜的，冰糖落少少，色才會水。" }, // [canon]〈師父口訣〉
    ],
    activity: "ingredient",
  },
  {
    id: "P.9",
    title: "高湯底 ── 逐鍋湯的根",
    narration: "一鍋好湯底，欲飼規桌的菜。", // [canon]
    dialogue: [
      { speaker: null, text: "（一大鍋高湯咧滾，邊仔列幾若道欲用的湯品。）" },
    ],
  },
  {
    id: "P.10",
    title: "起灶 ── 三口爐排兵布陣",
    narration: "三口爐，十道菜，時間干焦遮爾濟。", // [canon]
    dialogue: [
      { speaker: "桃姨", text: "三口爐點予著，鼎一鼎一鼎排予好。" },
    ],
  },
  {
    id: "P.11",
    title: "排步驟 ── 控肉愛代先滷",
    narration: "控肉一道菜的步驟卡拍散去矣。愛照正確的順序排予好。",
    dialogue: [
      { speaker: "桃姨", text: "順序毋著，味就走精。一步一步來。" },
    ],
    activity: "stepSort",
  },
  {
    id: "P.12",
    title: "一目了然 ── 這幾道攏愛先爆香",
    narration: "控肉、炒時蔬、煮湯三道並排。揣看覓，啥物步驟逐道攏有？",
    dialogue: [
      { speaker: "桃姨", text: "學會一个規律，較贏記十道菜。" }, // [canon]
    ],
    activity: "pattern",
  },
  {
    id: "P.13",
    title: "多爐並進 ── 同齊顧三鼎",
    narration: "三口爐，仝齊咧走無仝進度的菜。共逐道排予好，開桌的時陣攏愛燒燙燙。",
    dialogue: [
      { speaker: "桃姨", text: "目睭顧四面，時間捏予準，無一鼎會冷去。" },
    ],
    activity: "scheduleStoves",
  },
  {
    id: "P.14",
    title: "危機 ── 上好的老豆油，拄仔用焦！",
    narration:
      "招牌控肉拄欲落醬上色，彼矸上好的老豆油拄好焦去。窗外天色暗落來，人客的跤步聲愈來愈近。",
    dialogue: [
      { speaker: "桃姨", text: "（眉頭一結）…偏偏這時陣。" },
      { speaker: "阿明", text: "（緊張）阿嬤，按怎辦？" },
    ],
    activity: "condition",
  },
  {
    id: "P.15",
    title: "急中生智 ── 師父嘛捌按呢烏白舞",
    narration: "幾十年前彼擺，料無夠，伊嘛是按呢舞舞咧，煞舞出一道成名菜。", // [canon]〈回憶〉
    dialogue: [
      { speaker: null, text: "（桃姨手起手落，蠔油加糖救場；側邊一張反黃的老照片。）" },
    ],
  },
  {
    id: "P.16",
    title: "揣冰櫥 ── 佗一矸是蠔油",
    narration: "冰櫥內底塞甲滿滿是。佇遮濟矸罐內底，鎖定彼矸蠔油。",
    dialogue: [
      { speaker: "桃姨", text: "色較深、較稠彼矸，就是蠔油。" },
    ],
    activity: "fridgeSearch",
  },
  {
    id: "P.17",
    title: "收汁的聲 ── 老鼎會講話",
    narration: "油亮的控肉、蒸氣、肉的紋理。阿明洗鼎反面，瞥著鼎底刻字。",
    dialogue: [
      { speaker: "阿明", text: "阿嬤，鼎仔下跤刻『阿桃』…" }, // [canon]
      { speaker: "桃姨", text: "（停一下）…彼是師父刻的。" }, // [canon]
    ],
    fullBleed: true,
  },
  {
    id: "P.18",
    title: "點數 ── 閣欠佗幾道、佗鼎好矣",
    narration: "三口爐各自的進度，桃姨心內咧盤算。佗一鼎好矣？閣欠佗幾道？",
    dialogue: [
      { speaker: "桃姨", text: "阿明，你共我鬥相共記咧——佗鼎园啥，佗道好矣？" },
    ],
    activity: "memory",
  },
  {
    id: "P.19",
    title: "學徒上手 ── 阿明用手機鬥相共",
    narration: "阿明共計時器、清單 app 排出來，鬥桃姨盯時間。",
    dialogue: [
      { speaker: "桃姨", text: "我講你彼支手機嘛有路用喔。" }, // [canon]
      { speaker: "阿明", text: "（笑）" }, // [canon]
    ],
  },
  {
    id: "P.20",
    title: "芳味滿厝 ── 人客欲到矣",
    narration: "日頭欲落山，人客的跤步聲愈來愈近。", // [canon]
    dialogue: [
      { speaker: null, text: "（十道菜接近完成，芳味四溢，遠遠有人陸續向廟埕來。）" },
    ],
  },

  // ===== 第三幕・開桌（這桌辦予啥人） =====
  {
    id: "P.21",
    title: "排盤 ── 十道菜做伙上桌的時陣",
    narration: "出菜台頂十道菜一字排開，桃姨拭汗，滿意。",
    dialogue: [
      { speaker: "桃姨", text: "好矣，攏好矣。上菜！" },
    ],
  },
  {
    id: "P.22",
    title: "上菜 ── 一道一道的高潮",
    narration: "紅蟳米糕、白斬雞、控肉、四神湯…蒸氣油光，一道一道捀出去。",
    dialogue: [
      { speaker: null, text: "（擬真食物大特寫連續頁。）" },
    ],
    fullBleed: true,
  },
  {
    id: "P.23",
    title: "入座 ── 人客是啥人？",
    narration: "桃姨這時才感覺，今仔日無仝款。", // [canon]
    dialogue: [
      { speaker: null, text: "（紅色塑膠桌坐滿人——攏是熟面孔，厝邊、舊識、三代家人。主桌中央留一个位。）" },
    ],
  },
  {
    id: "P.24",
    title: "大揭露 ── 這桌，是辦予妳的",
    narration: "阿明共桃姨牽到主桌中央彼个位；眾人舉杯。紅單頂懸本底空白彼欄，這時反面寫著——",
    dialogue: [
      { speaker: "阿明", text: "阿嬤，今仔日這桌，是阮辦予妳的。" }, // [canon]
    ],
    redSlip: "reveal",
  },
  {
    id: "P.25",
    title: "回望 ── 規世人攏咧飼別人，今仔日換人請伊",
    narration:
      "一桌一桌辦過來，桃姨煮予真濟人飽。今仔日，換規庄頭請伊坐主桌。", // [canon]
    dialogue: [
      { speaker: null, text: "（桃姨望著滿桌人，目墘澹，無講話。蒙太奇小格：少年學藝、頭一擺辦桌、養大一家、飼飽規庄頭。）" },
    ],
  },
  {
    id: "P.26",
    title: "交鏟 ── 老鼎kap名號交予阿明",
    narration: "桃姨共彼口刻著「阿桃」的老鼎，連同一支磨亮的木鏟，交予阿明。",
    dialogue: [
      { speaker: "桃姨", text: "鼎我用四十冬矣，下跤彼兩字…後擺你加刻你的名。" }, // [canon]
    ],
  },
  {
    id: "P.27",
    title: "一桌人 ── 三代仝桌、厝邊仝桌",
    narration: "紅桌、暖燈、笑聲，三代kap厝邊仝席。",
    dialogue: [
      { speaker: null, text: "（全景。一桌人食甲歡喜，圍著一位受人敬重的師傅。）" },
    ],
  },
  {
    id: "P.28",
    title: "半年後 ── 阿明頭一擺家己掌一桌",
    narration: "阿明縖著藍圍裙，佇另外一場辦桌指揮三口爐，手機計時器排甲齊齊。",
    dialogue: [
      { speaker: null, text: "（火頭穩穩，鼎聲清亮。）" },
    ],
  },
  {
    id: "P.29",
    title: "桃姨做人客 ── 坐台跤食徒弟的菜",
    narration: "桃姨坐佇台跤，挾一喙阿明做的菜，頕頭。",
    dialogue: [
      { speaker: "桃姨", text: "…猶會使啦。" }, // [canon]
      { speaker: null, text: "（喙角偷笑。）" },
    ],
  },
  {
    id: "P.30",
    title: "老鼎的早晨 ── 灶火無熄",
    narration: "這口灶，閣欲煮一桌一桌的代誌。", // [canon]
    dialogue: [
      { speaker: null, text: "（呼應封面：老灶間天拄光，鼎掛咧，黑貓睏灶邊，只是縛圍裙的背影換做阿明。）" },
    ],
  },
  {
    id: "P.31",
    title: "食譜卡 ── 今仔日這桌的菜",
    narration: "今仔日這桌十道菜（含彼道蠔油救場菜）的簡要做法，收佇遮，會使印、會使帶轉去。",
    dialogue: [
      { speaker: null, text: "（一頁食譜卡。知識回收，可印可帶走。）" },
    ],
  },
  {
    id: "P.32",
    title: "結語 ── 一桌菜，是一世人的條理",
    narration:
      "拆場、揣規律、排時間、隨機應變——煮一桌菜按呢，過一世人嘛是按呢。", // [canon]
    dialogue: [
      { speaker: null, text: "（CT × 人生收束：共運算思維扣轉長者一世人的生活智慧。）" },
    ],
  },
];

// ── 活動資料設定（照 canon §7／§8） ─────────────────────────────

// 活動 1：menuRead（讀單）。菜名↔主料配對。菜單照 canon §8 冬令食補辦桌十道。
export interface MenuDish {
  id: string;
  name: string;
  mainIngredient: string;
}

export const menuDishes: MenuDish[] = [
  { id: "soup4", name: "四神湯", mainIngredient: "豬肚" },
  { id: "sesamechicken", name: "麻油雞", mainIngredient: "雞腿" },
  { id: "crabrice", name: "紅蟳米糕", mainIngredient: "紅蟳" },
  { id: "poachchicken", name: "白斬雞", mainIngredient: "土雞" },
  { id: "kongrou", name: "筍乾控肉", mainIngredient: "五花肉" },
  { id: "steamfish", name: "清蒸魚", mainIngredient: "鮮魚" },
  { id: "veg", name: "炒時蔬", mainIngredient: "青菜" },
  { id: "shrimproll", name: "蝦捲", mainIngredient: "蝦仁" },
  { id: "oysterdish", name: "蠔油亮油控肉", mainIngredient: "蠔油" },
  { id: "sweetsoup", name: "紅豆湯圓", mainIngredient: "紅豆" },
];

// 活動 1'：ingredient（認食材）。六種食材＋師父口訣（canon §6 P.8、§7）。
export interface Ingredient {
  id: string;
  name: string;
  /** 桃姨介紹這項食材 */
  ahmaIntro: string;
  /** 師父留落來的口訣（懷舊／生命回顧） */
  masterTip: string;
}

export const ingredients: Ingredient[] = [
  {
    id: "soy",
    name: "醬油",
    ahmaIntro: "醬油挑甘甜的，鹹味才不會死鹹。",
    masterTip: "師父說：「醬油挑甘甜的」，色甜味道才會圓潤。",
  },
  {
    id: "wine",
    name: "米酒",
    ahmaIntro: "米酒一點點就好，去腥提香，別倒太多。",
    masterTip: "師父說：「酒沿鍋邊下，香氣才會起來。」",
  },
  {
    id: "sugar",
    name: "冰糖",
    ahmaIntro: "用冰糖不是白糖喔，色才會油亮油亮。",
    masterTip: "師父說：「冰糖下少少，色才會漂亮。」",
  },
  {
    id: "garlic",
    name: "蒜頭",
    ahmaIntro: "蒜頭多剝幾顆，爆香的時候味道才夠。",
    masterTip: "師父說：「蒜頭先下鍋，整桌菜都從這裡起頭。」",
  },
  {
    id: "spice",
    name: "五香粉",
    ahmaIntro: "五香粉下少少就好，香氣藏在後頭，不是搶味的。",
    masterTip: "師父說：「五香是藏起來的訣竅，下手要輕。」",
  },
  {
    id: "ginger",
    name: "薑",
    ahmaIntro: "薑切片下鍋，去腥又顧胃，冬天最要緊。",
    masterTip: "師父說：「薑要先爆香，麻油雞才有魂。」",
  },
];

// 活動 2：marketPick（揀肉）。正解＝肥瘦三比七。
export interface ChoiceOption {
  id: string;
  label: string;
  correct: boolean;
}

export const marketOptions: ChoiceOption[] = [
  { id: "lean", label: "瘦肉太多，幾乎沒有肥（太瘦）", correct: false },
  { id: "balanced", label: "肥瘦三比七（肥三瘦七）", correct: true },
  { id: "fat", label: "肥肉太多，油花過半（太肥）", correct: false },
];

// 活動 3：stepSort（排步驟）。控肉正解序列（canon P.11）。
export const stepSortCorrect: string[] = [
  "洗切肉塊",
  "爆香蒜頭",
  "淋醬上色",
  "加水燉煮",
  "收汁",
];

// 活動 4：pattern（揣規律）。三道菜共同步驟＝爆香；另共用高湯底。
export interface Dish {
  name: string;
  steps: string[];
}

export const patternDishes: Dish[] = [
  { name: "控肉", steps: ["洗切肉塊", "爆香", "淋醬上色", "燉煮"] },
  { name: "炒時蔬", steps: ["洗菜", "爆香", "落青菜", "起鼎"] },
  { name: "煮湯", steps: ["備料", "爆香", "加高湯", "煮滾"] },
];
export const patternCommonStep = "爆香";
export const patternSharedBase = "共用高湯底";

// 活動 5：condition（條件判斷 IF）。老豆油焦去的選項（canon P.14）。
export interface ConditionOption {
  id: string;
  label: string;
  correct: boolean;
}

export const conditionOptions: ConditionOption[] = [
  { id: "A", label: "蠔油＋少許冰糖救色", correct: true },
  { id: "B", label: "直接加水煮", correct: false },
  { id: "C", label: "今天就到這裡，不做了", correct: false },
];

// 活動 6：memory（點數）。各爐進度——考阿明（代讀者），絕不考桃姨。
export interface StoveProgress {
  stove: string;
  dish: string;
  state: string;
}

export const memoryStoves: StoveProgress[] = [
  { stove: "頭爐", dish: "筍乾控肉", state: "燉著" },
  { stove: "二爐", dish: "四神湯", state: "好了" },
  { stove: "三爐", dish: "紅蟳米糕", state: "蒸著" },
];

// 活動 7：decompose（拆場）。十工作→三階段：備料／烹調／完成（canon P.5）。
export interface DecomposeStage {
  id: string;
  label: string;
  taskIds: string[]; // 正解歸屬
}
export interface DecomposeTask {
  id: string;
  label: string;
}

export const decomposeStages: DecomposeStage[] = [
  { id: "prep", label: "備料站", taskIds: ["pick", "cut", "peel"] },
  { id: "cook", label: "火頭站", taskIds: ["saute", "stew", "steam"] },
  { id: "finish", label: "出菜站", taskIds: ["reduce", "plate", "serve"] },
];

export const decomposeTasks: DecomposeTask[] = [
  { id: "pick", label: "揀五花肉" },
  { id: "cut", label: "洗切肉塊" },
  { id: "peel", label: "剝蒜頭" },
  { id: "saute", label: "爆香" },
  { id: "stew", label: "燉煮" },
  { id: "steam", label: "炊米糕" },
  { id: "reduce", label: "收汁" },
  { id: "plate", label: "排盤" },
  { id: "serve", label: "捀菜上桌" },
];

// 活動 8：fridgeSearch（揣冰櫥）。佇干擾矸罐中揣蠔油（canon P.16）。
export interface FridgeItem {
  id: string;
  label: string;
  isAnswer: boolean;
}

export const fridgeItems: FridgeItem[] = [
  { id: "ketchup", label: "番茄醬", isAnswer: false },
  { id: "oyster", label: "蠔油", isAnswer: true },
  { id: "yakult", label: "養樂多", isAnswer: false },
  { id: "milk", label: "牛奶", isAnswer: false },
  { id: "jam", label: "果醬", isAnswer: false },
  { id: "mayo", label: "沙拉醬", isAnswer: false },
];

// 活動 9：scheduleStoves（多爐並進）★。簡化長者版：≤3 爐、4–5 道、拖放排時段、開桌時全熱。
// 「筍乾控肉」需長燉 40 分＝時間限制（canon P.13）。windowMinutes＝開桌前可用的總時間。
export interface ScheduleDish {
  id: string;
  name: string;
  cookMinutes: number;
  /** 火候／限制提示，給活動 UI 與提示用 */
  note?: string;
}

export const scheduleStoves = {
  stoveCount: 3,
  windowMinutes: 45, // 開桌前 45 分鐘起灶
  dishes: [
    { id: "kongrou", name: "筍乾控肉", cookMinutes: 40, note: "要長燉，火要先起" },
    { id: "crabrice", name: "紅蟳米糕", cookMinutes: 25, note: "用蒸的" },
    { id: "soup4", name: "四神湯", cookMinutes: 20, note: "小火慢燉" },
    { id: "sesamechicken", name: "麻油雞", cookMinutes: 15, note: "薑先爆香" },
    { id: "poachchicken", name: "白斬雞", cookMinutes: 10, note: "汆燙計時" },
  ] as ScheduleDish[],
};

// 活動 9'：heatControl（火候，可併入 9）。燉煮要小火（canon §7）。
export const heatOptions: ChoiceOption[] = [
  { id: "big", label: "大火，快一點", correct: false },
  { id: "small", label: "小火，慢慢燉", correct: true },
];
