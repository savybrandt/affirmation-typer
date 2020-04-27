import AFFIRMATIONS from '../../data/affirmations';

const getRandomIndex = () => Math.floor(Math.random() * AFFIRMATIONS.length); 

export const getAffirmation = () => AFFIRMATIONS[getRandomIndex()]