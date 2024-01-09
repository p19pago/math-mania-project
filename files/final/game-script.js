/* This file features all functions and methods, that will be used to determine the functionality and interactivity of the game application. */

/* Update 12/14/2023: add dark mode switch logic */

document.addEventListener("DOMContentLoaded", function() {
	const darkModeToggle = document.getElementById("darkmode-btn");
	const themeStylesheet = document.getElementById("theme-stylesheet");
	
	/* check dark mode if it is already enabled */
	
	/* call it using the tag localStorage */
	const enableDarkMode = localStorage.getItem("darkMode") === "enabled";
	
	/* use a function that can handle dark mode toggle */
	
	function toggleDarkMode() {
		
		if (themeStylesheet.getAttribute("href") === "app-style.css") {
			themeStylesheet.setAttribute("href", "darkmode-style.css");
			localStorage.setItem("darkMode", "enabled");
		} else {
			themeStylesheet.setAttribute("href", "app-style.css");
			localStorage.setItem("darkMode", "disabled");
		}
	}
	
	/* configure dark mode based on previous setting(s) */
	
	if (enableDarkMode) {
		toggleDarkMode();
	}
	
	/* add an event listener to achieve dark mode toggle */
	
	/* this goes for the button located in the settings container,
	in which it has been achieved to toggle dark mode */
	
	darkModeToggle.addEventListener("click", toggleDarkMode);

});

/* Update 11/30/2023: The game-script.js file is constantly being updated with extra features */

/* update 12/8/2023: Three different array constants have been added.
These array functions will define the questions held for each difficulty;
easy questions, medium questions, hard questions each. */


/* array for easy questions */

const easyQuestions = [
	
	/* easy questions contents */
	
	{
		question: 'How many angles does a triangle have?',
		options: ['3', '4', '5', '6'],
		answer: '3',
	},
	{
		question: 'Which numbers build up the sum of number 5?',
		options: ['1+3, 2+1, 4+1, 2+2', '0+5, 1+4, 2+2, 3+1', '0+5, 4+1, 3+2, 2+3', '1+2, 1+1, 0+5, 3+2'],
		answer: '0+5, 4+1, 3+2, 2+3',
	},
	{
		question: 'Which geometrical shapes from the options below are included in the category of basic shapes?',
		options: ['Sphere', 'Rectangle', 'Cube', 'Pentagon'],
		answer: 'Rectangle',
	},
	{
		question: 'How many sides does a rectangle have?',
		options: ['3', '2', '4', '5'],
		answer: '4',
	},
	{
		question: 'What symbol is used for the addition arithmetic operation?',
		options: ['-', '%', '*', '+'],
		answer: '+',
	},
	{
		question: 'Which number makes the double of 2?',
		options: ['2', '6', '4', '3'],
		answer: '4',
	},
	{
		question: 'What is the definition of double?',
		options: ['divide by 2', 'add 2', 'subtract 2', 'multiply by 2'],
		answer: 'multiply by 2',
	},
	{
		question: 'What is the definition of half?',
		options: ['multiply by 2', 'add 2', 'divide by 2', 'subtract 2'],
		answer: 'divide by 2',
	},
	{
		question: 'How many tens and units does number 27 use?',
		options: ['2 units, 7 tens', '2 tens, 7 units', '2 tens, 2 units', '2 tens, 7 tens'],
		answer: '2 tens, 7 units',
	},
	{
		question: 'How is number 23 described as a sum?',
		options: ['20+3', '20+0', '23+3', '23-3'],
		answer: '20+3',
	},
]

/* array for medium questions */

