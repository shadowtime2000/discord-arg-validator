# discord-arg-validator
Argument type validator for Discord bots

## Installation
`npm i discord-arg-validator`

### Usage
```javascript
const { validate, Number, YesNo, String } = require("discord-arg-validator");

validate(["foo", "bar", "2", "yes", "no"], [String, String, Number, YesNo, YesNo]) //true
validate(["foo", "bar", "23"], [Number, Number, YesNo]) // TypeError
```