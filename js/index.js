const homeContainer = document.createElement('div')
const features = document.createElement('div')
homeContainer.className = 'home-container'
features.className = 'features'
homeContainer.appendChild(features)
document.body.appendChild(homeContainer)

for(let i = 0; i < 4; i++){
    const clickable = document.createElement('a')
    const feature = document.createElement('div')
    const textContainer = document.createElement('div')
    const title = document.createElement('h2')
    const desc = document.createElement('p')


    clickable.id = `click${i}`
    feature.className = 'feature'
    feature.id = `feature${i}`

    textContainer.className = 'text-container'

    title.id = `title${i}`
    desc.id = `desc${i}`

    textContainer.appendChild(title)
    textContainer.appendChild(desc)

    feature.appendChild(textContainer)
    clickable.appendChild(feature)
    features.appendChild(clickable)
}

document.getElementById('feature0').id = 'dice-home'
document.getElementById('feature1').id = 'calc-home'
document.getElementById('feature2').id = 'guess-home'
document.getElementById('feature3').id = 'watch-home'

document.getElementById('click0').href = 'dice.html'
document.getElementById('click1').href = 'calculator.html'
document.getElementById('click2').href = 'guess.html'
document.getElementById('click3').href = 'stopwatch.html'

document.getElementById('title0').innerText = 'Dice Roll'
document.getElementById('title1').innerText = 'Calculator'
document.getElementById('title2').innerText = 'Guessing Game'
document.getElementById('title3').innerText = 'Stopwatch'

document.getElementById('desc0').innerText = 'Roll two dice and get a random result'
document.getElementById('desc1').innerText = 'Basic Calculator'
document.getElementById('desc2').innerText = 'Guess a number between 1 and 100'
document.getElementById('desc3').innerText = 'Just a stopwatch'