const medQuestions = [
	
	/* medium questions contents */
	
	{
		question: 'Which symbol represents natural numbers as a whole?',
		options: ['R', 'N', 'E', 'Q'],
		answer: 'N',
	},
	{
		question: 'Which numbers are called even numbers?',
		options: ['numbers divisible by 2', 'numbers not divisible by 2', 'numbers multipliable by 2', 'numbers whose modulo is 2'],
		answer: 'numbers divisible by 2',
	},
	{
		question: 'Which numbers are called odd numbers?',
		options: ['numbers evenly divisible by 2', 'numbers multipliable by 2', 'numbers not evenly divisible by 2', 'numbers whose modulo is greater than 1'],
		answer: 'numbers not evenly divisible by 2',
	},
	{
		question: 'Which three numbers are followed before 289?',
		options: ['287, 288', '286, 287, 288', '288', '286, 288'],
		answer: '286, 287, 288',
	},
	{
		question: 'Place the numbers given in ascending running order: 3515, 4800, 3620, 3508, 4801',
		options: ['4801 > 4800 > 3620 > 3515 > 3508', '3508 < 3515 < 3620 < 4800 < 4801', '4800 > 4801 < 3620 < 3508 < 3515', '3508 > 3515 > 3620 > 4800 > 4801'],
		answer: '3508 < 3515 < 3620 < 4800 < 4801',
	},
	{
		question: 'How is the a + b = b + a property called in addition?',
		options: ['identity', 'associative', 'commutative', 'inverse'],
		answer: 'commutative',
	},
	{
		question: 'How is the a + b + c = a + (b + c) = (a + b) + c property called in addition?',
		options: ['inverse', 'commutative', 'identity', 'associative'],
		answer: 'associative',
	},
	{
		question: 'How much is 52 * 100?',
		options: ['520', '5200', '52', '52000'],
		answer: '5200',
	},
	{
		question: 'How is the product a * a * a ... * a represented as?',
		options: ['a^n', 'a^2', 'a^0', 'a^3'],
		answer: 'a^n',
	},
	{
		question: 'What does a^2 represent?',
		options: ['a raised to the power of n', 'a raised to the power of 0', 'a raised to the power of 2', 'a raised to the power of 3'],
		answer: 'a raised to the power of 2',
	},
	
]


/* array for hard questions */

const hardQuestions = [
	
	/* hard questions contents */
	
	{
		question: 'What is a collection or a set of possible outcomes on a random experiment called?',
		options: ['impossible outcome', 'sample space', 'union', 'probability'],
		answer: 'sample space',
	},
	{
		question: 'What is the operation when a set contains elements that are common to both sets called?',
		options: ['union', 'empty', 'intersection', 'opposite'],
		answer: 'intersection',
	},
	{
		question: 'What is the operation when the set of all elements included in either set A or B, or on both sets called?',
		options: ['union', 'intersection', 'empty', 'opposite'],
		answer: 'union',
	},
	{
		question: 'What does the expression "not A" on a set A represent?',
		options: ['negative A', 'complement of A', 'union', 'subset'],
		answer: 'complement of A',
	},
	{
		question: 'How is the operation when every element of a set B is also an element of A?',
		options: ['empty set', 'union', 'subset', 'superset'],
		answer: 'subset',
	},
	{
		question: 'How is the basic identity (a+b)^3 defined as?',
		options: ['a^2 + b^2', '(a + b) * (a - b)', 'a^2 + 2*a*b + b^2', 'a^3 + 3*a^2*b + 3*a*b^2 + b^3'],
		answer: 'a^3 + 3*a^2*b + 3*a*b^2 + b^3',
	},
	{
		question: 'How is the basic identity (a+b)^2 defined as?',
		options: ['a^2 - b^2', 'a^2 + 2*a*b + b^2', 'a^2 + b^2', '(a + b) * (a - b)'],
		answer: 'a^2 + 2*a*b + b^2',
	},
	{
		question: 'How is the basic identity (a+b+c)^2 defined as?',
		options: ['a^2 - 2*a*b + b^2', '(a + b + c) * (a + b + c)', 'a^2 + b^2 + c^2 + 2*a*b + 2*b*c + 2*a*c', '(a+b)^2 + c^2'],
		answer: 'a^2 + b^2 + c^2 + 2*a*b + 2*b*c + 2*a*c',
	},
	{
		question: 'For a number a=1/2, how much is a^2?',
		options: ['1/4', '2', '1/8', '4'],
		answer: '1/4',
	},
	{
		question: 'Simplify (a^3-2a^2+a)/(a^2-a) .',
		options: ['a^2-2a+1', '(a-1)^2', 'a-1', 'a'],
		answer: 'a-1',
	},
	
]

