// 活動型錄＋能力卡。內容權威：STORY_CANON_C_辦桌_v2.md §7。
// /activities 列表與 /activities/[id] 共用此型錄。能力卡格式照 canon §7／規格 §5：
//   【這題咧練的是 ⟨CT/認知能力⟩】
//   ⟨一句白話說明這個能力是什麼⟩
//   ⟨你剛剛做的哪个動作 = 用到這个能力⟩
// 難度排序（規格 §5 建置優先序）：P0 是繳交底線。
// built＝互動本體是否已實作；本回合（架構＋資料層）先全部 false，下一回合做活動再開。

import type { ActivityKind } from "./story";

export interface AbilityCard {
  /** 練的是 CT 還是 認知 */
  domain: "CT" | "認知";
  /** 能力名稱，如「平行化＋排程」 */
  skill: string;
  /** 一句白話說明這個能力是什麼 */
  what: string;
  /** 你剛剛做的哪个動作＝用到這个能力 */
  did: string;
}

export interface ActivityMeta {
  id: ActivityKind;
  /** 短標題，如「多爐並進」 */
  title: string;
  /** 副標／一句任務說明 */
  subtitle: string;
  /** 對應繪本頁，如「P.13」 */
  page: string;
  /** 建置優先序 */
  priority: "P0" | "P1" | "P2" | "P3";
  /** 列表上的能力標籤 chip */
  tag: string;
  /** 桃姨口氣的活動導言 */
  intro: string;
  /** 完成後顯示的能力卡 */
  ability: AbilityCard;
  /** 互動本體是否已實作 */
  built: boolean;
}

