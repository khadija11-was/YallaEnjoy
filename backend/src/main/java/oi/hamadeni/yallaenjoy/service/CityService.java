package oi.hamadeni.yallaenjoy.service;

import lombok.RequiredArgsConstructor;
import oi.hamadeni.yallaenjoy.model.City;
import oi.hamadeni.yallaenjoy.repository.CityRepository;
import org.springframework.stereotype.Service;
import oi.hamadeni.yallaenjoy.dto.CityResponseDto;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CityService {
    private final CityRepository repo;

    public List<CityResponseDto> findActiveCities(){
        List<City> cities = repo.findByActive(true);
        List<CityResponseDto> Response = new ArrayList<>();
        for(City city : cities){
            CityResponseDto dto = new CityResponseDto();
            dto.setId(city.getId()),
            dto.setName(city.getName()),
            dto.setImageUrl(city.getImageUrl()),
            dto.setActivitiesCount(),
            dto.setSuggestionsCount();
            Response.add(dto);
        }
        return Response;
    }
}
