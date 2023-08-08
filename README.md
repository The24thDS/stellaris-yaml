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

## Known Issues

## Extension Settings

If you want to customize the colors for the new keywords you can add this to your `settings.json` and change it to your liking

<details>
  <summary>Custom token colors</summary>

```json
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": "string.quoted.double.yaml",
        "settings": {
          "foreground": "#d9d9d9",
        }
      },
      {
        "scope": [
          "keyword.bracket-command.stellaris.yml",
          "keyword.loc-key.stellaris.yml"
        ],
        "settings": {
          "fontStyle": "underline",
        }
      },
      {
        "scope": "keyword.icon-code.stellaris.yml",
        "settings": {
          "fontStyle": "underline italic",
          "foreground": "#c0b235"
        }
      },
      {
        "scope": "keyword.color-code.w.stellaris.yml",
        "settings": {
          "foreground": "#dcdcdc",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "keyword.color-code.t.stellaris.yml",
        "settings": {
          "foreground": "#d9d9d9",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "keyword.color-code.l.stellaris.yml",
        "settings": {
          "foreground": "#9e8f75",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "keyword.color-code.p.stellaris.yml",
        "settings": {
          "foreground": "#bf5e5e",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "keyword.color-code.r.stellaris.yml",
        "settings": {
          "foreground": "#d2483b",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "keyword.color-code.s.stellaris.yml",
        "settings": {
          "foreground": "#b07921",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "keyword.color-code.h.stellaris.yml",
        "settings": {
          "foreground": "#d69123",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "keyword.color-code.y.stellaris.yml",
        "settings": {
          "foreground": "#d2d62c",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "keyword.color-code.g.stellaris.yml",
        "settings": {
          "foreground": "#23bf20",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "keyword.color-code.e.stellaris.yml",
        "settings": {
          "foreground": "#73d9b0",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "keyword.color-code.b.stellaris.yml",
        "settings": {
          "foreground": "#2b8ed9",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "keyword.color-code.m.stellaris.yml",
        "settings": {
          "foreground": "#8b2dcb",
          "fontStyle": "bold"
        }
      },
    ],
  },
```

</details>

## Release Notes

### 1.1.0

Update to syntax and themes

- fixed the following issues:
  - color codes without a matching close tag will no longer affect the rest of the document
  - locs now work with scalars (e.g., `my_loc_key` will now be colored in `my_loc_key:1 "loc text"`)
- references (e.g., `$some_loc_key$` and `[some_command]`) will now be the same scoped color as neighboring text
- themes have new color codes from latest Stellaris updates


### 1.0.0

Initial release

- yaml syntax
- dark+, stellaris theme and night owl themes

---

**Enjoy!**
