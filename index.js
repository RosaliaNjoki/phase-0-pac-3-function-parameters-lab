function introduction(name = "Aki"){
   return `Hi, my name is ${name}.`;
}
introduction();

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage(name = "Aki", language = "Ember.js");

function introductionWithLanguageOptional(name, language= "JavaScript"){

    return `Hi, my name is ${name} and I am learning to program in ${language}`;
    
}

function introductionWithLanguageOptional(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
