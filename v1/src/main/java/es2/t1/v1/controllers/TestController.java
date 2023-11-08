package es2.t1.v1.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import es2.t1.v1.repository.AtividadeRepository;
import es2.t1.v1.repository.TarefaRepository;

@RestController
public class TestController {

    @Autowired
    private TarefaRepository tarefaRepository;
    private AtividadeRepository atividadeRepository;
    
    @GetMapping("/test")
    public String test() {
        return "Teste";
    }    

    @DeleteMapping("/test/deleteAllActivities")
    public String deleteAllActivities() {
        atividadeRepository.deleteAll();
        return "Atividades deletadas";
    }

    @DeleteMapping("/test/deleteAllTasks")
    public String deleteAllTasks() {
        tarefaRepository.deleteAll();
        return "Tarefas deletadas";
    }
}
