# VS code configuration  

## stackoverflow  

http://stackoverflow.com/questions/30140595/show-whitespace-characters-in-visual-studio-code/40081253#40081253  


## configuration

```codes
# Show whitespace characters in Visual Studio Code

// Place your settings in this file to overwrite default and user settings.
{
    "editor.renderWhitespace": "all"
}

``` 



## my configuration

```json
// Place your settings in this file to overwrite the default settings
{
    "typescript.check.tscVersion": true,
    "files.autoSave": "afterDelay",
    "files.associations": { "*.js": "javascript" },
    "editor.renderWhitespace": "all",
    "editor.tabCompletion": true,
    "editor.mouseWheelZoom": true,
    "editor.formatOnSave": false,
    "html.format.wrapLineLength": 80,
    "editor.wrappingColumn": 100,
    "html.format.enable": false,
    "html.format.extraLiners": "/body",
    "workbench.statusBar.visible": true
}
``` 

http://www.jianshu.com/p/80e983201f86

## 调整行高

// Place your settings in this file to overwrite the default settings
{
    "typescript.tsdk": "./ng2-app/node_modules/typescript/lib",
    "typescript.check.tscVersion": false,
    "typescript.check.workspaceVersion": false,
    "editor.tabCompletion": true,
    "editor.mouseWheelZoom": true,
    "editor.lineHeight": 24,
    "editor.fontSize": 13,
    "editor.formatOnSave": false,
    "html.format.wrapLineLength": 80,
    "editor.wrappingColumn": 80,
    "html.format.enable": false,
    "html.format.extraLiners": "/body",
    "workbench.statusBar.visible": true,
    "editor.renderWhitespace": "all"
}

Extensions

@recommended:keymaps


https://code.visualstudio.com/docs/customization/locales


zh-CN


locale.json

Ctrl+Shift+P

"locale":"zh-CN"


{
    // Defines VSCode's display language.
    // See https://go.microsoft.com/fwlink/?LinkId=761051 for a list of supported languages.
    // Changing the value requires to restart VSCode.
    "locale":"en"
}


"locale": "en-US"





vscode-babel-format-error





# error handler  


## vs-babel-format-error  

After I change the ** language mode** from ** Javascript (babel)** to ** Javascript React** , everything is OK!







# old setting.json

```json

// Place your settings in this file to overwrite the default settings
{
    "typescript.tsdk": "./ng2-app/node_modules/typescript/lib",
    "typescript.check.tscVersion": false,
    "typescript.check.workspaceVersion": false,
    "editor.tabCompletion": true,
    "editor.mouseWheelZoom": true,
    "editor.formatOnSave": false,
    "html.format.wrapLineLength": 80,
    "editor.wrappingColumn": 100,
    "html.format.enable": false,
    "html.format.extraLiners": "/body",
    "workbench.statusBar.visible": true,
    "editor.renderWhitespace": "all"
}

```


# new setting.json


https://github.com/Microsoft/vscode/issues/18781#issuecomment-274265204



# VS code setting.json & React JS


https://gist.github.com/xgqfrms-gildata/d8b3cb0246d881dcf580df4745ad7920


将设置放入此文件中以覆盖默认设置


https://code.visualstudio.com/docs/languages/overview

https://code.visualstudio.com/docs/languages/javascript

https://code.visualstudio.com/docs/getstarted/settings

```js 


{
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "jspm_packages": true,
        "node_modules": true
    },
    "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true
    },
    "files.watcherExclude": {
        "**/.git/objects/**": true,
        "**/.git/subtree-cache/**": true,
        "**/node_modules/*/**": true
    },
    "editor.formatOnSave": false,
    "editor.renderWhitespace": "all",
    "editor.fontSize": 14,
    "editor.tabSize": 4,
    "editor.multiCursorModifier": "alt",
    "editor.wordWrap": "on",
    "editor.insertSpaces": true,
    "files.encoding": "utf8",
    "terminal.integrated.shell.windows": "C:\\Windows\\Sysnative\\WindowsPowerShell\\v1.0\\powershell.exe",
    "[typescript]": {
        "editor.formatOnSave": true,
        "editor.formatOnPaste": true
    },
    "[markdown]": {
        "editor.formatOnSave": true,
        "editor.renderWhitespace": "all",
        "editor.acceptSuggestionOnEnter": "off"
    },
    "files.associations": {
        "*.jsx": "JavaScript React",
        "*.js": "javascriptreact"
    }
}

```









