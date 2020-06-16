class Formatter {
  //add static methods here
  
  static capitalize(inString){
   return  inString.charAt(0).toUpperCase()+inString.slice(1);
  }
  
  static sanitize(inString){
   return  inString.replace(/[^A-Za-z0-9-']+/g,'');
  }
  
  static titleize(inString){
    let arr=inString.split(" ");
    for (element in inString)
    if (!element === 'a' || element==='an' || element ==='but' || element==='of' || element==='and' || element==='for' || element ==='at' || element==='by' || element==='from')
    
  }
}