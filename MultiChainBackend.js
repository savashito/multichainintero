// this assumes that
// multichain-util create chainInteroEjido
// multichaind chainInteroEjido -daemon
// multichain-cli chainInteroEjido
// imports
// tufesamelleva
const cmd=require('node-cmd');
// global variables
const chainAddr = "chainInteroEjido@172.30.2.173:4787";
const multichainCli = "multichain-cli";
// const multichainCli = "python TestMultiChain.py";
function ConnectToEjidoChain(){
	const proc = 'multichaind chainInteroEjido@172.30.2.173:4787';
	const proc2 = 'multichaind chainInteroEjido -daemon';
	cmd.get(proc);
	cmd.get(proc2);
}
function StartInteractiveModeEjido(){
	const proc =  multichainCli+" chainInteroEjido";
	const processRef = cmd.get(proc);
	let data_line = "";
	processRef.stdin.on(
	  'data',
		function(data) {
			data_line += data;
			if (data_line[data_line.length-1] == '\n') {
				console.log(data_line);
			}
		}
	);
	processRef.stdout.on(
	  'data',
		function(data) {
			data_line += data;
			if (data_line[data_line.length-1] == '\n') {
				console.log(data_line);
			}
		}
	);
	processRef.stderr.on(
	  'data',function(data) {
			data_line += data;
			if (data_line[data_line.length-1] == '\n') {
				console.log(data_line);
			}
		}
	);


	let InteractiveEjido = {
		processRef:processRef,
		run:function(proc){
			console.log ("sending "+proc)
			processRef.stdin.write(proc);
			console.log("Meow")
		},
	};
	return InteractiveEjido;
}
const EjidoInteractive = StartInteractiveModeEjido();
EjidoInteractive.run("Hello\n");
/*
 
const processRef=cmd.get('python -i');
let data_line = '';
 
//listen to the python terminal output 
processRef.stdout.on(
  'data',

  function(data) {
    data_line += data;
    if (data_line[data_line.length-1] == '\n') {
      console.log(data_line);
    }
  }
);
 
const pythonTerminalInput=`primes = [2, 3, 5, 7]
for prime in primes:
    print(prime)
 
`;
 
//show what we are doing 
console.log(`>>>${pythonTerminalInput}`);
 
//send it to the open python terminal 
processRef.stdin.write(pythonTerminalInput);
 
 */