# 🌙 Club Luna - 澪（Mio）NFCランディングページ

キャバクラ・ナイトワーク向けNFCビジネスカードランディングページテンプレート

## ✨ 特徴

- **華やかなヒーローセクション**: パーティクル・スパークル効果、ゆっくりズームアニメーション
- **アバター表示機能**: ボタンクリックで上半身画像をモーダル表示
- **フォトギャラリー**: Swiperによるスライドショー
- **Instagram連携**: プロフィールリンク、埋め込みエリア
- **Notionブログ**: 埋め込みエリア対応
- **CTA機能**:
  - 📌 ブックマーク案内（iPhone/Android対応ガイド）
  - 💬 LINE登録ボタン

## 🎨 テーマ

- **カラー**: パープル×ピンク×ゴールドのグラデーション
- **雰囲気**: 月夜・エレガント・華やか
- **アニメーション**: パーティクル、スパークル、フローティング効果

## 📁 ファイル構成

```
nfc-cabaret-mio/
├── index.html          # メインHTML
├── style.css           # スタイルシート
├── script.js           # JavaScript
├── mio-hero.jpg        # ヒーロー画像（全身/全体）
├── mio-avatar.jpg      # アバター画像（上半身）
├── slide-1~5.jpg       # ギャラリー画像
├── package.json        # npm設定
├── vercel.json         # Vercelデプロイ設定
└── README.md           # このファイル
```

## 🚀 使い方

### ローカル確認

```bash
npm start
# または
npx serve .
```

### カスタマイズ

1. **画像の差し替え**
   - `mio-hero.jpg` → ヒーロー画像
   - `mio-avatar.jpg` → アバター画像
   - `slide-1~5.jpg` → ギャラリー画像

2. **プロフィール情報** (`index.html`)
   - 名前・店名・エリア
   - Instagram URL
   - LINE URL

3. **Notionブログ埋め込み** (`index.html`)
   ```html
   <!-- コメント解除して設定 -->
   <iframe 
       src="YOUR_NOTION_PAGE_URL_HERE" 
       style="width:100%; height:500px; border:none;">
   </iframe>
   ```

4. **カラーテーマ** (`style.css`)
   ```css
   :root {
       --primary: #7c3aed;      /* メインカラー */
       --secondary: #ec4899;    /* サブカラー */
       --accent: #fbbf24;       /* アクセント */
   }
   ```

## 📱 CTA機能

### 連絡先保存（ブックマーク案内）
- iPhoneユーザー向け: Safari共有→ホーム画面に追加
- Androidユーザー向け: Chromeメニュー→ホーム画面に追加

### LINE登録
- LINEの友達追加URLを設定

## 🌐 デプロイ

### Vercel
```bash
vercel deploy
```

### Netlify / その他
静的サイトとしてそのままデプロイ可能

## 📝 ライセンス

MIT License

---

🌙 **Club Luna - 澪** | 六本木
