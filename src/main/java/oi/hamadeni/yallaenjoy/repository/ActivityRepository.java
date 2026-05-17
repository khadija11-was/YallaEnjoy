package oi.hamadeni.yallaenjoy.repository;

import oi.hamadeni.yallaenjoy.model.Activity;
import oi.hamadeni.yallaenjoy.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ActivityRepository extends JpaRepository<Activity,Long> {
    public List<Activity> findByCity(Long CityId);
    public List<Activity> findByTag(String tagName);
}
