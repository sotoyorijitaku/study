// enum型 暗黙的に自然数の値となる
enum Language {
  English,
  Spanish,
  Russian
}
  
const l: Language = Language.Spanish

console.log(l)

// 文字列もOK
enum Country {
  Japan = 'Nihon',
  USA = 'America'
}

const country: Country = Country.Japan
console.log(country.toString())