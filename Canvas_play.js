//変数たち
　//キャンバス・描写情報
　var canvas = document.getElementById('canvas');
　var ctx = canvas.getContext('2d');

  //マウス位置情報（mousex, mousey）
  var mousex, mousey;

  //現在クリック状態の変数（trueはON、falseはOFF）
  var state = false;

//イベントの初期設定
onRadioButtonChange();

//関数たち

    //ラジオボタンが選択された後の処理関数
    function onRadioButtonChange(){

        //現在設定されているイベントを全て無くす
      　canvas.removeEventListener('mousedown', pen_mousedown , { passive: true });
 　     canvas.removeEventListener('mousemove', pen_mousemove , { passive: true });
      　canvas.removeEventListener('mouseup', pen_mouseup , { passive: true });
        canvas.removeEventListener("click", square_mouseclick , { passive: true });
        canvas.removeEventListener("click", triangle_mouseclick, { passive: true });
        canvas.removeEventListener("click", maru_mouseclick, { passive: true });

　　　　//ラジオボタン情報を取得する
    　  radiobtn1 = document.getElementById("Radio_pen");
    　  radiobtn2 = document.getElementById("Radio_square");
    　  radiobtn3 = document.getElementById("Radio_triangle");
      　radiobtn4 = document.getElementById("Radio_maru");
　

    　  if (radiobtn1.checked == true) {

        　　　console.log("現在、ペン機能が選択されています");

      　　　　canvas.addEventListener('mousedown', pen_mousedown );
 　   　　　　canvas.addEventListener('mousemove', pen_mousemove );
      　　　　canvas.addEventListener('mouseup', pen_mouseup );

     　 }else if (radiobtn2.checked == true){

 　   　　　　console.log("現在、■スタンプ機能が選択されています");
 　   　　　　canvas.addEventListener('click', square_mouseclick );

    　  }else if (radiobtn3.checked == true){

 　   　　　　console.log("現在、▲スタンプ機能が選択されています");
 　   　　　　canvas.addEventListener('click', triangle_mouseclick );

      　}else if (radiobtn4.checked == true){

 　   　　　　console.log("現在、●スタンプ機能が選択されています");
 　   　　　　canvas.addEventListener('click', maru_mouseclick );

     　 }

    }

//クリックイベント
//ペン機能
　//mousedown時のイベント
　function pen_mousedown(e) {

　　　　 //クリックした位置を取得する
         mousex = e.offsetX;
         mousey = e.offsetY;

         //クリックしていたらONにする（stateをtrueにする）
  　　 　state = true; // クリック状態をON

　}

  //mousemove時のイベント
　function pen_mousemove(e) {

　 　　　//クリックされてなかったら実行しない
　 　　　if(!state) return;

　 　　　//クリックされていたら以下を実行 
　 　　　ctx.lineWidth = 4.0;                  //線の太さ
　 　　　ctx.strokeStyle =  "#6F8174";   //線のカラー
　 　　　ctx.lineCap = 'round';              　 //線の両端に丸みを付けてスムーズな描画にする

　 　　　ctx.beginPath();　　                   //パスをリセットする。
　 　　　ctx.moveTo(mousex, mousey); 　　　     //パスの開始座標をクリックした点にする
　 　　　ctx.lineTo(e.offsetX, e.offsetY); 　   //書き始めの位置からマウスの位置まで線を引く
　 　　　ctx.stroke();　　　　　　　　　　　　  //現在のパスを輪郭表示する

　 　　　//直前のマウス座標を更新
　 　　　mousex = e.offsetX;
　 　　　mousey = e.offsetY;

　}

  //mauseup時のイベント　
　function pen_mouseup(){

　 　　　//クリックをやめるとクリック状態をOFFにする
　 　　　state = false;

　}


//スタンプ■機能
  //click時に■スタンプを押す
　function square_mouseclick(e) {

　　　　 //クリックした位置を取得する
         mousex = e.offsetX;
         mousey = e.offsetY;

	 ctx.beginPath ();	                 // パスをリセット

         //クリックしていた位置に■を押す
         ctx.fillStyle="green";                       　　//塗りつぶしの色を赤に指定
         ctx.fillRect( mousex+5 , mousey+5 , 20, 20); 　//1辺10pxの■のスタンプ
   }

//スタンプ▲機能
  //click時に▲スタンプを押す
　function triangle_mouseclick(e) {

　　　　 //クリックした位置を取得する
         mousex = e.offsetX;
         mousey = e.offsetY;

         //クリックしていた位置に▲を押す
         ctx.beginPath();
	 ctx.moveTo(mousex, mousey);           //最初の点の場所
	 ctx.lineTo(mousex+10 , mousey+10 );   //2番目の点の場所
	 ctx.lineTo(mousex-10 , mousey+10);    //3番目の点の場所
	 ctx.closePath();	               //三角形の最後の線 closeさせる

	 ctx.strokeStyle = "rgb(0,0,0)";       //枠線の色
	 ctx.stroke();                         

	 ctx.fillStyle="rgba(0,0,255,0.1)";//塗りつぶしの色
	 ctx.fill();

   }

//スタンプ●機能
  //click時に●スタンプを押す
　function maru_mouseclick(e) {

　　　　 //クリックした位置を取得する
         mousex = e.offsetX;
         mousey = e.offsetY;

	 ctx.beginPath ();	                 // パスをリセット

	 // 中心(mousex,mousey)で半径: 10の円
	 ctx.arc( mousex ,mousey , 10, 0 * Math.PI / 180, 360 * Math.PI / 180, false);

	 ctx.fillStyle = "rgba(255,0,0,0.8)" ;	  // 塗りつぶしの色
	 ctx.fill(); 
	 ctx.strokeStyle = "skyblue" ;	          // 線の色
	 ctx.lineWidth = 8 ;                      // 線の太さ

	 // 線を描画を実行
	 ctx.stroke() ;

	 ctx.fillStyle="rgba(0,0,255,0.1)";//塗りつぶしの色
	 ctx.fill();


　}






