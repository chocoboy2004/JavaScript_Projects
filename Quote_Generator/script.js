const quoteArr = [
    {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', author: 'Nelson Mandela'}, 
    {quote: 'The way to get started is to quit talking and begin doing.', author: 'Walt Disney'}, 
    {quote: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt'}, 
    {quote: 'You must be the change you wish to see in the world.', author: 'Mahatma Gandhi'}, 
    {quote: 'It is during our darkest moments that we must focus to see the light.', author: 'Aristotle'} 
]


const quoteArea = document.querySelector('.quote')
const authorArea = document.querySelector('.author')

let i = 0;
function increment() {
    quoteArea.innerText = quoteArr[i].quote
    authorArea.innerText = '- ' + quoteArr[i].author
    i=(i+1)%quoteArr.length
}

document.querySelector('.press').addEventListener('click', increment)
