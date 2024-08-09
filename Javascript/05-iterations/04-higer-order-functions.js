const coding = ["js", "rb", "py", "java", "cpp"];
/* coding.forEach( function (item){
    console.log(item);
} ) */

/* 
coding.forEach( (val)=> {
    console.log(val);
} ) */

function printMe(item)
{
    console.log(item);
}
//coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    //console.log(item,index,arr);
})

const myCoding = [
    {
        languageNAme : "javascript",
        languageFileExtension: "js"
    },
    {
        languageNAme : "python",
        languageFileExtension: "py"
    },
    {
        languageNAme : "java",
        languageFileExtension: "java"
    }
]

myCoding.forEach( (item)=> {
    console.log(`given language is ${item.languageNAme} and its extension is ${item.languageFileExtension}`);
})