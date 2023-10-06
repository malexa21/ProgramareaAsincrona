const cumparaIgredirente = () =>{
    console.log("Cumpar faina.");
    console.log("Cumpar lapte.");
    console.log("Cumpar oua.");
    console.log("Cumpar cacao.");
    console.log("Cumpar praf de copt.");
    console.log("Cumpar esenta de vanilie.");

    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            resolve("Am cumparat ingrediente");
        }, 10000);
    });
};

const facBriose = () =>{
    console.log("Preincalzesc cuptorul.");

    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            resolve("Am cumparat ingrediente");
        }, 10000);
    });
};