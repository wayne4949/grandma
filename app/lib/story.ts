// 全部頁面資料與活動設定。
// 標 [canon] 的頁面旁白/對白逐字取自 STORY_CANON.md 第六章,請勿改寫。
// 其餘新頁(Phase 2 擴展)旁白/對白為依第八章語氣 authored:含蓄、具體、留白,
// 台語單字自然夾雜、不附羅馬拼音;阿公僅以照片/回憶/物件存在。
// 嚴守 STORY_CANON.md 第八章的語氣準則與禁忌台詞清單(此處不重述),
// 並完全避開任何記憶相關的醫療字眼。

export type ActivityKind =
  | "ingredient"
  | "stepSort"
  | "pattern"
  | "condition"
  | "memory"
  | "decompose"
  // 延伸活動(仍遵守核心鐵則:不評分、答錯不責備、可重試、有點擊操作)
  | "marketPick"
  | "fridgeSearch"
  | "heatControl";

export interface Dialogue {
  /** 角色名;旁白式舞台指示(整句括號)為 null */
  speaker: string | null;
  text: string;
}

export interface Page {
  id: string; // 例:P.1
  title: string;
  narration: string;
  dialogue: Dialogue[];
  activity?: ActivityKind;
}

// ── 31 頁・三幕結構(藍圖第九章擴展;canon 10 頁原文不動) ──
export const pages: Page[] = [
  // ===== 第一幕・啟程 =====
  {
    id: "P.1",
    title: "凌晨三點 ── 翻舊照片",
    narration:
      "凌晨三點,時差讓小明睡不著。客廳的燈還亮著,一本舊相簿攤在桌上。",
    dialogue: [
      {
        speaker: "小明",
        text: "(翻著相簿,停在一張泛黃的照片)…這個是阿公?",
      },
      {
        speaker: "阿嬤",
        text: "(端著茶走出來)還沒睏喔?彼張啊,你阿公二十幾歲,站在攤位前挑肉,挑歸晡。",
      },
      {
        speaker: "小明",
        text: "(盯著照片,手指在邊緣摩挲,沒說話)",
      },
      {
        speaker: "阿嬤",
        text: "(坐下來)明仔載你就要走了。趁這暗,有幾項物件,我想交給你。",
      },
    ],
  },
  {
    id: "P.2", // [canon] 原 P.1
    title: "封面 ── 老鍋仔的早晨",
    narration: "「老鍋仔,今天我們要把你的故事傳下去。」阿嬤對鍋輕聲說。",
    dialogue: [
      { speaker: "小明", text: "阿嬤?這麼早叫我幹嘛?" },
      {
        speaker: "阿嬤",
        text: "(對鍋)老鍋仔啊,卡細膩咧,人家好幾年沒用妳了。(轉身對小明)來,今天我教你做滷肉飯。以後你在日本想家,自己做。",
      },
    ],
  },
  {
    id: "P.3", // [canon] 原 P.2
    title: "人物登場 ── 我們三個",
    narration:
      "這是阿桃阿嬤、孫子小明,還有黑貓阿咪。今天他們要一起完成一件重要的事。",
    dialogue: [
      { speaker: "阿嬤", text: "(笑)你穿這個圍裙還是這麼好笑。" },
      { speaker: "小明", text: "這不是妳逼我穿的嗎?" },
      { speaker: "阿嬤", text: "要乖。妳阿公以前嘛是穿一樣的,只是花色不同啦。" },
      { speaker: null, text: "(阿咪喵了一聲,跳上椅子。)" },
    ],
  },
  {
    id: "P.4", // [canon] 原 P.3
    title: "故事開始 ── 為什麼是今天",
    narration:
      "傍晚的飛機,小明要離開一年。今天有 10 個小時,要把阿嬤的滷肉飯,完整地交給他。",
    dialogue: [
      { speaker: "阿嬤", text: "來,先喝茶。" },
      { speaker: "小明", text: "阿嬤,妳什麼時候開始學這個的?" },
      {
        speaker: "阿嬤",
        text: "(想了想)妳阿公教我的時候啊,我大概⋯25 歲?剛嫁來。他說他媽媽教他的,他媽媽說是他外婆教的。所以這個味道,是好幾代了。",
      },
      { speaker: "小明", text: "(認真起來)那我要學好。" },
    ],
  },

  // ===== 第二幕・傳承 =====
  {
    id: "P.5",
    title: "出發去市場",
    narration:
      "早市還沒散。阿嬤拿起藤編菜籃,把零錢包塞進口袋,回頭看小明還在綁鞋帶。",
    dialogue: [
      { speaker: "阿嬤", text: "卡緊咧,慢吞吞。好肉攏被人挑走了。" },
      { speaker: "小明", text: "(邊綁鞋帶)阿嬤妳走這麼快做什麼啦…" },
      {
        speaker: "阿嬤",
        text: "你阿公以前更早。天還沒光就去排隊,說「肉要趁鮮」。",
      },
      { speaker: null, text: "(阿咪跟到門口,喵一聲,沒再往前。)" },
    ],
  },
  {
    id: "P.6",
    title: "市場 ── 挑五花肉",
    narration:
      "攤位上擺著幾塊五花肉,看起來都差不多。阿嬤說:你看,哪一塊肥瘦三比七?",
    dialogue: [
      {
        speaker: "阿嬤",
        text: "肥的大概三成,瘦的七成,這樣燉起來才不會柴,也不會太油。",
      },
      { speaker: "小明", text: "(湊近看)…看起來都很像欸。" },
      { speaker: "阿嬤", text: "(笑)慢慢看。你阿公看歸晡,我看你會看多久。" },
    ],
    activity: "marketPick",
  },
  {
    id: "P.7", // [canon] 原 P.4
    title: "認識食材 ── 阿公最挑五花肉",
    narration: "認識六種食材。每一種,都有阿公的故事。",
    dialogue: [
      { speaker: "阿嬤", text: "這個五花肉啊,要選肥瘦三比七的。" },
      { speaker: "小明", text: "為什麼?" },
      {
        speaker: "阿嬤",
        text: "(笑)我哪知道為什麼。妳阿公以前每次都站在攤位前看半小時,他說「不對不要」。後來老闆都直接說「阿水兄,這塊給你留的」。",
      },
      { speaker: "攤位老闆", text: "(笑)阿桃姨,妳今天這麼隆重?" },
      { speaker: "阿嬤", text: "我孫子要學。" },
    ],
    activity: "ingredient",
  },
  {
    id: "P.8",
    title: "食材小故事 ── 醬油與米酒",
    narration:
      "回到廚房,阿嬤把調味料一字排開。倒醬油的時陣,她沒拿量匙。",
    dialogue: [
      { speaker: "小明", text: "阿嬤妳不用量喔?" },
      {
        speaker: "阿嬤",
        text: "量啥?(手腕一轉,倒了一圈)差不多就按呢。你阿公說,倒久了,手家己會知。",
      },
      { speaker: "小明", text: "(試著倒,手一抖,倒多了)…啊。" },
      {
        speaker: "阿嬤",
        text: "(笑)無要緊,加減一點較香。你阿公頭一擺倒,嘛是規碗烏。",
      },
    ],
  },
  {
    id: "P.9",
    title: "食材小故事 ── 冰糖與五香粉",
    narration: "阿嬤捏起幾粒冰糖,在燈下看它透明的邊。",
    dialogue: [
      { speaker: "阿嬤", text: "用冰糖,色才會水。白糖傷甜。" },
      { speaker: "小明", text: "五香粉呢?要放多少?" },
      {
        speaker: "阿嬤",
        text: "(指尖捏一小撮)按呢。你阿公落五香粉從來不給人看,說是「撇步」。我偷看好幾擺才學起來。",
      },
      { speaker: "小明", text: "(笑)所以妳也是偷學的。" },
      { speaker: "阿嬤", text: "(也笑)互相啦。" },
    ],
  },
  {
    id: "P.10",
    title: "料理示範 ── 阿嬤先做一次",
    narration:
      "開火。阿嬤要先做一遍給小明看,叫他先別動手,用眼睛記。",
    dialogue: [
      { speaker: "阿嬤", text: "你先看。看會了,才換你。" },
      { speaker: "小明", text: "(舉起手機)我錄影。" },
      {
        speaker: "阿嬤",
        text: "錄啥影,用眼睛看。(頓了一下)…好啦,錄一段嘛好,你在日本忘記了可以看。",
      },
      { speaker: null, text: "(蒜頭一下鍋,香氣衝上來。)" },
    ],
  },
  {
    id: "P.11",
    title: "火候 ── 大火還是小火?",
    narration: "肉下鍋,水也加了。阿嬤問:這時陣,要大火還是小火?",
    dialogue: [
      {
        speaker: "阿嬤",
        text: "火傷大,湯緊焦、肉硬硬;火傷細,煮歸晡袂入味。",
      },
      { speaker: "小明", text: "那…燉的時候應該小火吧?" },
      { speaker: "阿嬤", text: "(笑)你說看覓。" },
    ],
    activity: "heatControl",
  },
  {
    id: "P.12", // [canon] 原 P.5
    title: "排出步驟 ── 阿公以前都這樣做",
    narration: "5 個步驟,要按順序來。妳阿公說,順序錯了,味道就跑了。",
    dialogue: [
      {
        speaker: "阿嬤",
        text: "妳阿公以前啊,先爆香蒜頭,再下肉。他說這樣肉才會香。",
      },
      {
        speaker: "小明",
        text: "等等等,我幫妳排一下。應該是:先洗切肉,再爆香,再淋醬上色,然後加水燉煮,最後大火收汁,對嗎?",
      },
      { speaker: "阿嬤", text: "(看了看)對,妳阿公也是這樣排的。" },
      { speaker: null, text: "(老鍋仔此時發出清亮的「叮」一聲 ── 像是同意)" },
    ],
    activity: "stepSort",
  },
  {
    id: "P.13",
    title: "排序結果驗證 ── 味道對了",
    narration: "步驟排好了。阿嬤掀開鍋蓋聞一下,點點頭。",
    dialogue: [
      { speaker: "阿嬤", text: "著。順序對了,味就袂走。" },
      { speaker: "小明", text: "我把它記在手機裡了,步驟一、步驟二…" },
      {
        speaker: "阿嬤",
        text: "記佇手機好,毋過上要緊的是記佇手裡。",
      },
      { speaker: null, text: "(鍋裡咕嘟咕嘟,冒著泡。)" },
    ],
  },
  {
    id: "P.14",
    title: "三道菜並列 ── 咦,這個做過?",
    narration:
      "趁燉煮的空檔,小明在筆記本上畫了三道菜的步驟,排成一排。",
    dialogue: [
      {
        speaker: "小明",
        text: "阿嬤,我把滷肉飯、炒青菜、煮湯的步驟都寫下來了。",
      },
      { speaker: "阿嬤", text: "(看了看)按呢排,你看會出什麼無?" },
      { speaker: "小明", text: "(盯著看)…好像有一個動作,每一道都有。" },
      { speaker: "阿嬤", text: "(笑)你家己看看覓。" },
    ],
  },
  {
    id: "P.15", // [canon] 原 P.6
    title: "辨識規律 ── 咦,這個動作好像做過?",
    narration:
      "小明發現,有些動作一直重複出現 ── 原來阿嬤的料理裡,藏著規律。",
    dialogue: [
      {
        speaker: "小明",
        text: "阿嬤,妳剛剛炒菜也是先爆香蒜頭,煮湯好像也是欸?",
      },
      {
        speaker: "阿嬤",
        text: "(笑)對啊,你真聰明。你阿公說,「爆香」是所有菜的開頭,蒜頭一下去香氣就出來了。",
      },
      { speaker: "小明", text: "所以記住這個,很多菜都通用!" },
      { speaker: "阿嬤", text: "就是這樣。學會一個規律,勝過背十道菜。" },
    ],
    activity: "pattern",
  },
  {
    id: "P.16",
    title: "冰箱搜尋 ── 哪一罐是蠔油?",
    narration: "燉的空檔,阿嬤打開冰箱整理。她指著滿滿一層瓶罐,考小明。",
    dialogue: [
      { speaker: "阿嬤", text: "你揣看覓,哪一罐是蠔油?" },
      { speaker: "小明", text: "(湊近看一堆瓶罐)欸…這些長得都好像。" },
      { speaker: "阿嬤", text: "顏色較深、較稠的那罐。" },
    ],
    activity: "fridgeSearch",
  },
  {
    id: "P.17", // [canon] 原 P.7
    title: "條件判斷 ── 醬油不夠了!",
    narration:
      "意外發生了。但阿嬤不慌 ── 因為阿公以前也常常這樣亂搞。",
    dialogue: [
      { speaker: "阿嬤", text: "(看到空瓶)啊⋯醬油用完了。" },
      { speaker: "小明", text: "(緊張)那怎麼辦?要去買嗎?" },
      { speaker: null, text: "(阿咪喵了一聲)" },
      {
        speaker: "阿嬤",
        text: "(突然笑出來)哎,對啦,你阿公以前也是這樣!沒醬油就用蠔油加糖亂搞,我每次都罵他「你這樣會壞掉啦」,結果意外好吃!",
      },
      { speaker: "小明", text: "真的可以嗎?" },
      { speaker: "阿嬤", text: "來,我們今天就試試看「阿公的版本」。" },
    ],
    activity: "condition",
  },
  {
    id: "P.18",
    title: "阿公亂搞史 ── 回憶",
    narration: "鍋裡燉著,阿嬤想起以前。畫面泛黃,像一張老照片。",
    dialogue: [
      {
        speaker: "阿嬤",
        text: "你阿公啊,愛家己亂試。有一擺我出門,轉來鼎裡是肉配鳳梨,規間厝甜甜的。",
      },
      { speaker: "小明", text: "(笑)結果咧?" },
      {
        speaker: "阿嬤",
        text: "結果…煞意外好食。我罵歸晡,尾仔家己加一碗飯。",
      },
      { speaker: null, text: "(相片裡,一個人影偷偷掀鍋蓋,被貓看見。)" },
    ],
  },
  {
    id: "P.19", // [canon] 原 P.8
    title: "記憶活動 ── 我們剛剛放了什麼?",
    narration: "煮的時候有空檔。阿嬤考小明:剛剛放了什麼?",
    dialogue: [
      { speaker: "阿嬤", text: "來,複習一下。我們今天的滷肉飯放了哪些東西?" },
      {
        speaker: "小明",
        text: "嗯⋯五花肉、醬油⋯蠔油加糖、米酒、冰糖、蒜頭⋯五香粉?",
      },
      { speaker: "阿嬤", text: "(笑)妳記得不錯喔。" },
      { speaker: "小明", text: "阿嬤,妳怎麼從來都不會忘?" },
      {
        speaker: "阿嬤",
        text: "(沉默一下,語氣變得溫柔)有些東西啊,身體會記得。妳阿公教我的時候,我也是用身體記。",
      },
      { speaker: null, text: "(阿咪悄悄走到全家福照片旁,蜷縮起來)" },
    ],
    activity: "memory",
  },
  {
    id: "P.20",
    title: "身體會記得 ── 那雙手",
    narration:
      "鍋還在燉。小明看著阿嬤的手,那雙手好像不用想,就知道下一步。",
    dialogue: [
      { speaker: "小明", text: "阿嬤,妳都不用看食譜。" },
      { speaker: "阿嬤", text: "看啥食譜。做幾若百擺了,手家己會走。" },
      { speaker: "小明", text: "(低頭看自己的手)…那我的手,會記得嗎?" },
      {
        speaker: "阿嬤",
        text: "會。你今仔日做過,它就袂放袂記。慢慢來。",
      },
    ],
  },
  {
    id: "P.21",
    title: "阿嬤學藝 ── 她也是這樣學的",
    narration: "阿嬤一邊顧火,一邊想起自己二十五歲、剛嫁來的那年。",
    dialogue: [
      {
        speaker: "阿嬤",
        text: "我頭一次煮這道,鹹甲袂食得。你阿公一句話無講,攏食了了。",
      },
      { speaker: "小明", text: "都沒嫌喔?" },
      {
        speaker: "阿嬤",
        text: "無。伊只有講一句:「明仔載較少鹽。」我就按呢學起來。",
      },
      { speaker: null, text: "(窗外的光,和那年差不多。)" },
    ],
  },

  // ===== 第三幕・啟航 =====
  {
    id: "P.22", // [canon] 原 P.9
    title: "故事高潮 ── 飯做好了",
    narration: "傍晚 5 點半。飯做好了。三碗 ── 給小明、給阿嬤、給⋯",
    dialogue: [
      {
        speaker: "阿嬤",
        text: "(把第三碗放在阿公照片前,輕聲)老頭,小明今天學會了。你嚐嚐看,他做得怎樣?",
      },
      { speaker: "小明", text: "(愣住,然後安靜地坐下,吃了第一口)" },
      {
        speaker: "小明",
        text: "(放下筷子,聲音有點啞)阿嬤⋯味道跟我小時候一樣。",
      },
      {
        speaker: "阿嬤",
        text: "(轉頭擦了一下眼睛,然後笑)當然啊。妳阿公以前最愛這道。",
      },
      { speaker: null, text: "(阿咪跳上桌子,被阿嬤輕輕推下去)" },
    ],
  },
  {
    id: "P.23",
    title: "阿公的舊筆記本",
    narration:
      "吃飽了。小明在櫥仔角落,翻出一本舊舊的筆記本,封面都磨白了。",
    dialogue: [
      { speaker: "小明", text: "阿嬤,這本是…?" },
      {
        speaker: "阿嬤",
        text: "(接過去,翻了兩頁)你阿公的。伊的字潦草甲,我看攏無。",
      },
      { speaker: "小明", text: "(指著一頁)這裡寫「肉,三比七」。" },
      {
        speaker: "阿嬤",
        text: "(摸著那頁,沒說話,過了一會兒才把本子還他)你收咧。",
      },
    ],
  },
  {
    id: "P.24", // [canon] 原 P.10
    title: "拆解與回顧 ── 把整道菜記在心裡",
    narration:
      "故事說完了,飯也吃完了。但這個味道,小明會帶到很遠的地方。出發前,他要把整道菜在心裡拆解清楚。",
    dialogue: [
      { speaker: "阿嬤", text: "(在門口)便當給你帶,飛機上吃。" },
      { speaker: "小明", text: "(發現行李裡的小木鏟,愣了一下)阿嬤⋯" },
      {
        speaker: "阿嬤",
        text: "(打斷他)拿著!妳阿公的。我留鍋,你拿鏟子。一年後回來,你煮給我吃。",
      },
      {
        speaker: "小明",
        text: "我們把整道菜拆成幾個步驟,我才記得住 ── 備料、烹調、完成,對吧?",
      },
      { speaker: "阿嬤", text: "(點頭)就是這樣,你阿公也是這樣教我的。" },
      {
        speaker: null,
        text: "(車子開走。阿咪在窗台喵了一聲。阿嬤對著空空的廚房,輕聲說:)",
      },
      { speaker: "阿嬤", text: "老頭,他出發了。" },
    ],
    activity: "decompose",
  },
  {
    id: "P.25",
    title: "機場 ── 一個人的便當",
    narration:
      "機場的候機室。小明打開阿嬤塞的便當,滷肉飯的味道一掀開就散出來,旁邊的人都看過來。",
    dialogue: [
      { speaker: "小明", text: "(扒了一口,動作頓了一下)" },
      {
        speaker: null,
        text: "(手機響,是阿嬤的訊息:「便當會冷,趁燒食。鏟仔有帶無?」)",
      },
      { speaker: "小明", text: "(打字)有帶。阿嬤,味道一樣。" },
      { speaker: null, text: "(他把便當吃得乾乾淨淨,連湯汁都拌了飯。)" },
    ],
  },
  {
    id: "P.26",
    title: "飛機上 ── 木鏟與筆記本",
    narration:
      "飛機爬升,雲在窗外。小明從背包拿出那支小木鏟,還有阿公的筆記本。",
    dialogue: [
      {
        speaker: null,
        text: "(他把木鏟握在手裡,木把手被磨得發亮。)",
      },
      {
        speaker: null,
        text: "(翻開筆記本,在「肉,三比七」旁邊,用自己的字寫上:「阿嬤說,手會記得。」)",
      },
      { speaker: null, text: "(合上本子,看向窗外,很久。)" },
    ],
  },
  {
    id: "P.27",
    title: "半年後 ── 京都視訊",
    narration:
      "半年後。京都的小公寓,窗外飄著細雪。小明的筆電螢幕上,是阿嬤的臉。",
    dialogue: [
      { speaker: "阿嬤", text: "(在螢幕裡)瘦矣喔?有好好食無?" },
      { speaker: "小明", text: "有啦。阿嬤,我昨天試做滷肉飯。" },
      { speaker: "阿嬤", text: "(笑)按怎?" },
      { speaker: "小明", text: "…收汁收過頭,有點鹹。" },
      { speaker: "阿嬤", text: "(大笑)較少鹽!明仔載閣試。" },
    ],
  },
  {
    id: "P.28",
    title: "京都 ── 第一次自己做",
    narration:
      "又過了一陣。小明的小廚房裡,鍋子是新買的,不是那只老鍋仔。他照著筆記本,一個步驟一個步驟來。",
    dialogue: [
      {
        speaker: null,
        text: "(蒜頭下鍋,香氣衝上來 ── 和阿嬤的廚房,一模一樣。)",
      },
      { speaker: "小明", text: "(停下手,愣了一下)" },
      {
        speaker: null,
        text: "(他盛了一碗放在桌上;對面沒有人,但他擺了兩雙筷子。)",
      },
    ],
  },
  {
    id: "P.29",
    title: "一年後 ── 回家",
    narration:
      "一年到了。小明拖著行李站在阿嬤家門口,背包裡那支木鏟還在。黑貓阿咪在窗台,先看到他。",
    dialogue: [
      { speaker: "小明", text: "阿嬤,我轉來矣。" },
      {
        speaker: "阿嬤",
        text: "(從廚房探頭)欸,瘦甲。行李先放咧,我鼎仔早就洗好等你。",
      },
      { speaker: null, text: "(老鍋仔擺在爐上,擦得發亮。)" },
    ],
  },
  {
    id: "P.30",
    title: "煮給阿嬤吃",
    narration:
      "這一次,換小明站在爐前。他把木鏟放回老鍋仔裡 ── 鏟子和鍋,又湊成一對。阿嬤坐在桌邊,等著。",
    dialogue: [
      {
        speaker: null,
        text: "(爆香、下肉、淋醬、加水、收汁 ── 他的手沒有停。)",
      },
      {
        speaker: "阿嬤",
        text: "(嚐了第一口,慢慢點頭,眼睛亮亮的)…有阿公的味。",
      },
      {
        speaker: "小明",
        text: "(盛了三碗,把第三碗,輕輕放在阿公的照片前)",
      },
      { speaker: "阿嬤", text: "(看著那碗,笑了)你嘛學會這個了。" },
    ],
  },
  {
    id: "P.31",
    title: "結語",
    narration:
      "鍋留在阿嬤家,鏟子走過一年又轉來。味道沒有不見 ── 它換了一雙手,繼續傳下去。",
    dialogue: [
      { speaker: null, text: "(窗台上,阿咪瞇著眼,曬著午後的光。)" },
      {
        speaker: null,
        text: "(老鍋仔靜靜擺著,木把手發亮,鍋緣那個缺角,還在。)",
      },
    ],
  },
];

