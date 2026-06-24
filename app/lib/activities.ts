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
    subtitle: "把幾道菜排進三口爐有限的時間，開桌時攏愛是燒的。",
    page: "P.13",
    priority: "P0",
    tag: "CT・平行化／排程",
    intro: "三口爐、五道菜，時間干焦遮爾濟。慢慢排，排予開桌的時陣攏燒燙燙就好。",
    ability: {
      domain: "CT",
      skill: "平行化＋排程＋條件",
      what: "用有限的時間kap火力，同齊調度幾若項工課。",
      did: "你共逐道菜排入無仝爐、無仝時段，閣顧著『控肉愛燉40分』這个限制——這就是用時間咧控制。",
    },
    built: true,
  },
  {
    id: "fridgeSearch",
    title: "揣冰櫥",
    subtitle: "佇規櫥的矸罐內底，鎖定彼矸蠔油。",
    page: "P.16",
    priority: "P0",
    tag: "認知・視覺短期記憶／注意",
    intro: "冰櫥內底物件遐爾濟，目睭放予金，揣彼矸色較深、較稠的蠔油。",
    ability: {
      domain: "認知",
      skill: "視覺短期記憶／集中注意力",
      what: "佇一堆干擾物內底，掠著你欲揣的彼一項。",
      did: "你無予番茄醬、養樂多遮的相siâng的矸罐騙去，準準揣著蠔油。",
    },
    built: true,
  },
  {
    id: "stepSort",
    title: "排步驟",
    subtitle: "共控肉的五个步驟，排做正確的順序。",
    page: "P.11",
    priority: "P0",
    tag: "CT・序列（演算法）",
    intro: "順序毋著，味就走精。共五張步驟卡拖做正確的順序。",
    ability: {
      domain: "CT",
      skill: "序列（演算法）",
      what: "照正確的順序一步一步做，代誌才會成。",
      did: "你共『洗切→爆香→淋醬→燉煮→收汁』排予著，就是排出一條會行的演算法。",
    },
    built: true,
  },
  {
    id: "condition",
    title: "條件判斷",
    subtitle: "老豆油焦去矣，欲按怎救色？",
    page: "P.14",
    priority: "P1",
    tag: "CT・條件判斷（IF）",
    intro: "上好的老豆油拄好焦，人客欲到矣。看現此時的狀況，揀著對的彼步。",
    ability: {
      domain: "CT",
      skill: "條件判斷（IF）",
      what: "狀況改變的時，照規則揀著對的分支。",
      did: "你判斷『無豆油』這个條件，揀蠔油加糖救色，無烏白加水——這就是 IF 的想法。",
    },
    built: true,
  },
  {
    id: "memory",
    title: "點數",
    subtitle: "鬥相共記：佗鼎园啥、佗道好矣、閣欠佗幾道。",
    page: "P.18",
    priority: "P1",
    tag: "認知・工作記憶／更新",
    intro: "三口爐各自咧走，你鬥桃姨記咧——佗鼎园啥物、佗道好矣？",
    ability: {
      domain: "認知",
      skill: "短期記憶＋工作記憶＋更新",
      what: "短時間內記牢幾若項進度，閣隨時更新。",
      did: "你共三口爐當咧煮的菜記起來，閣跟咧進度走——這就是工作記憶咧運作。",
    },
    built: true,
  },
  {
    id: "pattern",
    title: "揣規律",
    subtitle: "三道菜並排，揣出逐道攏有的彼个步驟。",
    page: "P.12",
    priority: "P2",
    tag: "CT・模式辨別",
    intro: "控肉、炒時蔬、煮湯排做伙。揣看覓，啥物步驟逐道攏有？",
    ability: {
      domain: "CT",
      skill: "模式辨別",
      what: "掠出重複的規律，就會使一擺備料、共鼎省時。",
      did: "你揣出三道菜攏愛『爆香』，學一个規律，較贏記十道菜。",
    },
    built: false,
  },
  {
    id: "marketPick",
    title: "揀肉",
    subtitle: "佇三塊五花肉內底，揀肥瘦三比七彼塊。",
    page: "P.7",
    priority: "P2",
    tag: "CT・抽象化＋模式",
    intro: "肉攤頂三塊五花肉。莫急，看肥瘦的比例，揀彼塊三比七的。",
    ability: {
      domain: "CT",
      skill: "抽象化＋模式辨別",
      what: "濾掉無要緊的雜訊，掠著上要緊的彼个特徵。",
      did: "你無看大細塊，干焦看『肥瘦比』這个關鍵，就揀著著的彼塊。",
    },
    built: false,
  },
  {
    id: "decompose",
    title: "拆場",
    subtitle: "共規桌的工課，分做備料／烹調／完成三階段。",
    page: "P.5",
    priority: "P2",
    tag: "CT・問題分解",
    intro: "規桌看著驚，拆做三堆就袂亂。共逐項工課分入對的站。",
    ability: {
      domain: "CT",
      skill: "問題分解＋抽象化",
      what: "共龐大的『辦一桌』拆做會管理的站別kap階段。",
      did: "你共十項工課分做備料、火頭、出菜三站——大代誌拆做細堆就袂亂。",
    },
    built: false,
  },
  {
    id: "menuRead",
    title: "讀單",
    subtitle: "共十道菜名kap對應的主料配予著。",
    page: "P.4",
    priority: "P3",
    tag: "認知・命名",
    intro: "紅單頂懸十道菜，逐道欲用啥主料？慢慢共伊對予好。",
    ability: {
      domain: "認知",
      skill: "命名",
      what: "用正確的名稱指認物件kap材料。",
      did: "你共菜名kap主料一一對予著，就是用著『命名』這个本事。",
    },
    built: false,
  },
  {
    id: "ingredient",
    title: "認食材",
    subtitle: "點開六種食材，看名稱、用途kap師父的口訣。",
    page: "P.8",
    priority: "P3",
    tag: "認知・命名",
    intro: "醬油、米酒、冰糖、蒜頭、五香粉、薑，逐項攏有名有來歷。點點看。",
    ability: {
      domain: "認知",
      skill: "命名",
      what: "用正確的名稱指認逐項食材kap伊的路用。",
      did: "你共六種食材一項一項認予清楚，閣記著師父留落來的口訣。",
    },
    built: false,
  },
  {
    id: "heatControl",
    title: "火候",
    subtitle: "燉煮的時陣，欲用大火抑是細火？",
    page: "P.13",
    priority: "P3",
    tag: "CT・模擬＋條件",
    intro: "火傷大，湯緊焦、肉硬硬；火傷細，煮歸晡袂入味。燉的時陣愛按怎？",
    ability: {
      domain: "CT",
      skill: "模擬＋條件",
      what: "佇心內模擬結果，照狀況揀著對的火候。",
      did: "你揀『細火慢燉』，因為你模擬出大火會共肉煮甲硬去。",
    },
    built: false,
  },
];

export function getActivity(id: string): ActivityMeta | undefined {
  return activities.find((a) => a.id === id);
}

// 給靜態匯出 generateStaticParams 用。
export const activityIds = activities.map((a) => a.id);
