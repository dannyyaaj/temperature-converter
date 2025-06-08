const c = document.querySelector("#celsius > input")
const f = document.querySelector("#fahrenheit > input")
const k = document.querySelector("#kelvin > input")

function roundNum(num) {
  return Math.round(num * 100) / 100
}

function celsiusToFahrenheitAndKelvin() {
  const cTemp = parseFloat(c.value)
  const fTemp = cTemp * (9 / 5) + 32
  const kTemp = cTemp + 273.15
  f.value = roundNum(fTemp)
  k.value = roundNum(kTemp)
}

function fahrenheitToCelsiusAndKelvin() {
  const fTemp = parseFloat(f.value)
  const cTemp = (fTemp - 32) * 5 / 9
  const kTemp = (fTemp + 459.67) * 5 / 9
  c.value = roundNum(cTemp)
  k.value = roundNum(kTemp)
}

function kelvinToFahrenheitAndCelsius() {
  const kTemp = parseFloat(k.value)
  const cTemp = kTemp - 273.15
  const fTemp = (kTemp * 9 / 5) - 459.669
  c.value = roundNum(cTemp)
  f.value = roundNum(fTemp)
}

function main() {
  c.addEventListener("input", celsiusToFahrenheitAndKelvin)
  f.addEventListener("input", fahrenheitToCelsiusAndKelvin)
  k.addEventListener("input", kelvinToFahrenheitAndCelsius)
}

main()