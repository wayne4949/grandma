# Gemini 生圖 prompt 表 ──《阿桃師的辦桌》32 頁
### 給老闆在 Gemini 跑圖｜一致性是重點

---

## 0. 怎麼用這份表（一致性的關鍵）

每生一張圖 = **【STYLE 區塊】＋【出場角色區塊】＋【該頁場景句】** 三段貼在一起。前兩段每次都一樣，靠這個維持全書一致。

> 順帶一提：你「怎麼控制人物一致性」的這套做法，**正是期末報告第七節「AI 工具使用與心得」要寫的東西**——把下面的技巧寫進去就是現成內容。

**建議流程：**
1. 先單獨生一張「**角色設定表**」（character reference sheet）：桃姨、阿明、黑貓、老鼎四個並排、白底、全身。滿意後留著。
2. 之後每頁，先貼【STYLE】＋【角色】，**附上那張參考圖**說「same characters, same style as reference」，再貼場景句。
3. **鎖死服裝顏色**（桃姨紅花襯衫+棕圍裙、阿明黃帽T+藍圍裙），每次都寫。
4. **所有頁同一個長寬比**（建議 3:2 橫式），別中途換。
5. 檔名一張一張存成 **`p01.png … p32.png`**，跟網站規格對齊，丟給工程那邊直接覆蓋佔位圖。

---

## 1. 【STYLE 區塊】（每次都貼）

```
Warm Taiwanese children's-picture-book illustration, soft painterly style with gentle hand-drawn outlines, cozy nostalgic mood, warm amber and red palette, soft directional lighting. Stylized illustrated human faces (NOT photorealistic), simplified uncluttered backgrounds that keep one clear focal point. 3:2 landscape aspect ratio. No text, no letters, no watermark, no modern Western setting. Friendly, dignified, heart-warming tone.
```

## 2. 【角色設定區塊】（出場誰就貼誰）

```
[桃姨] Ah-Tao, a 68-year-old Taiwanese master banquet chef (zongpushi), about 155cm, plump and slightly hunched, silver-white hair in a neat bun, wearing a RED small-floral-print shirt and a well-worn BROWN patterned apron with faint oil stains. Kind but sharp, precise, commanding expression — clearly the boss of the kitchen, not a frail elder.

[阿明] A-Ming, her 22-year-old apprentice grandson, about 175cm, fluffy short black hair, wearing a YELLOW hooded top and a BLUE apron, often holding a smartphone. Earnest, a little awkward.

[貓] A-Mi, a 12-year-old all-black slightly chubby cat, a small notch missing from the LEFT ear, green eyes. Usually sleeping by the stove.

[鼎] The old ding: a 40-year-old large black cast-iron wok with a polished wooden handle and a chipped rim. (On its underside, two Chinese characters are carved — only shown on P.17.)
```

## 3. 一致性技巧（寫進報告第七節）

- **參考圖優先**：先定一張角色設定表，後面每張都「reference these characters」。
- **服裝/體態當錨點**：顏色與身形每次重複描述，模型才不會飄。
- **固定比例 + 固定畫風關鍵字**：3:2、「soft painterly picture-book」每次照貼。
- **seed 固定**（Gemini 若給得了就鎖同 seed，角色更穩）。
- **負面提示**：`no text, no extra fingers, no photorealistic faces, no watermark, not Western`。
- **食物特寫例外**：P.17、P.22 改走擬真食物（見 §5），人臉不入鏡或退很後面。
- **道具/文字頁**：P.3、P.4、P.31 的紅單與食譜卡，**生成空白版（不要讓 AI 寫字）**，文字由網站疊上去——這樣 P.24 紅單翻面機關才乾淨。

---

## 4. 逐頁 prompt（P.01–P.32）

> 用法：每行前面先接【STYLE】＋【該頁出場角色】。標 ★ 食物擬真 / ◆ 群像場景 / ✎ 道具文字頁 者見備註。

**p01｜封面・灶頂的早晨**
`Pre-dawn old Taiwanese kitchen, big cast-iron woks hanging on the wall, first wisps of steam rising from a stove, faded old banquet photos on the wall. The black cat A-Mi sleeps by the stove. Ah-Tao seen from behind, tying her brown apron. Quiet, warm dawn light.` ｜角色：桃姨、貓、鼎

**p02｜人物登場・阮三个kap一口鼎**
`In the warm old kitchen, Ah-Tao smiles and speaks toward the big old wok; A-Ming beside her raises his smartphone as if recording; the black cat A-Mi watches from the stove edge. Group composition, cozy.` ｜桃姨、阿明、貓、鼎

