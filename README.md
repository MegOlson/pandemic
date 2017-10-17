### Specs

* Program infects 3 cities randomly on first round with level 3 infection.
  * Example Input: first turn
  * Example Output: "Cities infected: New York, Paris, Tokyo"
* Program increases infection rate by 1 at every 30 seconds if user fails to cure infection on given city.
  * User Input: nothing
  * User Output: [Paris, 4]
* Program allows user to cure infection on given city.
  * User Input: click "Cure"
  * User Output: [Paris, 0]
* If city reaches 5 or more, there is an outbreak.
  * Example input: Paris Infection rate: 5, Madrid Infection rate: 0, Essen Infection rate: 0
  * Example output: Paris Outbreak!  Madrid Infection rate: 1, Essen Infection rate:1
* User can select difficulty that will change the speed of infections.
  * Example input: Easy
  * Example output: 1000
