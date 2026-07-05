package oi.hamadeni.yallaenjoy.controller;
import lombok.RequiredArgsConstructor;
import oi.hamadeni.yallaenjoy.model.City;
import oi.hamadeni.yallaenjoy.service.CityService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ApiController {
    private final CityService cityService;

    @GetMapping("/cities/active")
    public List<City> GetActiveCities() {
        return cityService.findActiveCities();
    }

}
