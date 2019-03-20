// $("#tambah").click(function(){
// 	var angka1 = parseInt($("#val1").val());
// 	var angka2 = parseInt($("#val2").val());

// 	var hasil = angka1 + angka2;
// 	// alert("hasilnya adalah" + hasil);
// 	$("h1").html("Hasil : " + hasil);
// });

// $("#kurang").click(function(){
// 	var angka1 = parseInt($("#val1").val());
// 	var angka2 = parseInt($("#val2").val());

// 	var hasil = angka1 - angka2;
// 	// alert("hasilnya adalah" + hasil);
// 	$("h1").html("Hasil : " + hasil);
// });

// $("#kali").click(function(){
// 	var angka1 = parseInt($("#val1").val());
// 	var angka2 = parseInt($("#val2").val());

// 	var hasil = angka1 * angka2;
// 	// alert("hasilnya adalah" + hasil);
// 	$("h1").html("Hasil : " + hasil);
// });

// $("#bagi").click(function(){
// 	var angka1 = parseInt($("#val1").val());
// 	var angka2 = parseInt($("#val2").val());

// 	var hasil = angka1 / angka2;
// 	// alert("hasilnya adalah" + hasil);
// 	$("h1").html("Hasil : " + hasil);
// });

$(".proses").click(function(){ //cara lebih singkat
	var angka1 = parseInt($("#val1").val());
	var angka2 = parseInt($("#val2").val());

	var opt = $(this).html();
	if (opt == "+") {
		var hasil = angka1 + angka2;
	} else if (opt == "-") {
		var hasil = angka1 - angka2;
	} else if (opt == "x") {
		var hasil = angka1 * angka2;
	} else if (opt == "/") {
		var hasil = angka1 / angka2;
	}

	$("#hasil").html(hasil);
});

