package oi.hamadeni.yallaenjoy.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CityResponseDto {
    private Long id;
    private String name;
    private String imageUrl;
    private long activitiesCount;
    private long suggestionsCount;

}