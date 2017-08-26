var	attacker = false,
	defender = false,
	user = "",
	kills = 0,
	computer = "";

var obi = {
	healthPoints: 120,
	attackPower:8,
	startPower : 8,
	counterAttackPower:6,	
};
var luke = {
	healthPoints: 100,
	attackPower:6,
	startPower : 6,
	counterAttackPower:5,
};
var maul = {
	healthPoints: 180,
	attackPower:30,
	startPower : 30,
	counterAttackPower:25
};
var sidious = {
	healthPoints: 150,
	attackPower:25,
	startPower : 25,
	counterAttackPower:20,
};

var text = function(){
$("#obi").text(obi.healthPoints);
$("#luke").text(luke.healthPoints);
$("#maul").text(maul.healthPoints);
$("#sidious").text(sidious.healthPoints);
};


$(".fighters img").on("click", function(){
	if (attacker == false){
	$(this).parent().appendTo($(".attacker"));
	$(this).parent().addClass("green");
	attacker = true;
	}else if(attacker == true && defender == false){
		$(this).parent().appendTo($(".defender"));
		$(this).parent().addClass("brown");
		defender = true;
	};
});


$("#attack").on("click", function(){
	
	if (attacker !== true){
		$("#msg").html("Please pick a character!!");
	}else if(defender !== true && kills < 3){
		$("#msg").html("Please pick a character to play against!!");
	}else{
	user = $(".attacker .fighters img").attr("value");

	computer = $(".defender .fighters img").attr("value");
	
	
	
	window[computer].healthPoints -= window[user].attackPower;
	 
	$("#msg").html("You attacked " + computer + " for " + window[user].attackPower + " and he attacked you for " + window[computer].counterAttackPower);
	
	window[user].attackPower += window[user].startPower;
	text();
		
		if(window[user].healthPoints <= 0){
			$("#msg").html("You lost!!");
			
		   }else if(window[computer].healthPoints <=0){
			   $(".defender .fighters").remove();
			   kills++;
			   defender = false;
			   if(kills == 3){
				   $("#msg").html("You won!!");
				    $("#msg").parent().append("<button id='reset'>Reset</button>")
				   	
			   }else{
			   $("#msg").html("Pick an enemy to fight!!");
				
		   };}else{
			   window[user].healthPoints -= window[computer].counterAttackPower;
		   };
		
	};
});

$("#reset").on("click", function(){
	window.location.reload();
});

text();