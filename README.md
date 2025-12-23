# 🌙✨ Club Luna - 澪（Mio）Evolution Version

キャバクラ・ナイトワーク向けNFCビジネスカードランディングページ **進化版**

> 🎉 オリジナル版 [nfc-cabaret-mio](https://github.com/nfccardlp/nfc-cabaret-mio) からの進化バージョン！  
> 同じ「澪」さんで、よりリッチな演出を実現。お客様に選んでいただけるバリエーション展開用。

## ✨ Evolution版の新機能

### 🎬 オープニングアニメーション
- サイト読み込み時に華やかなウェルカム演出
- 澪の名前がふわっと浮かび上がる
- キラキラスパークル＆花びらひらひら
- 3秒後に自然にフェードアウト

### 🌸 インタラクティブエフェクト
- **タップ/クリック時**に可愛いエフェクトが発生！
  - ⭐ 星きらめき
  - 🌸 花びらひらひら
  - 💕 ハート飛び散り
  - ✨ スパークル
- タップするたびにエフェクトが切り替わる
- **ボタンホバー時**（PC）にキラキラ演出

## 🎨 オリジナル版からの継承機能

- 華やかなヒーローセクション（パーティクル・スパークル効果）
- アバター表示機能（モーダル表示）
- フォトギャラリー（Swiperスライドショー）
- Instagram連携
- Notionブログ埋め込み対応
- CTA機能（ブックマーク案内、LINE登録）

## 📁 ファイル構成

```
nfc-cabaret-mio-evolution/
├── index.html          # メインHTML（オープニング追加）
├── style.css           # スタイルシート（エフェクトCSS追加）
├── script.js           # 基本JavaScript
├── effects.js          # ✨ NEW! エフェクト用JS
├── mio-hero.jpg        # ヒーロー画像
├── mio-avatar.jpg      # アバター画像
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

#### オープニングアニメーション調整
`effects.js` の `initOpeningAnimation()` 内：
```javascript
// 表示時間を変更（デフォルト3秒）
setTimeout(() => {
    openingScreen.classList.add('fade-out');
    // ...
}, 3000);  // ← この値を変更
```

#### エフェクトの種類を変更
`effects.js` の `effectTypes` 配列：
```javascript
const effectTypes = ['stars', 'petals', 'hearts', 'sparkles'];
// 使いたいものだけ残す or 順番変更
```

#### エフェクトの見た目を調整
`style.css` の各エフェクトクラス：
```css
.effect-stars { filter: drop-shadow(0 0 5px #ffd700); }
.effect-petals { filter: drop-shadow(0 0 3px #ffb6c1); }
/* 色やサイズを調整 */
```

## 🌐 デプロイ

### Vercel
```bash
vercel deploy
```

### Netlify / その他
静的サイトとしてそのままデプロイ可能

## 📊 オリジナル版との比較

| 機能 | オリジナル版 | Evolution版 |
|------|-------------|-------------|
| オープニング演出 | ❌ | ✅ |
| タップエフェクト | ❌ | ✅ 4種類 |
| ホバーエフェクト | 基本 | ✅ キラキラ強化 |
| 基本機能 | ✅ | ✅ |
| 画像/コンテンツ | 同じ | 同じ |

## 📝 ライセンス

MIT License

---

🌙✨ **Club Luna - 澪 Evolution** | 六本木

> 💡 **使い分けのヒント**  
> お客様に「シンプル版」と「リッチ演出版」を見せて、好みを選んでいただけます！
