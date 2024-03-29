package mk.ukim.finki.wpaud.repository.jpa;

import mk.ukim.finki.wpaud.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    // Alternative
    // @Query(value = "<sql query here>")
    List<Category> findAllByNameLike(String text); // translates to SELECT * FROM Categories WHERE name == text; Like for matching text

    void deleteByName(String name);
}
