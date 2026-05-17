package oi.hamadeni.yallaenjoy.repository;

import oi.hamadeni.yallaenjoy.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CityRepository extends JpaRepository<City, Long> {
    public List<City> findByActive();
    //public List<City> findByTag(String tag);

}