/* update 12/1/2023: add lines of code for variables and buttons interactivity */
	
/* add variables to set current question, next questions (if necessary),
	as well as game score, which will be initialized to 0 */

/* extra (update 12/1/2023): set a variable to define current game dificulty */

/* which means, set difficulty to a default value, every time the game is initialized
and without clicking on the "Select Difficulty" button on the main menu! */

/* In this case, the selected difficulty value has been set to "Easy" . */

/* Although there is a value set for the difficulty by default,
players can still select difficulty via radio buttons */

let selectedDifficulty = 'easy';

/* current question variable */
let currQuestion = 0;

/* score variable (will be initialized to 0) */
let score = 0;

/* add variable for current questions */
let currentQuestions;

/* update 12/8/2023: Add a function, which will operate for each question(s) based on selected difficulty
either automaticly (by default) or player based through the main menu. */

function getQuestionsByDifficulty() {
	
	/* update 12/8/2023: add a "switch" structure; switch cases for each difficulty.
	It will return questions based on the selected by the player difficulty.
	If there is no option, the game difficulty will be set to "easy" by default. */
	
	/* switch structure code */
	
	/* update 12/30/2023: add a switch statement */
	
	switch (selectedDifficulty) {
		
		case 'easy':
			currentQuestions = easyQuestions;
			break;
		case 'medium':
			currentQuestions = medQuestions;
			break;
		case 'hard':
			currentQuestions = hardQuestions;
			break;
		default:
			// Set default to easy if no valid difficulty is selected
			currentQuestions = easyQuestions;
		
	}
	
	/* display question */
	displayQuestion();
	
}

/* The startGame() function, defines game initialization.
It is triggered when player clicks on the "New Game" button on the main menu. */

function startGame() {
	
	/* get questions by difficulty */
	getQuestionsByDifficulty();
	
	/* display game container and hide the main menu container */
	
	document.getElementById("main-menu").style.display = "none";
	document.getElementById("game-container").style.display = "block";
	
	/* update 01/02/2024: display first question */
	displayQuestion();
	
	/* rest of the buttons */
	
	/* display "Submit" button (it has been set) */
	/* const submitButton = document.getElementById("submit-btn"); */
	
	/* update 01/02/2024: add an event listener for the submit button; */
	/* submitButton.addEventListener("click", nextQuestion); */
	
	/* display "Skip" button */
	
	/* update 01/09/2024: add the skip button only when question container is being displayed */
	const skipButton = document.getElementById("skip-btn");
	
	/* display "Retry" button */
	const retryButton = document.getElementById("retry-btn");
	
	/* display "Return to main menu" button */
	const returnButton = document.getElementById("mainmenu-btn");
	
	
	
}

/* update 12/2/2023: add a function which displays questions (based on the game difficulty) */

/* update 12/8/2023: has been added outside the startGame() function, so it could be callable inside it */
	
