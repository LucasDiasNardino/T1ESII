package es2.t1.v1.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import es2.t1.v1.models.Atividade;

public interface AtividadeRepository extends MongoRepository<Atividade, String>{
    
}
