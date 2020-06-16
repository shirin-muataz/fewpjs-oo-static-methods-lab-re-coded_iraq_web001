class Formatter {
  //add static methods here
  
  static capitalize(inString){
   return  inString.charAt(0).toUpperCase()+inString.slice(1);
  }
  
  static sanitize(inString){
   return  inString.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
  }
  
  static titleize(inString){
    let arr=inString.split(" ");
    arr[0].toUpperCase();
    for (element of arr)
    if (!(element === 'a' || element==='an' || element ==='but' || element==='of' || element==='and' || element==='for' || element ==='at' || element==='by' || element==='from'))
    element.toUpperCase()
    return arr.join();
  }
}