# jsで桁揃え

## space区切りで桁揃え

* 固定幅フォントは使っていない、フォントを変えても大丈夫
* 事前に描画時の文字幅を計算しておく
* 一度見えないspanに描画してoffsetWidthを取得する。すぐspanを消す。
* その後、左から順にmarginを計算して足しながら表示していく
* Flashでたまにあるテク

よく考えたらtableでやれば良かった・・・


## デモ

[http://shokai.org/tmp/jastify/](http://shokai.org/tmp/jastify/)