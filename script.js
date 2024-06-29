document.addEventListener("DOMContentLoaded", () => {
    const cocktails = {
        happy: [
            "Margarita", "Piña Colada", "Mojito", "Sex on the Beach", "Bellini", "Old Fashioned", "Negroni", "Whiskey Sour", "White Russian", "Tom Collins", "Aperol Spritz", "Moscow Mule", "Sangria", "Dark and Stormy", "Gin and Tonic", "Daiquiri", "French 75", "Mimosa", "Paloma", "Rum Punch", "Mai Tai", "Tequila Sunrise", "Hurricane", "Blue Lagoon", "Lemon Drop Martini", "Brandy Alexander", "Sea Breeze", "Caipirinha", "Amaretto Sour", "Pimm's Cup", "Grasshopper", "Bees Knees", "Sazerac", "Singapore Sling", "Corpse Reviver #2", "Kir Royale", "Boulevardier", "Planter's Punch", "Michelada", "Shandy", "Fuzzy Navel",
            
        ],
        sad: [
            "The Swole’d Fashioned", "The Lokomosa", "The Red Hand of Ulster", "Becky’s Problem", "The Rob Marley", "Barbicide", "Rob Dyrdek’s Sweat", "Purple Nihilism", "Possum Vanderbilt", "The Latest Technology", "Red Anus", "Ronald McBombed", "The Quaalude Chaser", "The Unemployed Chimney Sweep", "Where the Red Fern Grows: The Drink", "The Absolute Fuckton of Bitters and Tap Water",
        ],
        angry: [
            "Fireball Smash", "Angry Orchard Punch", "Furious Mojito", "Wrathful Whiskey Sour", "Rage Red Sangria", "Fuming Margarita", "Irate Irish Coffee", "Stormy Weather Mule", "Burning Blood Orange Martini", "Mad Manhattan", "Fierce Flamingo", "Aggressive Apple Martini", "Hostile Hurricane", "Seething Screwdriver", "Vexed Vodka Collins", "Raging Red Snapper", "Ireful Long Island Iced Tea", "Incensed Inferno", "Hot-Headed Highball", "Belligerent Bourbon Smash",
        ],
        tired: [
            "Sleepytime Sangria", "Drowsy Daiquiri", "Restful Rum Punch", "Lethargic Lemonade", "Yawning Yellow Bird", "Slumber Sour", "Calm Collins", "Tranquil Tequila Sunrise", "Lazy Long Island Iced Tea", "Napping Negroni", "Dozy Daiquiri", "Peaceful Piña Colada", "Snoozy Screwdriver", "Serene Sazerac", "Comfy Cosmopolitan", "Sluggish Spritz", "Unwind Whiskey", "Mellow Mojito", "Chilled Champagne Cocktail", "Relaxed Rum Runner",
            // Add more cocktails here...
        ],
        relaxed: [
            "Margarita", "Mojito", "Piña Colada", "Martini", "Cosmopolitan", "Old Fashioned", "Daiquiri", "Manhattan", "Whiskey Sour", "Tom Collins", "Bloody Mary", "Negroni", "Gin and Tonic", "Mai Tai", "Paloma",
        ],
        energetic: [
            "Espresso Martini", "Long Island Iced Tea", "Moscow Mule", "Tequila Sunrise", "Sangria", "Rum Punch", "Caipirinha", "Aperol Spritz", "Cuba Libre", "Pimm's Cup", "Blue Lagoon", "Zombie", "Irish Coffee", "Dark 'n' Stormy", "French 75",
        ],
        adventurous: [
           "Absinthe", "Black Russian", "Jungle Bird", "Corpse Reviver #2", "Sazerac", "Singapore Sling", "Painkiller", "Vieux Carré", "Zombie Punch", "Hurricane", "El Diablo", "Fog Cutter", "Mezcal Margarita", "Penicillin", "Bourbon Milk Punch",
        ],
        cozy: [
            "Hot Toddy", "Mulled Wine", "Irish Coffee", "Baileys Hot Chocolate", "Hot Buttered Rum", "Spiked Apple Cider", "Eggnog", "Warm Sangria", "Chai Martini", "Gingerbread Martini", "Peppermint Patty", "Pumpkin Spice White Russian", "Cinnamon Maple Whiskey Sour", "Hot Apple Pie Cocktail", "Butterscotch Coffee",
        ]
    };

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

    generateButton.addEventListener('click', () => {
        const selectedMood = moodSelector.value;
        const moodCocktails = cocktails[selectedMood];
        const randomIndex = Math.floor(Math.random() * moodCocktails.length);
        const randomCocktail = moodCocktails[randomIndex];
        cocktailDisplay.textContent = `Since you are ${selectedMood} I would suggest ${randomCocktail} (cocktail) for your  mood?`;

        const moodCompliments = compliments[selectedMood];
        const randomComplimentIndex = Math.floor(Math.random() * moodCompliments.length);
        const randomCompliment = moodCompliments[randomComplimentIndex];
        complimentDisplay.textContent = randomCompliment;
    });
});