// 依優先序排列（P0 在前），列表直接照這個順序顯示。
export const activities: ActivityMeta[] = [
  {
    id: "scheduleStoves",
    title: "多爐並進",
    subtitle: "把幾道菜排進三口爐有限的時間，開桌時都要是熱的。",
    page: "P.13",
    priority: "P0",
    tag: "CT・平行化／排程",
    intro: "三口爐、五道菜，時間就這麼多。慢慢排，排到開桌的時候都熱騰騰就好。",
    ability: {
      domain: "CT",
      skill: "平行化＋排程＋條件",
      what: "用有限的時間和火力，同時調度好幾項工作。",
      did: "你把每道菜排進不同爐、不同時段，還顧到『控肉要燉40分』這個限制——這就是用時間在控制。",
    },
    built: true,
  },
  {
    id: "fridgeSearch",
    title: "找冰箱",
    subtitle: "在整櫥的瓶瓶罐罐裡，鎖定那瓶蠔油。",
    page: "P.16",
    priority: "P0",
    tag: "認知・視覺短期記憶／注意",
    intro: "冰箱裡東西那麼多，眼睛睜大，找那瓶顏色較深、較濃稠的蠔油。",
    ability: {
      domain: "認知",
      skill: "視覺短期記憶／集中注意力",
      what: "在一堆干擾物裡，抓住你要找的那一項。",
      did: "你沒被番茄醬、養樂多這些相像的瓶罐騙到，精準找到蠔油。",
    },
    built: true,
  },
  {
    id: "stepSort",
    title: "排步驟",
    subtitle: "把控肉的五個步驟，排成正確的順序。",
    page: "P.11",
    priority: "P0",
    tag: "CT・序列（演算法）",
    intro: "順序不對，味道就跑掉。把五張步驟卡拖成正確的順序。",
    ability: {
      domain: "CT",
      skill: "序列（演算法）",
      what: "照正確的順序一步一步做，事情才會成。",
      did: "你把『洗切→爆香→淋醬→燉煮→收汁』排對了，就是排出一條走得通的演算法。",
    },
    built: true,
  },
  {
    id: "condition",
    title: "條件判斷",
    subtitle: "老醬油燒焦了，要怎麼救色？",
    page: "P.14",
    priority: "P1",
    tag: "CT・條件判斷（IF）",
    intro: "最好的老醬油剛好燒焦，客人快到了。看現在的狀況，選對的那一步。",
    ability: {
      domain: "CT",
      skill: "條件判斷（IF）",
      what: "狀況改變的時候，照規則選對的分支。",
      did: "你判斷『沒有醬油』這個條件，選蠔油加糖救色，不亂加水——這就是 IF 的想法。",
    },
    built: true,
  },
  {
    id: "memory",
    title: "點數",
    subtitle: "一起記住：哪鍋放什麼、哪道好了、還差哪幾道。",
    page: "P.18",
    priority: "P1",
    tag: "認知・工作記憶／更新",
    intro: "三口爐各自在進行，你幫桃姨記著——哪鍋放什麼、哪道好了？",
    ability: {
      domain: "認知",
      skill: "短期記憶＋工作記憶＋更新",
      what: "短時間內記牢好幾項進度，還隨時更新。",
      did: "你把三口爐正在煮的菜記起來，還跟著進度走——這就是工作記憶在運作。",
    },
    built: true,
  },
  {
    id: "pattern",
    title: "找規律",
    subtitle: "三道菜並排，找出每道都有的那個步驟。",
    page: "P.12",
    priority: "P2",
    tag: "CT・模式辨別",
    intro: "控肉、炒時蔬、煮湯排在一起。找找看，什麼步驟每道都有？",
    ability: {
      domain: "CT",
      skill: "模式辨別",
      what: "抓出重複的規律，就能一次備料、省下時間。",
      did: "你找出三道菜都要『爆香』，學一個規律，勝過記十道菜。",
    },
    built: false,
  },
  {
    id: "marketPick",
    title: "挑肉",
    subtitle: "在三塊五花肉裡，挑肥瘦三比七那塊。",
    page: "P.7",
    priority: "P2",
    tag: "CT・抽象化＋模式",
    intro: "肉攤上三塊五花肉。別急，看肥瘦的比例，挑那塊三比七的。",
    ability: {
      domain: "CT",
      skill: "抽象化＋模式辨別",
      what: "濾掉不要緊的雜訊，抓住最要緊的那個特徵。",
      did: "你不看大小塊，只看『肥瘦比』這個關鍵，就挑到對的那塊。",
    },
    built: false,
  },
  {
    id: "decompose",
    title: "拆場",
    subtitle: "把整桌的工作，分成備料／烹調／完成三階段。",
    page: "P.5",
    priority: "P2",
    tag: "CT・問題分解",
    intro: "整桌看了嚇人，拆成三堆就不亂。把每項工作分進對的站。",
    ability: {
      domain: "CT",
      skill: "問題分解＋抽象化",
      what: "把龐大的『辦一桌』拆成好管理的站別和階段。",
      did: "你把十項工作分成備料、火頭、出菜三站——大事情拆成小堆就不亂。",
    },
    built: false,
  },
  {
    id: "menuRead",
    title: "讀單",
    subtitle: "把十道菜名和對應的主料配對好。",
    page: "P.4",
    priority: "P3",
    tag: "認知・命名",
    intro: "紅單上十道菜，每道要用什麼主料？慢慢把它配好。",
    ability: {
      domain: "認知",
      skill: "命名",
      what: "用正確的名稱指認物件和材料。",
      did: "你把菜名和主料一一配對好，就是用上『命名』這個本事。",
    },
    built: false,
  },
  {
    id: "ingredient",
    title: "認食材",
    subtitle: "點開六種食材，看名稱、用途和師父的口訣。",
    page: "P.8",
    priority: "P3",
    tag: "認知・命名",
    intro: "醬油、米酒、冰糖、蒜頭、五香粉、薑，每項都有名有來歷。點點看。",
    ability: {
      domain: "認知",
      skill: "命名",
      what: "用正確的名稱指認每項食材和它的用途。",
      did: "你把六種食材一項一項認清楚，還記住師父留下來的口訣。",
    },
    built: false,
  },
  {
    id: "heatControl",
    title: "火候",
    subtitle: "燉煮的時候，要用大火還是小火？",
    page: "P.13",
    priority: "P3",
    tag: "CT・模擬＋條件",
    intro: "火太大，湯快燒乾、肉硬硬；火太小，煮老半天不入味。燉的時候要怎麼做？",
    ability: {
      domain: "CT",
      skill: "模擬＋條件",
      what: "在心裡模擬結果，照狀況選對的火候。",
      did: "你選『小火慢燉』，因為你模擬出大火會把肉煮到變硬。",
    },
    built: false,
  },
];

export function getActivity(id: string): ActivityMeta | undefined {
  return activities.find((a) => a.id === id);
}

// 給靜態匯出 generateStaticParams 用。
export const activityIds = activities.map((a) => a.id);
