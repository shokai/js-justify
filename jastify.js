
console.log("start");


$('textarea#edit').live("keyup change click", function(e){
	render(20);
    });

// 文字間を指定して描画
function render(space){
    console.log("render()");
    var str = $('textarea#edit').val();
    var lines = str.split("\n");
    var data = new Array();
    var max = 0;
    for(var i = 0; i < lines.length; i++){
	var words = lines[i].split(" ");
	data.push(words);
	if(max < words.length) max = words.length;
    }
    console.log(data);

    // 表示する時の入れ物を用意しておく
    $('div#display').html('');
    for(var i = 0; i < data.length; i++){
	$('div#display').append('<div id="line'+i+'"></div>');
	for(var j = 0; j < data[i].length; j++){
	    $('div#line'+i).append('<span id="word'+i+'_'+j+'">'+data[i][j]+'</span>');
	}
    }

    // 左端からの距離の合計
    poses = new Array();
    for(var i = 0; i < data.length; i++){
	poses.push(new Array());
	poses[i][0] = 0;
    }

    for(var i = 0; i < data.length; i++){
	var w = $('#word'+i+'_'+0);
	w.css("margin","0px");
	w.css("padding","0xp");
    }
    
    // ひとつ左のwordの位置とwidthを見て桁揃え
    for(var j = 1; j < max; j++){
	var max_offset = 0;
	var offsets = new Array();

	for(var i = 0; i < data.length; i++){
	    if(data[i][j-1] != null){
		var offset = poses[i][j-1]+data[i][j-1].width();
		offsets[i] = offset;
		if(max_offset < offset) max_offset = offset;
	    }
	}
	for(var i = 0; i < data.length; i++){
	    if(data[i][j] != null){
		var w = $('#word'+i+'_'+j);
		w.css("margin","0px");
		w.css("padding","0px");
		var pos = max_offset-offsets[i]+space;
		w.css("margin-left", pos);
		poses[i][j] = pos + poses[i][j-1] + data[i][j-1].width();
	    }
	}
    }
    console.log(poses);

};


// 文字列のwidthを計算する
String.prototype.width = function(){
    var box = $('#width_tmp').get(0);
    box.innerHTML = this;
    var width = box.offsetWidth;
    box.innerHTML = "";
    return width;
}