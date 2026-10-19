import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react'; // npm install lucide-react
import { type City } from '../types/City';
import api  from '../services/api';

export const HomePage: React.FC = () => {
    const [cities, setCities] = useState<City[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

//we will change using useEffect to use our axiosInstance
    // useEffect(() => {
    //     // Récupération des villes depuis Spring Boot
    //     fetch('http://localhost:8080/api/cities/active')
    //         .then((res) => res.json())
    //         .then((data: City[]) => setCities(data))
    //         .catch((err) => console.error("Erreur chargement villes:", err));
    // }, []);
    useEffect(() => {
        let isMounted = true;

        const fetchActiveCities = async () => {
            try {
                setLoading(true);
                // 2. Appel simple via l'instance 'api' (l'URL de base /api est déjà gérée)
                const response = await api.get<City[]>('/cities/active');

                if (isMounted) {
                    setCities(response.data);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    // L'intercepteur dans api.ts a déjà affiché les logs détaillés en console
                    setError('Impossible de charger les villes. Veuillez réessayer.');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchActiveCities();

        return () => {
            isMounted = false;
        };
    }, []);

    const filteredCities = cities.filter((city) =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
            {/* 1. HEADER : Logo & Titre */}
            <header className="pt-10 pb-6 text-center max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-amber-600 tracking-tight">
                    YallaEnjoy
                </h1>
                <p className="mt-3 text-lg md:text-xl font-medium text-stone-600">
                    Découvrez les meilleures activités et destinations à travers le Maroc
                </p>

                {/* 2. BARRE DE RECHERCHE */}
                <div className="mt-8 relative max-w-xl mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Rechercher une ville..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-stone-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-stone-800 placeholder-stone-400"
                    />
                </div>
            </header>

            {/* 3. SECTION VILLES MAROCAINES */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <h2 className="text-2xl font-bold text-stone-800 mb-6">
                    Villes à explorer
                </h2>
                {loading && (
                    <div className="text-center py-16 text-stone-500 text-lg">
                        Chargement des plus belles villes du Maroc...
                    </div>
                )}
                {error && (
                    <div className="text-center py-16 text-red-500 font-medium bg-red-50 rounded-2xl border border-red-100">
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCities.map((city) => (
                        <div
                            key={city.id}
                            className="group relative h-80 rounded-3xl overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                        >
                            {/* Image de la ville */}
                            <img
                                src={city.imageUrl}
                                alt={city.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Overlay dégradé pour la lisibilité */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Informations dans le cadre */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-2xl font-bold tracking-wide">{city.name}</h3>

                                <div className="flex items-center gap-4 mt-2 text-sm text-stone-200">
                                    <span>{city.activitiesCount || 0} Activités</span>
                                    <span>•</span>
                                    <span>{city.suggestionsCount || 0} Destinations</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. SECTION BANNIÈRE "STAY AT HOME" */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="bg-gradient-to-r from-amber-900 to-stone-900 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Do you want just to stay at home?
                        </h2>
                        <p className="mt-2 text-amber-200/80 text-sm md:text-base">
                            Pas envie de sortir ? Découvrez une sélection d'activités captivantes, de jeux et de suggestions à réaliser directement depuis votre cocon.
                        </p>
                    </div>

                    <a
                        href="/at-home-activities"
                        className="whitespace-nowrap px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-2xl shadow-lg transition-all transform hover:scale-105"
                    >
                        Explorer les activités maison
                    </a>
                </div>
            </section>
        </div>
    );
};