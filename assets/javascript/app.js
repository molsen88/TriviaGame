//Questions for the game

var questions = [
    {
        question: "1. Against what team did John Stockton hit a game-winning three to send the Jazz to the NBA Finals?",
        answers: [
            "Houston Rockets",
             "LA Lakers",
             "Chicago Bulls",
             "Seattle Sonics",
        ],
        correctAnswer: "Houston Rockets"

    },
    {
        question: "2. Deron Williams was drafted out of which college in 2005?",
        answers: [
             "West Virginia",
             "Texas",
             "Cal-Berkely",
             "Illinois"
        ],
        correctAnswer: "Illinois"

    },
    {
        question: "3. Who did the Jazz recieve from Phoenix along with 2 first round picks that eventually led to Utah drafting Gordon Hayward?",
        answers: [
             "Keon Clark",
             "Tom Gugliotta",
             "Raja Bell",
             "Glen Rice"
        ],
        correctAnswer: "Tom Gugliotta"

    },
    {
        question: "4. Which team did the pick originally belong to that Utah used to draft Gordon Hayward?",
        answers: [
             "Knicks",
             "Thunder",
             "Celtics",
             "Lakers"
        ],
        correctAnswer: "Knicks"

    },
    {
        question: "5. Who did the Jazz beat in the conference semifinals to make it to the Western Conference Finals in 2006-07 before eventually losing to the San Antonio Spurs?",
        answers: [
             "Lakers",
             "Sonics",
             "Warriors",
             "Clippers"
        ],
        correctAnswer: "Clippers"

    },
    {
        question: "6. Who did the Jazz draft with the 3rd overall pick in 1982?",
        answers: [
             "Danny Ainge",
             "James Worthy",
             "Dominique Wilkins",
             "Karl Malone"
        ],
        correctAnswer: "Dominique Wilkins"

    },
    {
        question: "7. Which player has the highest 2 point percentage in Jazz history?",
        answers: [
             "Karl Malone",
             "Rudy Gobert",
             "Mark Eaton",
             "Jeff Hornacek"
        ],
        correctAnswer: "Rudy Gobert"

    },
    {
        question: "8. What college did Jazz cult-hero Sundiata Gaines attend?",
        answers: [
             "Florida State",
             "Kennesaw",
             "Iowa",
             "Georgia"
        ],
        correctAnswer: "Georgia"

    },
    {
        question: "9. How many straight seasons did John Stockton lead the NBA in assists per game?",
        answers: [
             "8",
             "4",
             "11",
             "5"
        ],
        correctAnswer: "8"

    },
    {
        question: "10. What team did the Utah Jazz trade Jeff Malone to in return for Jeff Hornacek?",
        answers: [
             "Suns",
             "Knicks",
             "76ers",
             "Warriors"
        ],
        correctAnswer: "76ers"

    },
    {
        question: "11. Who did the Jazz draft at number 24 for the Denver Nuggets for the draft rights to Donovan Mitchell?",
        answers: [
             "Dennis Smith, Jr.",
             "Tyler Lydon",
             "Trey Lyles",
             "Jamal Murray"
        ],
        correctAnswer: "Tyler Lydon"

    },
    {
        question: "12. The Jazz hired current head coach, Quin Snyder, from which team?",
        answers: [
             "Spurs",
             "University of Missouri",
             "Hawks",
             "CSKA Moscow"
        ],
        correctAnswer: "Hawks"

    },
    {
        question: "13. Who was arrested, along with Deron Williams, in Park City and gave the name Bobby Williams to the police?",
        answers: [
             "Robert Whaley",
             "Dee Brown",
             "Paul Millsap",
             "CJ Miles"
        ],
        correctAnswer: "Robert Whaley"

    },
    {
        question: "14. What name did Deron Williams give to police when questioned at the scene?",
        answers: [
             "Adam Silver",
             "Torrey Ellis",
             "Bobby Williams",
             "Ricky Bobby"
        ],
        correctAnswer: "Torrey Ellis"

    },
    {
        question: "15. What former player infamously cried in an interview during a playoff series against the Houston Rockets?",
        answers: [
             "Greg Ostertag",
             "Derek Fisher",
             "Mehmet Okur",
             "Andrei Kirilenko"
        ],
        correctAnswer: "Andrei Kirilenko"

    },

]

var correctAnswers = [];
setupPage();


//set up game/page


function setupPage() {
    let num = 0;
    for ( var i = 0; i < questions.length; i++ ) {
        var p = $( "<p>" );
        $( p ).attr( "questionsdiv", "question" + i );
        $( p ).attr( "data-number", i );
        $( p ).html( "<br>" + questions[i].question + "<br>" );
        $( "#questionsdiv" ).append( p );
        // correctAnswers.push( questions[i].correctAnswer )
        let array = [];
        
        for ( let i = 0; i < 4; i++ ) {
                array.push(questions[num].answers[i])
                // console.log( array )
            
          $( '#questionsdiv' ).append(
                    $( '<input>' ).prop( {
                        type: 'radio',
                        id: questions[num].answers[i],
                        name: questions[num].answers[i],
                        value: questions[num].answers[i],
                        // checked: unchecked
                    } )).append( $( '<label>' ).prop( {
                     for: questions[num].answers[i]
                    } ).html(questions[num].answers[i])
         ).append( $( '<br>' ) );
            
        }
        
       
       num=num+1         
     }
        
    
}

    


// console.log(correctAnswers)




//set up on click function for buttons
$( "#start" ).on( "click", run );
var number = 60;
var startTimer;
var IntervalId;

function run() {
    clearInterval( IntervalId );
    IntervalId = setInterval( decrement, 1000 );
}

function decrement() {
    number--;
    $( "#timer" ).html( "<h2>" + number + "</h2>" );
    if ( number === 0 ) {
        alert( "Shot Clock Violation!" );
        stop();
    }

    function stop() {
        clearTimeout( IntervalId );
    }
};



//set up logic and button choices to see if selected button is same as answer in object. Remember array instance and object keys

var questionsCorrect = 0;
var incorrectAnswers = 0;
var userAnswers = [];




$( "input" ).on( "click", function ( event ) {

    // $( "#answers-div" ).attr( "answers" );
    $( "#answers-div" ).attr( "answers" );
    // console.log( event )
    // $( event.currentTarget ).css( "background-color", "red" );

    
    // $( "#answers-div" ).append( "<h6> " + event.currentTarget.innerHTML + "</h6>" );

    userAnswers.push( event.currentTarget.innerHTML );
    console.log( event.currentTarget.value );
    // $( "#answers-div" ).text( "<h6>" + event.currentTarget.innerHTML + "</h6>" );
});

let wrong = 0;

$( "#submitButton" ).on( "click", function () {
    clearInterval(IntervalId)
    for ( let i = 0; i < correctAnswers.length; i++ ){
        if ( correctAnswers[i] !== userAnswers[i] ) {
            wrong=wrong+1
        }
        wrong=wrong
    }
    console.log( userAnswers );
    console.log(correctAnswers)
})









