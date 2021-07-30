// This returns the ID of the process
console.log(process.pid)

// This returns an array of all executed commands
console.log(process.argv)

// This returns the users enviroment details 
console.log(process.env)

// This returns the current platform the node is running on
console.log(process.platform)

// This returns the node version and details for where it is from
console.log(process.release)

// This returns the version information of all installed modules
console.log(process.versions)

// This returns a readable stream connected to stdin, this can be used for legacy nodeJS programs
console.log(process.stdin())

// This returns a writeable stream connected to stdout
console.log(process.stdout())

// This returns the uptime of the node
console.log(process.uptime())

// This returns an object showing the nodeJS's memoryUsage
console.log(process.memoryUsage())

// This will exit the current enviroment
console.log(process.exit())

// This will kill an input enviroment
console.log(process.kill(pid))