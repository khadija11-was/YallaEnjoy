INSERT INTO cities (name, active, latitude, longitude)
VALUES
    ('Tanger', true, 35.7595, -5.8340),
    ('Casablanca', true, 25.7595, -4.8340),
    ('Marrackech', true, 27.7595, -9.8340)

    ON CONFLICT (name) DO NOTHING; -- Évite les erreurs de doublons au redémarrage