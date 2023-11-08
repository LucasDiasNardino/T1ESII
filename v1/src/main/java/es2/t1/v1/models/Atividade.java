package es2.t1.v1.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document("atividades")
public class Atividade {

    @Id
    public String id;

    public String titulo;
    private Boolean completo;
    public List<Tarefa> tarefas;
    private String dataInicio;
    private String dataConclusao;

    public static void update(Atividade atividade, Atividade payload){
            
            if(payload.getTitulo() != null){
                atividade.setTitulo(payload.getTitulo());
            }
    
            if(payload.getDataInicio() != null){
                atividade.setDataInicio(payload.getDataInicio());
            }
    
            if(payload.getDataConclusao() != null){
                atividade.setDataConclusao(payload.getDataConclusao());
            }

            if(payload.getCompleto() != null){
                atividade.setCompleto(payload.getCompleto());
            }
    }
}