// ── 活動資料設定 ─────────────────────────────────────

// 活動1:食材認識。五花肉文案 [canon];其餘 authored(第八章語氣)。
export interface Ingredient {
  id: string;
  name: string;
  ahmaIntro: string;
  ahgongStory: string;
}

export const ingredients: Ingredient[] = [
  {
    id: "pork",
    name: "五花肉",
    ahmaIntro: "這個五花肉啊,要選肥瘦三比七的。", // [canon]
    ahgongStory:
      "妳阿公以前每次都站在攤位前看半小時,他說「不對不要」。後來老闆都直接說「阿水兄,這塊給你留的」。", // [canon]
  },
  {
    id: "soy",
    name: "醬油",
    ahmaIntro: "醬油揀甘甜的,鹹味才不會死死的。",
    ahgongStory: "妳阿公啊,倒醬油從來不量,他說「手會記得」。我學了好久才敢學他這樣。",
  },
  {
    id: "wine",
    name: "米酒",
    ahmaIntro: "米酒一點點就好,去腥提香,毋通倒太濟。",
    ahgongStory: "有一次妳阿公手滑倒太多,整鍋酒味,他還硬說「這是特別版」。",
  },
  {
    id: "sugar",
    name: "冰糖",
    ahmaIntro: "用冰糖毋是白糖喔,顏色才會油亮油亮。",
    ahgongStory: "妳阿公收尾一定要放冰糖,他說「甜一點點,人就會想起家」。",
  },
  {
    id: "garlic",
    name: "蒜頭",
    ahmaIntro: "蒜頭多剝幾粒,爆香的時陣味才夠。",
    ahgongStory: "剝蒜頭以前都是妳阿公的工課,他邊剝邊念,念著念著就剝完一整盤了。",
  },
  {
    id: "spice",
    name: "五香粉",
    ahmaIntro: "五香粉落少少就好,香氣藏在後面,毋是搶味的。",
    ahgongStory: "妳阿公說五香粉是「偷藏的撇步」,人家問起來,他都笑笑不講。",
  },
];