function displayQuestion() {
	
	// let currentQuestion;
	
	/* Update 01/02/2024: Display the Score Panel */
	const scorePanel = document.getElementById("score-panel");
	
	/* let's pretend it has been set to none initially, and display it */
	scorePanel.style.display = "block";
	
	/* EXTRA: Update 01/05/2024: log score panel display */
	/* useful for debugging */
	
	console.log("Score Panel Display: ", scorePanel.style.display);
	
	/* Update 01/02/2024: Display questions container */
	const questionsContainer = document.getElementById("questions");
	
	/* let's pretend it has been set to none initially, and display it */
	questionsContainer.style.display = "block";
	
	/* EXTRA: Update 01/05/2024: log questions container display */
	/* useful for debugging */
	
	console.log("Questions Container Display: ", questionsContainer.style.display);
	
	/* Update 01/02/2024: Display result container */
	const resultContainer = document.getElementById("result");
	
	/* let's pretend it has been set to block initially, and hide it */
	resultContainer.style.display = "none";
	
	/* EXTRA: Update 01/05/2024: log result container display */
	/* useful for debugging */
	
	console.log("Result Container Display: ", resultContainer.style.display);
	
	/* Update 01/05/2024: Display the initial score */
	const scoreElement = document.getElementById("score");
	scoreElement.innerText = "Score: " + score.toString();
	
	/* check if there are more questions */
	
	if (currQuestion < currentQuestions.length) {
		
		/* get current question */
		const currentQuestion = currentQuestions[currQuestion];
		
		/* EXTRA: Update 01/05/2024: log the current question */
		/* useful for debugging */
		
		console.log("Current Question: ", currentQuestion);
		
		/* display question text */
		const questionTextElement = document.getElementById("question-text");
		questionTextElement.innerText = currentQuestion.question;
		
		/* display question options (defined as buttons) */
		const optionsContainer = document.getElementById("options-container");
		
		/* clear previous options */
		optionsContainer.innerHTML = "";
		
		/* add loop to display options */
		
		for (let i = 0; i < currentQuestion.options.length; i++) {
			const optionElement = document.createElement("div");
			optionElement.innerText = currentQuestion.options[i];
			optionElement.classList.add("question-options");
			optionElement.addEventListener("click", () => selectOption(i));
			optionsContainer.appendChild(optionElement);
		}
		
	}
	
}

/* update 01/06/2024: implement the selectOption() function, which will select an option out of 4 */
/* and help proceed to the next question more dynamicly */

/* extra: this function will also help update the score */
/* it is working as two functions in one */

function selectOption(optionIndex) {
	
	/* first part */
	/* begin with option selection logic */
	
	const selectedOption = currentQuestions[currQuestion].options[optionIndex];
	
	/* store the selected option */
	currentQuestions[currQuestion].selectedOption = selectedOption;
	
	/* extra 01/06/2024: log the selected option */
	/* useful for debugging */
	
	console.log("Selected Option:", selectedOption);
	
	const correctAnswer = currentQuestions[currQuestion].answer;
	
	/* update 01/06/2024: Create an if-structure to check if option is correct 
	and in the meantime, update score 
    console.log("Correct Answer:", correctAnswer);*/
	
	if (selectedOption === correctAnswer) {
		
		/* case 1: check if option is correct */
		
		score += 5;
		
		/* extra 01/06/2024: log the score */
		/* useful for debugging */
		
		console.log("Correct answer! Current score:", score);
		
	} else if (score > 0) {
		
		/* case 2: check if answer is incorrect; deduct 5 from the score if the score is above 0 */
		
		score -= 5;
		
		/* extra 01/06/2024: log the score */
		/* useful for debugging */
		
		console.log("Incorrect answer! Current score:", score);
		
	} else {
		
		/* case 3: Incorrect answer with score at 0 or skipping a question, score set to 0 */
		
		score = 0;
		
		/* extra 01/06/2024: log the score */
		/* useful for debugging */
		
		console.log("Incorrect answer or question skipped! Current score:", score);
		
	}
	
	nextQuestion();

}

/* update 12/3/2023: add a function, which will redirect to the next question (out of total questions number) */

/* update 12/8/2023: has been added outside the startGame() function, so it could be callable inside it */
	
function nextQuestion() {
	
	/* Update 01/02/2024: Increment the current question index */
	currQuestion++;
	
	/* check if there are more questions */
	
	if (currQuestion < currentQuestions.length) {
		
		/* Update 01/09/2024: log next question */
		console.log("Displaying next question...", currQuestion);
		
		/* display the next question */
		displayQuestion();
		
	} else {
		
		/* no more questions */
		
		/* Update 01/09/2024: log result */
		console.log("No more questions. Displaying result.");
		
		/* display the result panel and message */
		displayResult();
	}

}

/* update 01/06/2024: add a function to display the result panel and a message inside of it */

