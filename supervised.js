var yearOne = [[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]];
var yearTwo = [[2,2,2,10,2,7,2,5,2,3,2,9,2,10,2,1,2,5,2,3,2,10,2,1,2,10,2,7,2,5,2,8,2,4,2,8,2,4,2,2,2,6,2,6,2,4,2,2,2,4],
            [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1],
            [4,2,4,6,4,5,4,2,4,4,4,6,4,4,4,4,4,2,4,6,4,6,4,6,4,5,4,6,4,4,4,5,4,4,4,2,4,4,4,2,4,4,4,6,4,4,4,5,4,6]];
var yearThree = [[2,3,6,1,3,2,3,10,7,10,2,8,6,7,8,2,9,3,3,7,2,3,9,6,4,2,3,8,6,8,2,4,7,2,9,2,9,1,9,6,2,4,6,10,4,2,7,10,1,1],
            [1,2,2,2,1,1,1,2,2,1,1,2,1,1,1,1,1,1,2,2,1,2,1,1,2,1,1,2,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,2,2,1],
            [4,6,4,2,5,4,1,3,6,4,4,4,6,4,2,4,2,6,2,1,4,1,6,3,5,4,4,1,2,2,4,4,6,3,3,4,2,5,6,3,4,2,6,5,6,4,2,6,6,6]];

var years = [yearOne, yearTwo, yearThree];

var prediction = false;
var predictionSet = [];
var predictionTest = [];
var passover = 0;
var predictionResult = "";

function MachineLearning(year, prediction, predictionSet, passover, start){
    var recursionDepth = year.length - 1;


    var commonEthnicity = [0,0,0,0,0,0,0,0,0,0];
    var commonOrigins = [0,0];
    var commonStudy = [0,0,0,0,0,0];
    
    var ethnicity = year[0];
    var origin = year[1];
    var study = year[2];

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
        MachineLearning(years[start], prediction, predictionSet, passover, start);
    }
}

MachineLearning(years[0], prediction, predictionSet, passover, 0);