**p03｜一張紅單** ✎
`Close-up of a single RED Taiwanese banquet order slip lying on a wooden table, traditional handwriting style, with one line left clearly BLANK. Ah-Tao and A-Ming look down at it, curious.` ｜桃姨、阿明｜備註：生**空白**紅單，字之後由網站疊。

**p04｜讀單**（活動頁）✎
`A red banquet order slip enlarged on a table, surrounded by ten small ingredient items laid out neatly (pork, chicken, crab, vegetables, herbs). Clean flat-lay, top-down.` ｜備註：留白給 UI，菜名文字之後疊。

**p05｜拆場・一桌變十道菜**
`Ah-Tao stands at a small chalkboard, dividing a banquet plan into three labelled stations; A-Ming watches and learns. Teaching moment, warm.` ｜桃姨、阿明｜備註：黑板上分區用「圖示/箭頭」即可，別寫實字。

**p06｜出發去市場**
`Ah-Tao and A-Ming walk out of the house carrying bamboo market baskets, slanting golden morning light, a small Taiwanese town street.` ｜桃姨、阿明

**p07｜揀肉・肥瘦三比七**（活動頁）
`At a traditional market meat stall, three pieces of pork belly displayed side by side; Ah-Tao inspects them with an expert eye, A-Ming beside her.` ｜桃姨、阿明

**p08｜認食材**（活動頁）
`Top-down close-up of cooking ingredients lined up: a bottle of soy sauce, rice wine, rock sugar, garlic bulbs, five-spice powder, fresh ginger. Clean, appetizing, simple background.` ｜備註：偏靜物。

**p09｜高湯底**
`A big pot of rich stock simmering on a stove, gentle steam, a few bowls of soup waiting beside it. Warm kitchen.` ｜鼎

**p10｜起灶・三口爐排兵布陣**
`Three stove burners lit with flames, Ah-Tao pointing and directing while A-Ming places woks onto the burners. Energetic, the banquet preparation begins.` ｜桃姨、阿明、鼎

**p11｜排步驟・控肉**（活動頁）
`Ah-Tao demonstrating the braised-pork steps, with visual step cards floating beside her (wash/cut, sauté garlic, glaze, simmer, reduce) shown as small icon vignettes. Instructional, warm.` ｜桃姨｜備註：步驟用圖示。

**p12｜揣規律・攏愛先爆香**（活動頁）
`Three different dishes shown side by side (braised pork, stir-fried vegetables, soup), each with a small flame icon indicating a shared "sauté aromatics" step; a shared stock pot in the middle. Clean comparison layout.` ｜備註：強調共同點。

**p13｜多爐並進 ★CT高潮**
`Three stove burners running simultaneously, each cooking a different dish at a different stage, steam everywhere; Ah-Tao stands in command at the center, sharp-eyed, watching all three at once. Dynamic, the heart of the story.` ｜桃姨、鼎

**p14｜危機・上好的老豆油用焦**（活動頁）
`At the critical moment of glazing the signature braised pork, a bottle of premium aged soy sauce is held upside down, empty; outside the window the sky is darkening at dusk and guests can be glimpsed approaching. Ah-Tao frowns with concern, A-Ming looks nervous. Tense but warm.` ｜桃姨、阿明

**p15｜急中生智**
`Ah-Tao works swiftly with confident hands, improvising with oyster sauce and sugar to save the dish; to the side, a small yellowed old photograph rests, hinting at her past. Determined, nostalgic.` ｜桃姨｜備註：老照片當回憶勾子，柔焦。

**p16｜揣冰櫥**（活動頁）
`An open refrigerator crammed full of many different bottles and jars (ketchup, yakult, milk, jam, salad dressing, oyster sauce). Busy, colorful, a "find the target" scene.` ｜備註：干擾物要多。

**p17｜收汁的聲・鼎底刻字 ★食物擬真**
`Photorealistic appetizing close-up of glossy braised pork belly glistening in a wok, rich brown sauce, visible meat texture, rising steam. INSET: the underside of the old cast-iron wok showing two Chinese characters carved into the iron. A-Ming's hands washing the wok.` ｜備註：食物走**擬真**；刻字頁要看得到鼎底。

**p18｜點數**（活動頁）
`Three stove burners each at a different stage of cooking, Ah-Tao mentally tallying what's done and what's left, a thoughtful confident look. A-Ming notes things on his phone.` ｜桃姨、阿明

**p19｜學徒上手・手機鬥相共**
`A-Ming proudly shows his smartphone with timer and checklist apps neatly lined up, helping track cooking times; Ah-Tao glances over with an approving half-smile. Heart-warming generational teamwork.` ｜桃姨、阿明

