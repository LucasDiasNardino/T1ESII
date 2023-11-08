package es2.t1.v1.models;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

import es2.t1.v1.enums.Prioridade;
import es2.t1.v1.repository.TarefaRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document("tarefas")
public class Tarefa{

    @Autowired
    @JsonIgnore
    private TarefaRepository tarefaRepository;
    
    @Id
    private String id;

    private String idAtividade;
    public String assunto;
    public String descricao;
    public Prioridade prioridade;
    public String dataInicio;
    public String dataConclusao;
    public Long duracaoEstimada;
    public Long trabalhoReal;

    public static void update(Tarefa tarefa,Tarefa payload){
        
        if(payload.getAssunto() != null){
            tarefa.setAssunto(payload.getAssunto());
        }

        if(payload.getDescricao() != null){
            tarefa.setDescricao(payload.getDescricao());
        }

        if(payload.getPrioridade() != null){
            tarefa.setPrioridade(payload.getPrioridade());
        }

        if(payload.getDataInicio() != null){
            tarefa.setDataInicio(payload.getDataInicio());
        }

        if(payload.getDataConclusao() != null){
            tarefa.setDataConclusao(payload.getDataConclusao());
        }

        if(payload.getDuracaoEstimada() != null){
            tarefa.setDuracaoEstimada(payload.getDuracaoEstimada());
        }

        if(payload.getTrabalhoReal() != null){
            tarefa.setTrabalhoReal(payload.getTrabalhoReal());
        }
    }
}