LearnersGuild EmojiCipher MellowCoatimundi
==========================================

## Specs

This is [Learners Guild Goal #7](https://github.com/GuildCrafts/web-development-js/issues/7).

- [x] Code is packaged as a module that exports (at least) the two functions encode and decode.
- [x] Exported functions can encode and decode alphanumeric characters to/from emoji.
- [x] Tests for both encode and decode functions are included and passing.
- [x] All source code is written using ECMAScript 2015 syntax.
- [x] Source code contains a README.md file with instructions and example usage.

As a stretch goal, we also built a [demo web app](https://emoji-cipher-demo-lg-mc.herokuapp.com/) - see [its repo](https://github.com/phoniks/LG-EmojiCipher-Demo-Webapp-Mellow-coatmundi-).

## Installation and Usage

```
npm install emoji-cipher-lg-mc
node
> var cipher = require('emoji-cipher-lg-mc')
undefined
> cipher.encode('hello')
💩🤓🖖🖖🍕
> cipher.decode('💦🍕🌂🖖👿')
world
```

## Demo App

See our [live demo](https://emoji-cipher-demo-lg-mc.herokuapp.com/) and its [repo](https://github.com/phoniks/LG-EmojiCipher-Demo-Webapp-Mellow-coatmundi-).


## Credits

Mihai Banulescu
Ana Sauceda
Rachel Ralston
John Hopkins
[👏 to Jared for his help!]