**p20｜芳味滿厝**
`Ten dishes nearly finished, fragrant steam filling the warm kitchen; through a window, people are seen in the distance walking toward a temple courtyard at dusk.` ｜備註：黃昏、遠處人影。

**p21｜排盤**
`A serving table with ten finished banquet dishes lined up beautifully; Ah-Tao wipes sweat from her brow, satisfied and proud.` ｜桃姨

**p22｜上菜 ★食物擬真**
`Photorealistic appetizing close-ups of a Taiwanese banquet spread: red crab glutinous rice, white-cut chicken, braised pork, four-herb soup, glistening and steaming. Mouth-watering, rich detail.` ｜備註：純食物擬真，無人臉。

**p23｜入座・人客是啥人 ◆群像**
`Dusk at a temple courtyard, RED plastic banquet tables and stools filled with people — neighbors, old friends, three generations of family, all warm familiar faces. The center main-table seat is left conspicuously empty. Lively, warm lantern light.` ｜備註：群像；桃姨/阿明可不入鏡或在邊。

**p24｜大揭露・這桌是辦予妳的 ◆群像** ✎
`A-Ming gently leads Ah-Tao to the empty center seat of the main table; the whole crowd raises their cups to her, beaming. Emotional, celebratory, warm lantern glow.` ｜桃姨、阿明｜備註：紅單翻面「謝桃姨」由網站做。

**p25｜回望・換人請伊**
`Ah-Tao sits at the place of honor, looking out at the full tables of people, eyes glistening with quiet emotion, silent. Soft vignette memory-fragments float faintly around her (young apprentice days, first banquet, raising a family, feeding the village). Deeply moving, dignified.` ｜桃姨｜備註：蒙太奇小格柔焦，可另存小圖。

**p26｜交鏟・傳承**
`Ah-Tao hands the old carved cast-iron wok together with a polished wooden spatula to A-Ming; a moment of passing down a lifetime of skill. Tender, meaningful.` ｜桃姨、阿明、鼎

**p27｜一桌人・三代仝桌 ◆群像**
`Wide warm shot of the whole banquet: red tables, glowing lanterns, laughter, three generations and neighbors sharing the meal together. Community warmth, joyful.`

**p28｜半年後・阿明掌一桌**
`A-Ming, now wearing the blue apron with confidence, directs three stove burners at a different banquet, his phone timers lined up neatly. He has grown into the role.` ｜阿明、鼎

**p29｜桃姨做人客**
`Ah-Tao sits among the guests, tasting a dish that A-Ming cooked, nodding with a hidden proud smile at the corner of her mouth.` ｜桃姨

**p30｜老鼎的早晨・呼應封面**
`Echo of the opening: the same old kitchen at dawn, woks hanging, the black cat A-Mi sleeping by the stove — but now the figure tying the apron from behind is A-Ming. Warm, full-circle.` ｜阿明、貓、鼎

**p31｜食譜卡** ✎
`A clean illustrated recipe card layout with empty spaces for ten dish entries, decorative warm border, top-down. No text.` ｜備註：空白卡，菜名做法由網站疊。

**p32｜結語・一世人的條理**
`A quiet symbolic closing image: the old cast-iron wok resting on the stove, gentle steam rising in warm dawn light, the kitchen peaceful — a lifetime of order and warmth distilled into one pot.` ｜鼎

---

## 5. 食物擬真專用 STYLE（只用在 p17、p22）

```
Photorealistic food photography, close-up, appetizing, glossy highlights, visible texture, rising steam, shallow depth of field, warm natural lighting. Mouth-watering Taiwanese banquet dish. No people's faces. No text, no watermark.
```

---

## 6. 對照表（生完自己打勾）

p01 封面｜p02 登場｜p03 紅單✎｜p04 讀單✎｜p05 拆場｜p06 出發｜p07 揀肉｜p08 認食材｜p09 高湯｜p10 起灶｜p11 排步驟｜p12 揣規律｜p13 多爐★｜p14 危機｜p15 急中生智｜p16 揣冰櫥｜p17 收汁★✎｜p18 點數｜p19 手機相共｜p20 芳味滿厝｜p21 排盤｜p22 上菜★｜p23 入座◆｜p24 大揭露◆✎｜p25 回望｜p26 交鏟｜p27 一桌人◆｜p28 半年後｜p29 做人客｜p30 呼應封面｜p31 食譜卡✎｜p32 結語

★食物擬真　◆群像（較難，多試幾次、前景鎖主角）　✎道具文字頁（生空白、文字後疊）
