class Formatter {
  //add static methods here
  
  static capitalize(inString){
   return  inString.charAt(0).toUpperCase()+inString.slice(1);
  }
  
  static sanitize(inString){
   return  inString.replace(/[^A-Za-z0-9- ']+/g,"");
  }
  
  static titleize(inString){
    let arr=inString.split(" ");
    arr[0].charAt(0).toUpperCase()+ arr[0].slice(1);
    let arr2=[];
    arr.map((element)=>{
    if (!(element === 'a' || element==='an' || element ==='but' || element==='of' || element==='and' || element==='for' || element ==='at' || element==='by' || element==='from' || element==='the'))
   arr2.push(element.charAt(0).toUpperCase()+ element.slice(1));
   else
   arr2.push(element)
    })
    return arr2.join(" ");
  }
}