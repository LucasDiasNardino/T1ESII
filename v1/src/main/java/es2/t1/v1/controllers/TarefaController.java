package es2.t1.v1.controllers;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.Update;
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
@RequestMapping("/tarefa")
/**
 * TODO: Substituir response entity por status code
 * TODO: Adicionar tratamento de erros             
 * 
 */
public class TarefaController {

    @Autowired
    private TarefaRepository tarefaRepository;

    @Autowired
    private AtividadeRepository atividadeRepository;
    
    //Cadastra nova tarefa
    @PostMapping("/cadastrar")
    public ResponseEntity<Tarefa> cadastrar(@RequestBody Tarefa payload){

        
        if (payload.getIdAtividade() == null) {
            return ResponseEntity.badRequest().body(null);
        }
        
        
        Atividade atividade = atividadeRepository.findById(payload.getIdAtividade()).get();

        if(atividade == null){
            return ResponseEntity.badRequest().body(null);
        }
        
        payload.setIdAtividade(atividade.getId());
        tarefaRepository.save(payload);

        atividade.getTarefas().add(payload);
        atividadeRepository.save(atividade);
        
        System.out.println("Tarefa cadastrada: " + payload.getAssunto());
        
        return ResponseEntity.ok(payload);
    }

    //Lista todas tarefa
    @GetMapping("/listar")
    public ResponseEntity<Iterable<Tarefa>> listar(){

        Iterable<Tarefa> tarefas = tarefaRepository.findAll();

        return ResponseEntity.ok(tarefas);
    }

    //Procura tarefa específica
    @GetMapping("/procurar/{id}")
    public ResponseEntity<Tarefa> procurar(@PathVariable String id){

        Tarefa tarefa = tarefaRepository.findById(id).get();

        return ResponseEntity.ok(tarefa);
    }

    //Atualiza tarefa
    @PutMapping("/atualizar/{id}")
    public ResponseEntity<Tarefa> atualizar(@PathVariable String id, @RequestBody Tarefa payload){

        payload.setId(id);

        Tarefa tarefa = tarefaRepository.findById(id).get();

        Atividade atividade = atividadeRepository.findById(tarefa.getIdAtividade()).get();

    
        Tarefa tarefaNaAtividade = atividade.getTarefas().stream().filter(t -> t.getId().equals(tarefa.getId())).findFirst().get();
        int index = atividade.getTarefas().indexOf(tarefaNaAtividade);
        atividade.getTarefas().remove(tarefaNaAtividade);

        Tarefa.update(tarefa, payload);

        atividade.getTarefas().add(index, tarefa);

        atividadeRepository.save(atividade);
        tarefaRepository.save(tarefa);    

        return ResponseEntity.ok(payload);
    }

    //Remove tarefa
    @DeleteMapping("/remover/{id}")
    public ResponseEntity<String> remover(@PathVariable String id){

        
        Tarefa tarefa = tarefaRepository.findById(id).get();

        Atividade atividade = atividadeRepository.findById(tarefa.getIdAtividade()).get();

        Tarefa tarefaNaAtividade = atividade.getTarefas().stream().filter(t -> t.getId().equals(tarefa.getId())).findFirst().get();
        atividade.getTarefas().remove(tarefaNaAtividade);

        atividadeRepository.save(atividade);

        tarefaRepository.deleteById(id);

        return ResponseEntity.ok("Tarefa removida com sucesso!");
    }
}