function displayResult() {
	
	/* hide the questions container */
	const questionsContainer = document.getElementById("questions");
	questionsContainer.style.display = "none";

	/* get the result container */
	const resultContainer = document.getElementById("result");
	
	/* get result message element */
	const msgElement = document.getElementById("message");
	
	/* calculate number of correct answers */
	let correctAnswers = 0;
	
	/* iterate through questions to check correctness */
	
	for (let i = 0; i < currentQuestions.length; i++) {
		
		const selectedOption = currentQuestions[i].selectedOption;
		const correctAnswer = currentQuestions[i].answer;
		
		/* log selected option for i-th question */
		console.log("Selected Option for question", i + 1, ":", selectedOption);
		
		/* log correct answer for i-th question */
		console.log("Correct Answer for question", i + 1, ":", correctAnswer);
		
		if (selectedOption === correctAnswer) {
			
			/* increment correct answers index */
			correctAnswers++;
			
		}
		
	}
	
	/* log correct answers */
	console.log("Number of correct answers:", correctAnswers);
	
	/* log current questions length */
	console.log("Length of current questions:", currentQuestions.length);
	
	/* display a message according to each result */
	
	if (correctAnswers === currentQuestions.length) {
		
		/* case 1: user answers all or most questions correctly */
		msgElement.innerText = "Congratulations! You answered all questions correctly!";
		
	} else if (correctAnswers >= 7 && correctAnswers <= 9) {
		
		/* case 2: user answers most questions correctly */
		msgElement.innerText = "You did very good!";
		
	} else if (correctAnswers >= 4 && correctAnswers <= 6) {
		
		/* case 3: user answers few questions correctly */
		msgElement.innerText = "Not bad! You deserved better!";
		
	} else {
		
		/* case 4: user does not answer all questions correctly */
		msgElement.innerText = "You didn't answer all questions correctly! Please try again!"
		
	}
	
    /* Display the result container */
    resultContainer.style.display = "block";
	
}

/* add a function to skip question */

function skipQuestion() {
	
	/* call the nextQuestion() function */
	nextQuestion();
	
}

/* add a function to retry question */

function retryQuestion() {
	
	/* Reset the current question index to the first question */
    currQuestion = 0;
	
	/* reset score to 0 */
	score = 0;

    /* Display the first question */
    displayQuestion();
	
}

/* The openSettings() function, is triggered when player clicks on the "Settings" button on the main menu.
It is functioned to apply game settings, and they regard master settings
(not difficulty settings, as there is a separate main menu button that allows the user to select desired difficulty)*/

function openSettings() {
	document.getElementById("main-menu").style.display = "none";
	document.getElementById("settings-container").style.display = "block";
}

/* The selectDifficulty() function, defines difficulty selection for each time player starts a new game */

function selectDifficulty() {
	
	/* display following styles for the select difficulty container on the main menu;
	how it'll be displayed when player interacts with the main menu button */
	
	document.getElementById("main-menu").style.display = "none";
	document.getElementById("difficulty-container").style.display = "block";
	
	document.getElementById("save-btn").addEventListener("click", saveDifficulty);
	
}

/* there will be a separate function to handle difficulty and save it to a separate variable. */

/* The saveDifficulty() function, is triggered when player clicks on the "Select Difficulty" button on the main menu.
It is functioned to apply game difficulty and handle a button to save the desired value. */

/* It is redirected to a separate function, which will get selected difficulty. */


function saveDifficulty() {
	selectedDifficulty = getSelectedDifficulty();
}

/* The getSelectedDifficulty() function, handles the save action;
which means, save desired difficulty and store it to a separate clickable button */

/* May the value for the selected difficulty be set above, still, there is a way player can prevent this action
by selecting a radio button from the container and save the desired difficulty. */

function getSelectedDifficulty() {
	var radioButtons = document.getElementsByName("difficulty");
	
	for (var i = 0; i < radioButtons.length; i++){
		if (radioButtons[i].checked) {
			return radioButtons[i].value;
		}
	}
	
	
	return selectedDifficulty;
}

/* The showMainMenu() function redirects the player to the main menu once they interact to a similar button */

function showMainMenu() {
	document.getElementById("main-menu").style.display = "block";
	document.getElementById("game-container").style.display = "none";
	document.getElementById("settings-container").style.display = "none";
	document.getElementById("difficulty-container").style.display = "none";
}

