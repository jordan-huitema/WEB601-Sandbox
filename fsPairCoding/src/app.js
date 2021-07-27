const fs =require('fs')
const path =require('path')

// Write to file
fs.writeFile('/src/content.txt', 'This is my first file', err => {
    if(err){ throw err }
    process.stdout.write('File created successfully')
})

// Read from file
const filePath = path.join(process.cwd(),'conent.txt')
fs.readFile(filePath, (err, con) => {
    if(err){ throw err }
    process.stdout.write(con)
})

// Read dir contents
fs.readdir(process.cwd(), (err,files) => {
    if(err){ throw err }
    console.log(files)
})

// Delete file
fs.unlink(filePath, err => {
    if(err){ throw err }
    console.log('File deleted successfully')
})

// Create dir 
fs.mkdir(`${process.cwd()}/myFolder/subFolder/`, { recursive : true}, err =>{
    if(err){ throw err }
    console.log('Created folders')
})

// Delete dir
fs.rmdir(`${process.cwd()}/myFolder/subFolder/`, { recursive : true}, err =>{
    if(err){ throw err }
    console.log('Folders deleted')
})

// Rename dir
fs.rename(`${process.cwd()}/myFolder/subFolder/`, `${process.cwd}/myFolder/newFolder/`, err => {
    if(err){ throw err }
    console.log('Renamed folder')
})

// Rename file
fs.rename(`${process.cwd()}/content.txt`, `${process.cwd()}/newContent.txt`, err => {
    if(err){ throw err }
    console.log('Renamed folder')
})