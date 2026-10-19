package oi.hamadeni.yallaenjoy.model;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="cities")
public class City {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    @Column(unique=true, nullable=false)
    private String name;
    @Column(nullable=false)
    private double latitude;
    @Column(nullable=false)
    private double longitude;
    private boolean active = true;
    @Column(nullable=true) //á changer en prod
    private String imageUrl;



}
