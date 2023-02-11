let salary={
  almaz: 1200,
  adilet: 1300,
  nursultan:3000,
  asem: 2000,
};


let bonus = {
  almaz:400,
  adilet: 300, 
  nursultan : 200,
  asem : 500,
};


console.log(Object.fromEntries(Object.entries(salary).reduce((a,[name,salaryN])=>
(a.push([name,salaryN+(bonus[name]||0)]), a),[])));