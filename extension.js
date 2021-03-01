// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('"decimalToBinaryFromBen" is now active!');

  // [VSCODE 插件开发：用户输入输出 - 黑风风 - 博客园](https://www.cnblogs.com/virde/p/vscode-extension-input-and-output.html)

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'decimalToBinaryFromBen.helloWorld',
    function () {
      // The code you place here will be executed every time your command is executed
      vscode.window
        .showInputBox({
          // 这个对象中所有参数都是可选参数
          password: false, // 输入内容是否是密码
          ignoreFocusOut: true, // 默认false，设置为true时鼠标点击别的地方输入框不会消失
          placeHolder: 'decimal number ?', // 在输入框内的提示信息
          prompt: 'for example, 0 => 0,   2 => 10,   4 => 100, ...', // 在输入框下方的提示信息
          validateInput: function (text) {
            const textToNum = Number(text);
            // 对输入内容进行验证并返回
            if (typeof textToNum !== 'number') {
              return 'Only allow number input';
            }
          },
        })
        .then(function (msg) {
          // console.log("用户输入："+msg);
          // Display a message box to the user
          vscode.window.showInformationMessage(`${Number(msg).toString(2)}`);
        });

      // let result = ''
      // Number('14').toString(2)
      // // Display a message box to the user
      // vscode.window.showInformationMessage(
      //   'Hello World from decimal to binary!'
      // );
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
