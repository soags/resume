# 📄 職務経歴書

- [Web版（GitHub Pages）](https://soags.github.io/resume/)
- [PDF版（GitHub Release）](https://github.com/soags/resume/releases/download/latest/resume.pdf)
- [元データ（resume.json）](https://github.com/soags/resume/blob/main/app/data/resume.json)

## 機能

### JSONで職務経歴書を管理

[app/data/resume.json](https://github.com/soags/resume/blob/main/app/data/resume.json)から職務経歴書全体を自動生成することが可能です。  
WebページもPDFもこの1ファイルから生成されます。

### Tailwind CSS によるスタイリッシュなデザイン

Webページを元にPDFを作成することで、WordやExcelでは表現しにくいスタイリッシュなデザインを実現可能。  
印刷時に改ページが変にならないようCSSで印刷設定を指定しています。

### CI/CD

`main` ブランチに push されると、GitHub Actions によって以下の処理が自動実行されます：

- GitHub Pagesへのデプロイ
- PDFの生成
- Release AssetsへPDFの登録

## 使用技術

| カテゴリ       | 技術スタック                                                 |
| -------------- | ------------------------------------------------------------ |
| フロントエンド | TypeScript, React 19, React Router 7, Tailwind CSS shadcn/ui |
| PDF生成        | Puppeteer                                                    |
| CI/CD          | GitHub Actions                                               |
| その他         | ESLint, Prettier, Git, GitHub                                |