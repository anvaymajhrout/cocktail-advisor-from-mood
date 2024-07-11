document.addEventListener("DOMContentLoaded", () => {
    const compliments = {
        happy: [
            "You're the life of the party!",
            "Your happiness is contagious!",
            "You're a ray of sunshine on a cloudy day!"
        ],
        sad: [
            "Cheer up! Here's to brighter days!",
            "You deserve a pick-me-up like this!",
            "You're stronger than you think. Cheers to resilience!"
        ],
        angry: [
            "Let's turn that frown upside down!",
            "This drink will cool off that fiery mood!",
            "You're fierce, but this cocktail is fierce-er!"
        ],
        tired: [
            "Time to relax and unwind!",
            "You've earned a drink that matches your chill vibes!",
            "This cocktail will rejuvenate you in no time!"
        ],
        relaxed: [
            "Cheers to your laid-back attitude!",
            "Sit back, relax, and enjoy this cocktail!",
            "You're the epitome of relaxation!"
        ],
        energetic: [
            "Get ready to party with this energizing cocktail!",
            "You're unstoppable! Enjoy this high-energy drink!",
            "This drink will keep up with your lively spirit!"
        ],
        adventurous: [
            "Here's to your adventurous side!",
            "This bold drink matches your fearless personality!",
            "You're always up for a challenge - cheers to that!"
        ],
        cozy: [
            "Stay warm and cozy with this delightful drink!",
            "You're like a snug blanket on a chilly night!",
            "Enjoy this comforting cocktail!"
        ]
    };

    const moodSelector = document.getElementById('mood-selector');
    const generateButton = document.getElementById('generate-button');
    const cocktailDisplay = document.getElementById('cocktail');
    const complimentDisplay = document.getElementById('compliment');

    generateButton.addEventListener('click', async () => {
        const selectedMood = moodSelector.value;
        const moodCompliments = compliments[selectedMood];
        const randomComplimentIndex = Math.floor(Math.random() * moodCompliments.length);
        const randomCompliment = moodCompliments[randomComplimentIndex];
        complimentDisplay.textContent = randomCompliment;

        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`);
            const data = await response.json();
            const cocktails = data.drinks;
            const randomIndex = Math.floor(Math.random() * cocktails.length);
            const randomCocktail = cocktails[randomIndex].strDrink;
            cocktailDisplay.textContent = `Since you are ${selectedMood}, I would suggest ${randomCocktail} (cocktail) for your mood!`;
        } catch (error) {
            console.error("Error fetching cocktail data:", error);
            cocktailDisplay.textContent = "Sorry, we couldn't find a cocktail for your mood. Please try again later.";
        }
    });
});
