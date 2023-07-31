function shake_ball() {
    const firstName = document.getElementById('first_name').value;
    const question = document.getElementById('question').value;
    const userAsked = `${firstName} asks ${question}`;
// func to shake it + constants for name and question

    document.getElementById('userAsked').innerHTML = userAsked;

		document.getElementById('answer').innerHTML = eightBall;
}

//gen answer 
document.getElementById('shaken').addEventListener('click', shake_ball);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = ' ';
switch (randomNumber) {
  case 0:
    eightBall = 'By the shimmering moonlight, the answer - Yes';
    break;
  case 1:
    eightBall = 'Within the ancient woods, destiny whispers - No';
    break;
  case 2:
    eightBall = 'In the dance of stars, your fate - Uncertain';
    break;
  case 3:
    eightBall = 'Silver streams weave their tale the truth is not known';
    break;
  case 4:
    eightBall = 'The path to your answer - Uncertain';
    break;
  case 5:
    eightBall = 'With elven grace, the ball guides - Yes';
    break;
  case 6:
    eightBall = 'Through the mists of time, the magic unveils - No';
  default:
    eightBall = 'Galadriels wisdom flows, the answer  - Yes';
    break;
}