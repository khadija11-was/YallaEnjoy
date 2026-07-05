package oi.hamadeni.yallaenjoy.repository;


import oi.hamadeni.yallaenjoy.model.Activity;
import oi.hamadeni.yallaenjoy.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
public interface ActivityRepository extends JpaRepository<Activity,Long> {
    @Query(value = "select DISTINCT a.* from activities a join suggestions s on a.id=s.activity_id where s.city_id= :cityId", nativeQuery = true)
    public List<Activity> findByCity(@Param("cityId") Long CityId);
    //public List<Activity> findByTag(String tagName);

}
