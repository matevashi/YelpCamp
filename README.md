# セットアップガイド
## プロジェクトの説明
このプロジェクトは、キャンプ場の情報を管理するためのウェブアプリケーションです。
## 必要なソフトウェア
- [Node.js](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/try/download/community-kubernetes-operator)
## リポジトリのクローン
`git clone https://github.com/matevashi/YelpCamp`
## 依存関係のインストール
プロジェクトディレクトリ内で以下のコマンドを実行して依存関係をインストールしてください。

`npm install`

※mongooseのversionは5系を使用しています。6系以上のversionだとこのコードでは正常に動作しません。
## MongoDBのセットアップ
MongoDBが動作していることを確認してください。MongoDB Atlasを使用する場合は、接続URIを`app.js`に設定する必要があります。
## データベースのシード
初期データをデータベースに挿入するために以下のコマンドを実行してください。これにより複数のキャンプ場の情報が保存されます。

`node seeds/index.js`
## アプリケーションの起動
アプリケーションを起動するには、以下のコマンドを実行します。
- `node app.js`
- `nodemon app.js`(`nodemon`がインストールされている場合)
## 動作確認
ブラウザで`http://localhost:3000`にアクセスします。
## トラブルシューティング
- MongoDB接続エラー: MongoDBが正しく起動しているか確認してください。
- 依存関係エラー: `npm install`で依存関係が正しくインストールされているか確認してください。
- 起動エラー: `node app.js`または`nodemon app.js`でアプリケーションが正常に起動しない場合、エラーメッセージを確認してください。
