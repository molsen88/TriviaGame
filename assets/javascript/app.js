//Questions for the game

var questions = [
    {
        question: "1. Against what team did John Stockton hit a game-winning three to send the Jazz to the NBA Finals?",
        answers: {
            a: "Houston Rockets",
            b: "LA Lakers",
            c: "Chicago Bulls",
            d: "Seattle Sonics"
        },
        correctAnswer: "Houston Rockets"

    },
    {
        question: "2. Deron Williams was drafted out of which college in 2005?",
        answers: {
            a: "West Virginia",
            b: "Texas",
            c: "Cal-Berkely",
            d: "Illinois"
        },
        correctAnswer: "d"

    },
    {
        question: "3. Who did the Jazz recieve from Phoenix along with 2 first round picks that eventually led to Utah drafting Gordon Hayward?",
        answers: {
            a: "Keon Clark",
            b: "Tom Gugliotta",
            c: "Raja Bell",
            d: "Glen Rice"
        },
        correctAnswer: "b"

    },
    {
        question: "4. Which team did the pick originally belong to that Utah used to draft Gordon Hayward?",
        answers: {
            a: "Knicks",
            b: "Thunder",
            c: "Celtics",
            d: "Lakers"
        },
        correctAnswer: "a"

    },
    {
        question: "5. Who did the Jazz beat in the conference semifinals to make it to the Western Conference Finals in 2006-07 before eventually losing to the San Antonio Spurs?",
        answers: {
            a: "Lakers",
            b: "Sonics",
            c: "Warriors",
            d: "Clippers"
        },
        correctAnswer: "d"

    },
    {
        question: "6. Who did the Jazz draft with the 3rd overall pick in 1982?",
        answers: {
            a: "Danny Ainge",
            b: "James Worthy",
            c: "Dominique Wilkins",
            d: "Karl Malone"
        },
        correctAnswer: "c"

    },
    {
        question: "7. Which player has the highest 2 point percentage in Jazz history?",
        answers: {
            a: "Karl Malone",
            b: "Rudy Gobert",
            c: "Mark Eaton",
            d: "Jeff Hornacek"
        },
        correctAnswer: "b"

    },
    {
        question: "8. What college did Jazz cult-hero Sundiata Gaines attend?",
        answers: {
            a: "Florida State",
            b: "Kennesaw",
            c: "Iowa",
            d: "Georgia"
        },
        correctAnswer: "d"

    },
    {
        question: "9. How many straight seasons did John Stockton lead the NBA in assists per game?",
        answers: {
            a: "8",
            b: "4",
            c: "11",
            d: "5"
        },
        correctAnswer: "a"

    },
    {
        question: "10. What team did the Utah Jazz trade Jeff Malone to in return for Jeff Hornacek?",
        answers: {
            a: "Suns",
            b: "Knicks",
            c: "76ers",
            d: "Warriors"
        },
        correctAnswer: "c"

    },
    {
        question: "11. Who did the Jazz draft at number 24 for the Denver Nuggets for the draft rights to Donovan Mitchell?",
        answers: {
            a: "Dennis Smith, Jr.",
            b: "Tyler Lydon",
            c: "Trey Lyles",
            d: "Jamal Murray"
        },
        correctAnswer: "b"

    },
    {
        question: "12. The Jazz hired current head coach, Quin Snyder, from which team?",
        answers: {
            a: "Spurs",
            b: "University of Missouri",
            c: "Hawks",
            d: "CSKA Moscow"
        },
        correctAnswer: "c"

    },
    {
        question: "13. Who was arrested, along with Deron Williams, in Park City and gave the name Bobby Williams to the police?",
        answers: {
            a: "Robert Whaley",
            b: "Dee Brown",
            c: "Paul Millsap",
            d: "CJ Miles"
        },
        correctAnswer: "a"

    },
    {
        question: "14. What name did Deron Williams give to police when questioned at the scene?",
        answers: {
            a: "Adam Silver",
            b: "Torrey Ellis",
            c: "Bobby Williams",
            d: "Ricky Bobby"
        },
        correctAnswer: "b"

    },
    {
        question: "15. What former player infamously cried in an interview during a playoff series against the Houston Rockets?",
        answers: {
            a: "Greg Ostertag",
            b: "Derek Fisher",
            c: "Mehmet Okur",
            d: "Andrei Kirilenko"
        },
        correctAnswer: "d"

    },

]
setupPage();


//set up game/page


function setupPage() {
    for ( var i = 0; i < questions.length; i++ ) {
        var p = $( "<p>" );
        $( p ).attr( "questionsdiv", "question" + i );
        $( p ).attr( "data-number", i );
        $( p ).html( "<br>" + questions[i].question + "<br>" );
        $( "#questionsdiv" ).append( p );
        console.log( questions[i].question ); {
            for ( let i = 0; i < questions[i].answers.length; i++ )
                console.log( questions[i].answers.length ); {

                //button for "a" choice
                var a = $( "<button>" );
                $( a ).attr( "data-choices" + i );
                $( a ).attr( "answers", i );
                $( a ).text( questions[i].answers );
                $( "#questionsdiv" ).append( a );
                console.log( questions[i].answers );
                a.text( questions[i].answers.a )

                //button for "b" choice
                var b = $( "<button>" );
                $( b ).attr( "data-choices" + i );
                $( b ).attr( "answers", i );
                $( "#questionsdiv" ).append( b );
                $( b ).text( questions[i].answers );
                b.text( questions[i].answers.b )
                console.log( b.text( questions[i].answers.b ) );

                //button for "c" choice
                var c = $( "<button>" );
                $( c ).attr( "data-choices" + i );
                $( c ).attr( "answers", i );
                $( "#questionsdiv" ).append( c );
                $( c ).text( questions[i].answers );
                c.text( questions[i].answers.c )

                //button for "d" choice
                var d = $( "<button>" );
                $( d ).attr( "data-choices" + i );
                $( d ).attr( "answers", i );
                $( "#questionsdiv" ).append( d );
                $( d ).text( questions[i].answers );
                d.text( questions[i].answers.d )
            }

        }
    }
}





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




$( "button" ).on( "click", function ( event ) {


    console.log( event.currentTarget.innerHTML )
    $( "#answers-div" ).attr( "answers" );
    $( "#answers-div" ).attr( "answers" );
    $( "#answers-div" ).append( "<h6> " + event.currentTarget.innerHTML + "</h6>" );

    var userAnswers = [];
    userAnswers.push( event.currentTarget.innerHTML );
    console.log( userAnswers );
    // $( "#answers-div" ).text( "<h6>" + event.currentTarget.innerHTML + "</h6>" );
}



);











