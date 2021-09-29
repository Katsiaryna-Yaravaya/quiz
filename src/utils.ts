import { Countries } from './interface/countries.interface'

export const generateIndexCountry = (arrayFindDataObject, num: number, correctAnswerName?: string): Countries[] => {
  let uniqueNumber: number[] = []

  while (uniqueNumber.length < num) {
    let generateNumber: number = Math.floor(Math.random() * 24) + 1
    //249
    if (!uniqueNumber.includes(generateNumber) && arrayFindDataObject[generateNumber-1]?.name !== correctAnswerName) {
      uniqueNumber.push(generateNumber)
    }
  }

  if (arrayFindDataObject.length) {
    return uniqueNumber.map(item => {
      return arrayFindDataObject.find((country, idx) => {
        if (item === idx + 1) {
          return country
        }
      })
    })
  }
  return []
}
