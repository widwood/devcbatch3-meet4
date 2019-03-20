// $("#btn1").click(function(){
// 	$("#kotak").css("background", "red")
// });

// $("#btn2").click(function(){
// 	$("#kotak").css("background", "green")
// });

// $("#btn3").click(function(){
// 	$("#kotak").css("background", "blue")
// });

// $("#btn4").click(function(){
// 	$("#kotak").css("background", "initial") //initial atau none bisa dipakai
// });

// $(".tombol").click(function(){
// 	var warna = $(this).html();
// 	$("#kotak").css("background", warna)
// 	$("#btn4").click(function(){
// 		$("#kotak").css("background", warna="none") //initial atau none bisa dipakai
// });
// });

$(".tombol").click(function(){
	var warna = $(this).html();
	if(warna == "RESET"){
		$("#kotak").css("background", "none"); //atau dengan fungsi buildin location.reload();	
	} else{
		$("#kotak").css("background", warna);	
	};
});