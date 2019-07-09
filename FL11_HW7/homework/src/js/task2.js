let minQuont = 0;
let maxQuont = 8;
let maxPrize = 100;
let mn=2;
let prize = 0;
let i;


let qst = confirm('Do you want to play a game?');
start: while (qst) {
    if (qst === false) {
        alert('You did not become a billionaire, but can.');
    } else {
        let integer = Math.floor(Math.random() * maxQuont + 1);
        repeat: for (i = 0; i < 3;) {
            let count = 3 - i;
            let test = parseInt(prompt('Enter a number of pocket from ' + minQuont + ' to ' + maxQuont +
                '\nAttempts left: ' + count + '\nTotal prize: ' + prize + '$' +
                '\nPossible prize on current attempt: ' + maxPrize +
                '$', ''));
            if (test === integer) {
                switch (i) {
                    case 0:
                        prize += maxPrize;
                        maxPrize += maxPrize;
                        maxQuont += mn * mn;
                        integer= Math.floor(Math.random()
                            *maxQuont + 1);
                        qst = confirm('Congratulation, you won! ' +
                            'Your prize is:' + prize + '$. Do you want to continue?');
                        if (qst === false) {
                            qst = false;
                            break start;
                        }
                        i = 0;
                        continue repeat;
                    case 1:
                        prize += maxPrize/mn;
                        maxPrize += maxPrize;
                        maxQuont += mn*mn;
                        integer= Math.floor(Math.random()
                            *maxQuont + 1);
                        qst = confirm('Congratulation, you won! ' +
                            'Your prize is:' + prize + '$. Do you want to continue?');
                        if (qst === false) {
                            qst = false;
                            break start;
                        }
                        i = 0;
                        continue repeat;
                    case 2:
                        prize += maxPrize/mn/mn;
                        maxPrize += maxPrize;
                        maxQuont += mn*mn;
                        integer=Math.floor(Math.random()
                            *maxQuont + 1);
                        qst = confirm('Congratulation, you won! ' +
                            'Your prize is:' + prize + '$. Do you want to continue?');
                        if (qst === false) {
                            qst = false;
                            break start;
                        }
                        i = 0;
                        continue repeat;
                }

            } else if (test !== integer) {
                i++;
            }

        }
        alert('Thank you for your participation. Your prize is:' + prize + '$');
        qst = confirm('Do you want to continue?');
        if (qst === true) {
            maxPrize = 100;
            prize = 0;
            i = 0;
            continue start;
        }
    }
}


