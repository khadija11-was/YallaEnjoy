package oi.hamadeni.yallaenjoy.service;

import lombok.RequiredArgsConstructor;
import oi.hamadeni.yallaenjoy.model.City;
import oi.hamadeni.yallaenjoy.repository.CityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CityService {
    private final CityRepository repo;

    public List<City> findActiveCities(){
        List<City> cities = repo.findByActive(true);
        return cities;
    }
}
