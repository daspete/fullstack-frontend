const util = require('util');
const { cwd } = require('process');
const exec = util.promisify(require('child_process').exec);

module.exports = class Task {
    static async Run({ 
        name = null, 
        args = [], 
        env = {}, 
        onStdout = (txt) => { console.log(txt.trim()) },
        onStderr = (txt) => { console.error(txt.trim()) },
        cwd = null
    }){
        const _process = exec(`${ name } ${ args.join(' ') }`, {
            cwd: cwd,
            env: {
                ...process.env,
                ...env
            }
        })

        _process.child.stdout.on('data', (text) => { onStdout(text) })
        _process.child.stderr.on('data', (text) => { onStderr(text) })
        
        const { stdout, error, stderr } = await _process
        
        if(error) return { error, stderr }
        
        return stdout
    }
}