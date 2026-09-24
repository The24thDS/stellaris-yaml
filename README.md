Syntax highlighting and color themes for Stellaris localisation files. Has three themes derived from the most used themes in the stellaris modding community.

## Features

- adds syntax for Stellaris localisation files to parse color codes, loc key references, bracket commands and icon codes;
- adds three color themes to work with the new syntax based on `Dark+`, `Stellaris Theme` and `Night Owl`.

### Night Owl (Stellaris Locs)

![Night Owl theme with Stellaris Locs](https://github.com/The24thDS/stellaris-yaml/raw/HEAD/images/nightowl.jpg)

### Dark+ (Stellaris Locs)

![Dark+ theme with Stellaris Locs](https://github.com/The24thDS/stellaris-yaml/raw/HEAD/images/darkplus.jpg)

### Stellaris Theme (Stellaris Locs)

![Stellaris Theme with Stellaris Locs](https://github.com/The24thDS/stellaris-yaml/raw/HEAD/images/stellaristheme.jpg)

## Usage

1. Install the extension.
2. Pick one of the three provided themes to make the syntax highlighting show.

## Stellaris localisation coverage

The grammar has been checked against the English localisation shipped with Stellaris Cygnus v4.5.1 and the game's generated <code>logs/script_documentation/localizations.log</code>.

- Highlights localisation keys with numeric versions, such as <code>crisis.2010.desc:0 "Text"</code>.
- Highlights scoped commands (<code>[Root.GetName]</code>), <code>$key$</code> references, <code>£icon£</code> references, and concept links with labels (<code>['concept_pc_frozen', Frozen Worlds]</code>).
- Recognises <code>[[</code> as an escaped opening bracket, as documented by the game.
- Includes the <code>§A</code>, <code>§U</code>, <code>§t</code>, <code>§0</code>, <code>§1</code>, and <code>§2</code> color codes found in the current game files alongside the codes already supported.

This extension provides syntax highlighting; it does not validate whether a localisation key or command exists in the game.

## Known Issues

None. Please create an issue if you find any.

---

**Enjoy!**
