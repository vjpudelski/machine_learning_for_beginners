//var ethnicityArray = [7,6,9,10,3,10,5,6,2,5,9];
//var originsArray = [2,2,1,2,1,1,1,2,1,1,1];
//var fieldOfStudyArray = [6,1,3,1,2,3,4,1,2,3,3];
var ethnicityArray = [7,6,9,10,3,10,5,6,2,5,9,6,9,10,3,10,5,6,2,5,9];
var originsArray = [2,2,1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1];
var fieldOfStudyArray = [6,1,3,1,2,3,4,1,2,3,3,1,3,1,2,3,4,1,2,3,3];

var commonEthnicity = [0,0,0,0,0,0,0,0,0,0];
var commonOrigins = [0,0];
var commonStudy = [0,0,0,0,0,0];

function MachineLearning(ethnicity, origin, study){
    var placeholder;
    var i;
    for(i = 0; i < ethnicity.length; i++){
        commonEthnicity[ethnicity[i] - 1]++;
    }

    for(i = 0; i < origin.length; i++){
        commonOrigins[(origin[i] < 2 ? 0 : 1)]++;
    }

    for(i = 0; i < study.length; i++){
        commonStudy[study[i] - 1]++;
    }

    placeholder = "It is likely that the next study will be a " + (commonEthnicity.indexOf(Math.max(...commonEthnicity)) + 1) + " with a " + 
    (commonOrigins.indexOf(Math.max(...commonOrigins)) + 1) + " and they will study the field of " + 
    (commonStudy.indexOf(Math.max(...commonStudy)) + 1) + "."; 
    
    console.log(placeholder)
}

MachineLearning(ethnicityArray, originsArray, fieldOfStudyArray);