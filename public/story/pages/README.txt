繪本插圖放這裡（不用改任何程式）
================================

放置路徑：public/story/pages/
檔名規則：p01.png、p02.png、…、p32.png（小寫 p ＋ 兩位數補零 ＋ .png）
            p01 對應繪本 P.1，p14 對應 P.14，p32 對應 P.32，以此類推。

怎麼用：
  1. 用 Gemini 依生圖 prompt 表，輸出同一個長寬比（建議 3:2 橫式）的 32 張圖。
  2. 直接把 p01.png～p32.png 丟進這個資料夾（覆蓋同名檔即可）。
  3. 重新部署，圖就會自動顯示，不必改任何程式碼。

還沒放圖時：網站會自動顯示「純色塊＋頁碼＋頁名」的佔位圖
（由 app/components/StoryImage.tsx 的 onError 自動退回，圖一到位就不再觸發）。

對應頁名可參考 app/lib/story-images.ts 裡每頁的 placeholderLabel / alt。
