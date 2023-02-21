(function(){
    //Filter 
    /*const array = ["Абрикос"," айва","апельсин","банан","грейпфрут","яблоко","грейпфрут","яблоко"];
    const result =array.filter(name => name === "яблоко");
    console.log(result)*/

    //Map

    //const array = ["Абрикос"," айва","апельсин","банан","грейпфрут","яблоко","грейпфрут","яблоко"];
    //const result =array.map(item => item.toLowerCase());
    //console.log(result);

    //every / some

    /*const array = [44,"Абрикос",34," айва",33,"апельсин","банан","грейпфрут","яблоко","грейпфрут","яблоко"];
    const result = array.some(item => typeof(item) ==="number");
    console.log (result);*/

    //reduce -- используются для вычисления единого значения на основе всего массива.
    // Усли цифры она сложит их,,, если строка она из склейит НО самый значительнй момент 
    // это знак которая присваевается +,-, *, /
    // чтобы код была менше надо делат так : `${count} ${item}`
   /* const array =[1,2,3]
    const result = array.reduce((count , item) => count + item)
    console.log(result);*/

    const obj = {
        aizi: "name",
        21: "age",
        abdijalilova: "sname",
    }
  //переобразуем обьект в масив!
    const result = Object.entries(obj)
    //фильтр кылып 1элементти алдык 
    .filter(item => item[1] === "name")
    //ал элементин ичинен => алдык
    .map(item => item[0]);
    console.log(result)
}())