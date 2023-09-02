$(document).ready(function() {

    var careers = ['YouTuber', 'Freelancer', 'Instructor', 'Astronaut','Optician', 'Electrical Engineer','Software Engineer','Production Manager','Footballer']

    var characterIndex = 0;
    var careerIndex = 0;
    function updateText() {
        characterIndex++;
        $('h1').text("I am ")
        if(careers[careerIndex].slice(0,1) === 'I' || careers[careerIndex].slice(0,1) === 'O' || careers[careerIndex].slice(0,1) === 'A' || careers[careerIndex].slice(0,1) === 'E'){
        $('h1').append("an " + careers[careerIndex].slice(0,characterIndex));
        } else {
            $('h1').append("a " + careers[careerIndex].slice(0,characterIndex));
        }
        if(characterIndex === careers[careerIndex].length){
            careerIndex++;
            characterIndex = 0;
        }

        if(careerIndex === careers.length){
            careerIndex = 0;
        }
        setTimeout(updateText, 400);
    }
    updateText();
});