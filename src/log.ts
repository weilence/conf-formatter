import * as vscode from 'vscode';

const logger = vscode.window.createOutputChannel('conf-formatter', {log: true});
export default logger;