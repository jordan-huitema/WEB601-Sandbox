const fetch = require('node-fetch')
const { performance } = require('perf_hooks');

// Preformance logger
const prefLog = () => {
    pref = 0;
    perfTest = performance.now();
    return `${Math.round(performance.now() - pref)}ms`
}

// Main func
const main = async (prefLog) => {
    console.log(prefLog(), '- Started Main')
    console.log(prefLog(), '- Getting important Facts')

    // Build array of 3 facts
    let facts = []
    for (i = 0; i < 3; i++) {
        facts.push(getImportantFacts())
    }

    // Print facts array before resolved
    console.log(prefLog(), ' -', '\n', facts, '\n')

    // Wait for all facts to arrive, print imporant facts
    Promise.all(facts).then(facts => {
        console.log(prefLog(), '- Got facts, printing')
        facts.forEach(fact => console.log('\n', fact))
    })
}

// Get facts fetcher
const getImportantFacts = async (prefLog) => {
    // Fetch fact
    return fetch('https://catfact.ninja/fact', { headers: { 'Content-Type': 'application/json' } })
        .then(res => res.json())
        .then(catFact => { return `${catFact.fact}` })
        .catch(err => console.error(err))
}

main(prefLog)