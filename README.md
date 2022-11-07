# SRN-IBL-LECTURE
探究学習のレクチャーコンテンツ用コンポーネント

# フロー
![ステップを再生する仕組み](./misc/howToPlayStep.png)
![スライド変更時の処理](./misc/ifSlideChange.png)
![インタラクションの処理](./misc/interaction.png)

# ビルド
`npm-version`のコマンドライン引数の入力がトリガーになる。  
↓ のいずれか
```
<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git
```
## ビルド後の流れ
- `npm-version`コマンドに応じてバージョンが上がる
  - バージョンを含んだブランチが作成される
    - 適宜`master`にマージすること
