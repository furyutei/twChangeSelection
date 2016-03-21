twChangeSelection
=================
Twitterで、マウスカーソル下のツイートを選択するユーザースクリプト  
- License: The MIT license  
- Copyright (c) 2016 風柳(furyu)  
- 対象ブラウザ： Firefox（[Greasemonkey](https://addons.mozilla.org/ja/firefox/addon/greasemonkey/)が必要）、Google Chrome（[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)が必要）


■ なにこれ？
---
[Twitterの公式Webサイト](https://twitter.com/) で、タイムライン上の特定のツイートを選択する（カーソルを移動させる）ユーザースクリプトです。  
**マウス操作とキー操作とを気まぐれに併用するような、ニッチな用途向けです。**  
  
マウスホイールを使いながらタイムラインを眺めていて、ある場所からキー操作（[j][k]等）による移動で切り替えたいような場合、標準のままだと最新のツイート（一番上）まで戻る必要があります（[j]とか[k]を押すと強制的に戻されます）。  
このスクリプトを使うと、現在表示されているツイートの位置まで（キー操作用の）カーソルを移動させることができます。  


■ インストール方法
---
[Greasemonkey](https://addons.mozilla.org/ja/firefox/addon/greasemonkey/)を入れたFirefox、もしくは[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)を入れたGoogle Chromeにて、  

> [twChangeSelection.user.js](https://github.com/furyutei/twChangeSelection/raw/master/twChangeSelection.user.js)  

をクリックし、指示に従ってインストール。  


■ 使い方
---
タイムライン上でツイートをクリックするか、[Ctrl]キーを押しつつマウスカーソルを重ねてやると、当該ツイートにカーソルが移った状態となり、そこを起点にして[j][k]キーで移動したりできます。  
※ツイートをクリックした場合、当該ツイートがポップアップ表示されますが（標準動作）、これを閉じると、カーソルが移った状態になっています。  
