
(function(){
    const names = "alex, denis, victory";
    const result = names.split(",");
    console.log(result);

    //Numbers

    const num = "1,2,3";
    const numResult = num.split()
    .reduce((sum , current) => ` ${sum} + ${current}`);
    console.log(numResult);

    const array =[1,2,3]

    const results = array.reducse((count , item) => count + item)
    console.log(results);
}());