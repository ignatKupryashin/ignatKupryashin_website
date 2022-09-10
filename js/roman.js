
function questionAdd(symbol) {
    question += symbol;
}


function RomanToInt(question, answer) {
    if (!!question == false) {
        return 0;
    }
    else {
        let romanList = {};
        romanList["I"] = +1;
        romanList["V"] = +5;
        romanList["X"] = +10;
        romanList["L"] = +50;
        romanList["C"] = +100;
        romanList["D"] = +500;
        romanList["M"] = +1000;
        function RomanToIntProcedure(question, answer = 0) {
            if (question.length > 1) {
                if (question[0] === 'I' && question[1] === 'V' ||
                    question[0] === 'I' && question[1] === 'X' ||
                    question[0] === 'X' && question[1] === 'L' ||
                    question[0] === 'X' && question[1] === 'C' ||
                    question[0] === 'C' && question[1] === 'D' ||
                    question[0] === 'C' && question[1] === 'M') {
                    answer += (romanList[question[1]] - romanList[question[0]]);
                    question.splice(0, 2);
                }
                else {
                    answer += romanList[question[0]];
                    question.splice(0, 1);
                }

                if (!!question.length == 0) {
                    return answer;
                }

                else {
                    return RomanToIntProcedure(question, answer)
                }
            }
            else {
                answer += romanList[question[0]];
                return answer;
            };
        };
        answer = RomanToIntProcedure(question);
        return answer;
    }

}


question = document.romanform; //тут какую-то хрень написал. Нужно разобраться как взаимодействовать с формами
console.log(question);
let answer = RomanToInt(question);
console.log('Ответ: ' + answer);