// 活動2:步驟排序。正解順序。
export const stepSortCorrect: string[] = [
  "洗切肉塊",
  "爆香蒜頭",
  "淋醬上色",
  "加水燉煮",
  "大火收汁",
];

// 活動3:模式辨別。三道菜的步驟,共同步驟為「爆香」。
export interface Dish {
  name: string;
  steps: string[];
}

export const patternDishes: Dish[] = [
  { name: "滷肉飯", steps: ["洗切肉塊", "爆香", "淋醬上色", "燉煮"] },
  { name: "炒青菜", steps: ["洗菜", "爆香", "下青菜", "起鍋"] },
  { name: "煮湯", steps: ["備料", "爆香", "加水", "煮滾"] },
];
export const patternCommonStep = "爆香";

// 活動4:條件判斷。沒有醬油時的選項。
export interface ConditionOption {
  id: string;
  label: string;
  correct: boolean;
}

export const conditionOptions: ConditionOption[] = [
  { id: "A", label: "蠔油 + 少許糖", correct: true },
  { id: "B", label: "直接加水煮", correct: false },
  { id: "C", label: "今天就到這裡,不煮了", correct: false },
];

// 活動5:記憶回想。今天用過的食材(正解 = 全選 6 種)。沿用 ingredients。

// 活動6:問題分解。6 任務 → 3 階段。
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
  { id: "prep", label: "備料", taskIds: ["cut", "peel"] },
  { id: "cook", label: "烹調", taskIds: ["saute", "stew"] },
  { id: "finish", label: "完成", taskIds: ["reduce", "serve"] },
];

export const decomposeTasks: DecomposeTask[] = [
  { id: "cut", label: "切肉" },
  { id: "peel", label: "剝蒜" },
  { id: "saute", label: "爆香" },
  { id: "stew", label: "燉煮" },
  { id: "reduce", label: "收汁" },
  { id: "serve", label: "盛飯" },
];

// ── 延伸活動資料(Phase 2) ───────────────────────────

// 延伸:市場挑五花肉(觀察/條件)。正解 = 肥瘦三比七。
export interface ChoiceOption {
  id: string;
  label: string;
  correct: boolean;
}

export const marketOptions: ChoiceOption[] = [
  { id: "lean", label: "瘦肉太多,幾乎沒有肥", correct: false },
  { id: "balanced", label: "肥瘦三比七(肥三瘦七)", correct: true },
  { id: "fat", label: "肥肉太多,油花過半", correct: false },
];

// 延伸:冰箱搜尋(搜尋/模式)。在瓶罐中找出蠔油。
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

// 延伸:火候(序列/條件補強)。燉煮要小火。
export const heatOptions: ChoiceOption[] = [
  { id: "big", label: "大火,快一點", correct: false },
  { id: "small", label: "小火,慢慢燉", correct: true },
];
