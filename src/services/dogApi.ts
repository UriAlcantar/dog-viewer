import type { Dog } from '../types/dog'
import { v4 as uuid } from 'uuid'

// should go on the env file...
const BASE_URL = 'https://dog.ceo/api';

//type BreedsResponse = Record<string, string[]>;
/*
function flattenBreeds(message: BreedsResponse): string[] {
    return Object.entries(message).flatMap(([breed, subBreeds]) => {
        return subBreeds.length ? subBreeds.map((subBreed) => `${breed} ${subBreed}`) : [breed];
    });
}
    */

function getBreedByUrl(url: string): string {
    const found = url.match(/\/breeds\/([^/]+)\//);
    if (!found) return 'Error finding breed';
    const breedPath = found[1];
    const breedsSplit = breedPath.split('-')
    if (breedsSplit.length > 1) {
        return `${breedsSplit[1]} ${breedsSplit[0]}`
    }
    return breedsSplit[0]
}

export async function getMainDog(): Promise<Dog> {
    const response = await fetch(`${BASE_URL}/breeds/image/random`);
    const data = await response.json();
    return {
        id: uuid(),
        image: data.message,
        breed: getBreedByUrl(data.message)
    }
}

export async function getAllDogs(): Promise<Dog[]> {
    const response = await fetch(`${BASE_URL}/breeds/image/random/10`);
    const data = await response.json();
    
    return data.message.map((url: string) => ({
        id: uuid(),
        image: url,
        breed: getBreedByUrl(url)
    }))
}
