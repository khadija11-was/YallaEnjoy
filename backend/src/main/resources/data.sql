INSERT INTO cities (name, active, latitude, longitude)
VALUES
    ('Tanger', true, 35.7595, -5.8340, https://images.unsplash.com/photo-1671518283785-2e43588774b7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D),
    ('Casablanca', true, 25.7595, -4.8340, https://plus.unsplash.com/premium_photo-1697729724546-d3862b6fd294?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D),
    ('Marrackech', true, 27.7595, -9.8340, https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=924&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D)

    ON CONFLICT (name) DO NOTHING; -- Évite les erreurs de doublons au redémarrage