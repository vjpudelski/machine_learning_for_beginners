var prediction = false;
var predictionSet = [];
var predictionTest = [];
var passover = 0;
var predictionResult = "";

function MachineLearning(year, prediction, predictionSet, passover, start = 0){
    var refer = year[start];
    var recursionDepth = year.length - 1;

    var commonEthnicity = [0,0,0,0,0,0,0,0,0,0];
    var commonOrigins = [0,0];
    var commonStudy = [0,0,0,0,0,0];
    
    var ethnicity = refer[0];
    var origin = refer[1];
    var study = refer[2];

    var commonEthReal, commonOrReal, commonStReal;
    var commonEthPt, commonOrPt, commonStPt;
    var confidence;

    var placeholder;
    var i;
    for(i = 0; i < ethnicity.length; i++){
        predictionTest[0] = ethnicity[0];
        commonEthnicity[ethnicity[i] - 1]++;
    }

    commonEthPt = Math.max(...commonEthnicity);
    commonEthReal = commonEthnicity.indexOf(commonEthPt) + 1;

    for(i = 0; i < origin.length; i++){
        predictionTest[1] = origin[1];
        commonOrigins[(origin[i] < 2 ? 0 : 1)]++;
    }

    commonOrPt = Math.max(...commonOrigins);
    commonOrReal = commonOrigins.indexOf(commonOrPt) + 1;
    
    for(i = 0; i < study.length; i++){
        predictionTest[2] = study[2];
        commonStudy[study[i] - 1]++;
    }

    commonStPt = Math.max(...commonStudy);
    commonStReal = commonStudy.indexOf(commonStPt) + 1;

    if(prediction){
        if(predictionSet[0] === predictionTest[0] &&
            predictionSet[1] === predictionTest[1] &&
            predictionSet[2] === predictionTest[2]){
            var original = ((commonEthPt + commonOrPt + commonStPt) / 3);
            confidence = (passover + original) >= 100 ? passover + original : original;
            predictionResult = " Succeeded!";
        } else {
            var original = ((commonEthPt + commonOrPt + commonStPt) / 3);
            confidence = Math.round(original / 2);
            predictionResult = " Failed!";
        }
    } else {
        confidence = ((commonEthPt + commonOrPt + commonStPt) / 3);
        passover = Math.round(confidence / 2);
        predictionResult = " There was no prediction for this round.";
    }

    predictionSet = [commonEthReal, commonOrReal, commonStReal];
        
    placeholder = "It is likely that the next study will be a " + (commonEthReal) + " with a " + 
    (commonOrReal) + " and they will study the field of " + 
    (commonStReal) + ". I am " + confidence + "% sure that this will happen."; 
    
    console.log("Did the prediction come true?" + predictionResult);
    console.log(placeholder)

    if (start >= recursionDepth){
        console.log("Analysis complete.");
    } else {
        prediction = true;
        start += 1;
        MachineLearning(monster, prediction, predictionSet, passover, start);
    }
}

var monster = GenerateMonster();

MachineLearning(monster, prediction, predictionSet, passover);

function GenerateMonster() {
    var empty = [];

    for (var i = 0; i < 10; i++){
        var temp = [];
        var one = [];
        var two = [];
        var three = [];

        var j;
        for (j = 0; j < 50; j++){
            one[j] = (Math.floor(Math.random() * 10) + 1);
        }

        for (j = 0; j < 50; j++){
            two[j] = (((Math.random() * 10) + 1) < 5 ? 1 : 2);
        }

        for (j = 0; j < 50; j++){
            three[j] = (Math.floor(Math.random() * 6) + 1);
        }

        temp[0] = one;
        temp[1] = two;
        temp[2] = three;
        empty.push(temp);
    }

    return empty;
}