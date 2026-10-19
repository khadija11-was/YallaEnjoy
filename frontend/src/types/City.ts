export interface City {
    id: number;                 // Identifiant unique de la ville en base de données (ex: 1, 2)
    name: string;               // Le nom de la ville (ex: "Tanger", "Marrakech")
    imageUrl: string;           // L'URL de l'image (provenant d'Unsplash ou de ton futur Cloud)
    activitiesCount: number;    // Le nombre d'activités disponibles dans cette ville
    suggestionsCount: number;   // Le nombre de destinations/suggestions associées
}