let quotes = [
    `The greatest glory in living lies not in never falling, but in rising every time we fall. <blockquote>-Nelson Mandela</blockquote>`,
    "The way to get started is to quit talking and begin doing. <blockquote>-Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. </blockquote>-Steve Jobs</blockquote>",
    "If life were predictable it would cease to be life, and be without flavor. <blockquote>-Eleanor Roosevelt</blockquote>",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. <blockquote>-Oprah Winfrey</blockquote>",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. <blockquote>-James Cameron</blockquote>",
    "Life is what happens when you're busy making other plans. <blockquote>-John Lennon</blockquote>",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. <blockquote>-Mother Teresa</blockquote>",
    "When you reach the end of your rope, tie a knot in it and hang on. <blockquote>-Franklin D. Roosevelt</blockquote>",
    "Always remember that you are absolutely unique. Just like everyone else. <blockquote>-Margaret Mead</blockquote>",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. <blockquote>-Robert Louis Stevenson</blockquote>",
    "The future belongs to those who believe in the beauty of their dreams. <blockquote>-Eleanor Roosevelt</blockquote>",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. <blockquote>-Benjamin Franklin</blockquote>",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. <blockquote>-Helen Keller</blockquote>",
    "It is during our darkest moments that we must focus to see the light. <blockquote>-Aristotle</blockquote>",
    "Whoever is happy will make others happy too. <blockquote>-Anne Frank</blockquote>",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. <blockquote>-Ralph Waldo Emerson</blockquote>",
    "Life is made of ever so many partings welded together. <blockquote>-Charles Dickens</blockquote>",
    "The way to get started is to quit talking and begin doing. <blockquote>-Walt Disney</blockquote>",
    "If you really look closely, most overnight successes took a long time. <blockquote>-Steve Jobs</blockquote>",
]
let randomNumer = Math.floor(Math.random()*(quotes.length));
document.getElementById('quotes').innerHTML = quotes[randomNumer];

function newQuote(){
    let randomNumer = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quotes').innerHTML = quotes[randomNumer];
}