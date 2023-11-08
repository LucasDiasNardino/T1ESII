package es2.t1.v1.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es2.t1.v1.models.Atividade;
import es2.t1.v1.models.Tarefa;
import es2.t1.v1.repository.AtividadeRepository;
import es2.t1.v1.repository.TarefaRepository;

@RestController
@RequestMapping("/atividade")
/**
 * TODO: Substituir response entity por status code
 * TODO: Adicionar tratamento de erros             
 * 
 */
public class AtividadeController {

    @Autowired
    private AtividadeRepository atividadeRepository;

    @Autowired 
    private TarefaRepository tarefaRepository;
    
    //Cadastra nova atividade
    @PostMapping("/cadastrar")
    public ResponseEntity<Atividade> cadastrar(@RequestBody Atividade atividade) {

        //atividade.setDataInicio(null);

        System.out.println("Atividade cadastrada: " + atividade.getTitulo());

        if(atividade.getTarefas() == null){
            atividade.setTarefas(new ArrayList<Tarefa>()); 
        }

        atividadeRepository.save(atividade);

        return ResponseEntity.ok(atividade);
    }

    //Lista todas atividades
    @GetMapping("/listar")
    public ResponseEntity<List<Atividade>> listar() {

        List<Atividade> atividades = atividadeRepository.findAll();

        return ResponseEntity.ok(atividades);
    }

    //Detalha atividade
    @GetMapping("/procurar/{id}")
    public ResponseEntity<Atividade> procurar(@PathVariable String id) {

        Atividade atividade = atividadeRepository.findById(id).get();

        return ResponseEntity.ok(atividade);
    }

    //Atualiza atividade
    @PutMapping("/atualizar/{id}")
    public ResponseEntity<Atividade> atualizar(@PathVariable String id, @RequestBody Atividade payload) {

        payload.setId(id);

        Atividade atividade = atividadeRepository.findById(id).get();

        Atividade.update(atividade, payload);

        atividadeRepository.save(atividade);

        return ResponseEntity.ok(payload);
    }

    //Deleta atividade e tarefas associadas
    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<String> deletar(@PathVariable String id) {

        atividadeRepository.deleteById(id);

        //deleta tarefas que estavam associadas
        List<Tarefa> tarefas = tarefaRepository.findAll();
        for (Tarefa tarefa : tarefas) {
            if (tarefa.getIdAtividade().equals(id)) {
                tarefaRepository.deleteById(tarefa.getId());
            }
        }

        return ResponseEntity.ok("Atividade deletada");
    }
}
