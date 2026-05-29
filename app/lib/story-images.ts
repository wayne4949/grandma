// 圖片 manifest:把每頁對到 public/story/pages/ 的圖檔。
// src 為「根相對路徑」(以 / 開頭),不要手動加 basePath:
// 元件用 next/image 顯示,Next 會依 next.config.ts 的 basePath/assetPrefix
// 自動補上前綴,靜態輸出(GitHub Pages 子路徑)路徑才會正確、且不會重複前綴。

export interface StoryImage {
  src: string | null;
  alt: string;
  placeholderLabel: string;
}

export const storyImages: Record<string, StoryImage> = {
  // 第一幕・啟程
  "P.1": {
    src: "/story/pages/p01.png",
    alt: "凌晨三點,小明在客廳燈下翻看泛黃的舊相簿,看見年輕時的阿公照片,阿嬤端著茶走來。",
    placeholderLabel: "凌晨三點",
  },
  "P.2": {
    src: "/story/pages/p02.png",
    alt: "暖色晨光下,阿嬤踮腳從櫃子深處取出一只黑色舊鐵鍋,小明揉著眼睛走進廚房,黑貓阿咪剛醒。",
    placeholderLabel: "老鍋仔的早晨",
  },
  "P.3": {
    src: "/story/pages/p03.png",
    alt: "三角構圖:阿嬤居中、小明在右、黑貓阿咪在左下;背景牆上掛著褪色全家福與阿公的小木鏟。",
    placeholderLabel: "我們三個",
  },
  "P.4": {
    src: "/story/pages/p04.png",
    alt: "餐桌上放著食材清單,小明的行李箱靠在門邊,阿嬤倒了一杯熱茶。",
    placeholderLabel: "為什麼是今天",
  },

  // 第二幕・傳承
  "P.5": {
    src: "/story/pages/p05.png",
    alt: "清晨,阿嬤拎著藤編菜籃站在門口,小明蹲著綁鞋帶,黑貓阿咪送到門邊。",
    placeholderLabel: "出發去市場",
  },
  "P.6": {
    src: "/story/pages/p06.png",
    alt: "傳統市場肉攤上並排著幾塊五花肉,阿嬤指著肥瘦比例不同的肉塊讓小明比較。",
    placeholderLabel: "挑五花肉",
  },
  "P.7": {
    src: "/story/pages/p07.png",
    alt: "傳統市場攤位前,阿嬤被六種食材圍繞,指著五花肉,攤位老闆笑著看她。",
    placeholderLabel: "認識食材",
  },
  "P.8": {
    src: "/story/pages/p08.png",
    alt: "廚房檯面上一字排開的調味料,阿嬤不拿量匙、手腕一轉倒下一圈醬油。",
    placeholderLabel: "醬油與米酒",
  },
  "P.9": {
    src: "/story/pages/p09.png",
    alt: "阿嬤在燈下捏起幾粒透明的冰糖,一旁是一小撮五香粉。",
    placeholderLabel: "冰糖與五香粉",
  },
  "P.10": {
    src: "/story/pages/p10.png",
    alt: "阿嬤在爐前示範,小明舉著手機錄影,鍋裡蒜頭爆香冒起白煙。",
    placeholderLabel: "阿嬤先示範",
  },
  "P.11": {
    src: "/story/pages/p11.png",
    alt: "爐火旁的鍋子,大火與小火的對比示意,阿嬤回頭問小明該用哪種火候。",
    placeholderLabel: "大火還小火",
  },
  "P.12": {
    src: "/story/pages/p12.png",
    alt: "廚房瓦斯爐上放著老鐵鍋,桌上散落五張順序打亂的步驟卡片,蒸氣冒起。",
    placeholderLabel: "排出步驟",
  },
  "P.13": {
    src: "/story/pages/p13.png",
    alt: "阿嬤掀開鍋蓋聞香點頭,小明在手機上記下步驟,鍋裡咕嘟冒著泡。",
    placeholderLabel: "味道對了",
  },
  "P.14": {
    src: "/story/pages/p14.png",
    alt: "小明的筆記本上並排畫著滷肉飯、炒青菜、煮湯三道菜的步驟。",
    placeholderLabel: "三道菜並列",
  },
  "P.15": {
    src: "/story/pages/p15.png",
    alt: "阿嬤切肉、小明笨拙地剝蒜,桌邊浮現滷肉飯、炒青菜、煮湯的小圖示。",
    placeholderLabel: "辨識規律",
  },
  "P.16": {
    src: "/story/pages/p16.png",
    alt: "打開的冰箱裡擺滿各種瓶罐,阿嬤要小明從中找出蠔油。",
    placeholderLabel: "冰箱搜尋",
  },
  "P.17": {
    src: "/story/pages/p17.png",
    alt: "阿嬤拿著空醬油瓶愣住,黑貓阿咪喵了一聲,冰箱裡有蠔油、糖、米酒。",
    placeholderLabel: "醬油不夠了",
  },
  "P.18": {
    src: "/story/pages/p18.png",
    alt: "泛黃的回憶畫面,一個人影偷偷掀開鍋蓋,黑貓在旁看見。",
    placeholderLabel: "阿公亂搞史",
  },
  "P.19": {
    src: "/story/pages/p19.png",
    alt: "鍋裡正在燉煮,蒸氣繚繞,桌上放著六種食材的縮圖,小明拿手機做筆記。",
    placeholderLabel: "我們剛剛放了什麼",
  },
  "P.20": {
    src: "/story/pages/p20.png",
    alt: "小明看著阿嬤在鍋前不假思索的雙手,然後低頭看自己的手。",
    placeholderLabel: "身體會記得",
  },
  "P.21": {
    src: "/story/pages/p21.png",
    alt: "泛黃的回憶,年輕的阿桃阿嬤剛嫁來、第一次站在爐前學做這道菜。",
    placeholderLabel: "阿嬤學藝",
  },

  // 第三幕・啟航
  "P.22": {
    src: "/story/pages/p22.png",
    alt: "夕陽進廚房,鍋蓋掀開蒸氣湧出,阿嬤盛了三碗滷肉飯,第三碗放在阿公照片前。",
    placeholderLabel: "飯做好了",
  },
  "P.23": {
    src: "/story/pages/p23.png",
    alt: "小明翻出一本封面磨白的舊筆記本,泛黃內頁是阿公潦草的手寫食譜。",
    placeholderLabel: "阿公的筆記本",
  },
  "P.24": {
    src: "/story/pages/p24.png",
    alt: "門口阿嬤送小明,行李袋露出小木鏟柄;一旁是把整道菜拆成三階段的學習介面。",
    placeholderLabel: "把整道菜記在心裡",
  },
  "P.25": {
    src: "/story/pages/p25.png",
    alt: "機場候機室,小明打開便當,滷肉飯的熱氣散開,旁人投來目光。",
    placeholderLabel: "機場便當",
  },
  "P.26": {
    src: "/story/pages/p26.png",
    alt: "飛機窗邊,小明握著磨亮的小木鏟,翻開阿公的筆記本寫下一行字。",
    placeholderLabel: "飛機上",
  },
  "P.27": {
    src: "/story/pages/p27.png",
    alt: "京都小公寓窗外飄著細雪,筆電螢幕上是阿嬤的笑臉,正在視訊。",
    placeholderLabel: "京都視訊",
  },
  "P.28": {
    src: "/story/pages/p28.png",
    alt: "小明在京都的小廚房用新鍋做滷肉飯,桌上擺了兩雙筷子,對面沒有人。",
    placeholderLabel: "第一次自己做",
  },
  "P.29": {
    src: "/story/pages/p29.png",
    alt: "一年後,小明拖著行李回到阿嬤家門口,黑貓在窗台先看到他,爐上是擦亮的老鍋仔。",
    placeholderLabel: "回家",
  },
  "P.30": {
    src: "/story/pages/p30.png",
    alt: "換小明站在爐前用老鍋仔做菜,阿嬤在桌邊等著,第三碗輕輕放在阿公照片前。",
    placeholderLabel: "煮給阿嬤吃",
  },
  "P.31": {
    src: "/story/pages/p31.png",
    alt: "午後的光照在窗台,黑貓瞇眼曬太陽,老鍋仔靜靜擺著,鍋緣的缺角還在。",
    placeholderLabel: "結語",
  },
};
