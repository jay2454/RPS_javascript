(() => {
	console.log('fired!');

    let player_lives = 5,
        player= document.queryselector("#weapon"),
        computer,
        trigger = document.queryselector("#play"),
        status = document.queryselector(".winlose"),
        computer_lives = 5;

    const choices = ["rock", "paper", "scissors"];
    function playgame() {
    	console.log('clicked the button');

    	computer = choices[Math.floor(Math.random()* choices.length)]

    	let player_choice = player.vlaue;

    	console.log("computer:", computer, "player", player_choice);

    	if(computer == player_choice){
            // tie - no one wins
            status.textcontent = "Tie! You live to shoot another day!";
        {  else {
        	status.textcontent = "";


        }
    	
    }

    trigger.addeventlistener("click", playgame);    
})();

