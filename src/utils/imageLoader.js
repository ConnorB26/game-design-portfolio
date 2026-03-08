const imagesContext = require.context('../assets/games', true, /\.(webp)$/);

/**
 * Resolves all image references for a game object.
 * @param {object} game - Raw game data from games.json
 * @param {object} options
 * @param {boolean} [options.includeScreenshots=true] - Whether to resolve screenshot images
 * @returns {object} Game object with resolved image imports
 */
export const loadGameImages = (game, { includeScreenshots = true } = {}) => {
    const mainMenu = imagesContext(`./${game.id}/${game.mainMenu}`);
    const icon = imagesContext(`./${game.id}/${game.icon}`);
    const screenshots = includeScreenshots
        ? game.screenshots.map((s) => imagesContext(`./${game.id}/${s}`))
        : [];

    return { ...game, mainMenu, icon, screenshots };
};
