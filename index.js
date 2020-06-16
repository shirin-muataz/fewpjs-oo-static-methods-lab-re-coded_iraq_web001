class Formatter {
  //add static methods here
  
  static capitalize(inString){
   return  inString.charAt(0).toUpperCase();
  }
  
  static sanitize(inString){
   return  inString.replace(/[^A-Za-z0-9-']+/g,'');
  }
}