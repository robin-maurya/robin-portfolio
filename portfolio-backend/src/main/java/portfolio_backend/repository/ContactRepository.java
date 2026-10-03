package portfolio_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import portfolio_backend.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
