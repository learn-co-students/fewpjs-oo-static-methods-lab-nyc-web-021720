class Formatter {
  //add static methods here

  static capitalize(str){
   return str[0].toUpperCase()+str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-'-\s]+/g, '')
  }

  static titleize(str){
    const exclude = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let arr= str.split(" ")
    let firstWord=Formatter.capitalize(arr[0])

    let map= arr.slice(1).map(word =>{
      if(exclude.includes(word)){
        return word
      }
      else{
        return Formatter.capitalize(word)
      }
    })
    let newArr= firstWord+ " " +map.join(" ") 
    return newArr
  }
}