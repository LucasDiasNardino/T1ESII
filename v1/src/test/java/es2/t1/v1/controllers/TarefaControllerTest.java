package es2.t1.v1.controllers;
import es2.t1.v1.models.Atividade;
import es2.t1.v1.models.Tarefa;
import es2.t1.v1.repository.AtividadeRepository;
import es2.t1.v1.repository.TarefaRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class TarefaControllerTest {

    @InjectMocks
    TarefaController tarefaController;

    @Mock
    TarefaRepository tarefaRepository;

    @Mock
    AtividadeRepository atividadeRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCadastrar() {
        Tarefa payload = new Tarefa();
        payload.setId("1");
        payload.setIdAtividade("1");

        Atividade atividade = new Atividade();
        atividade.setId("1");
        atividade.setTarefas(new ArrayList<Tarefa>());
        atividade.getTarefas().add(payload);

        when(atividadeRepository.findById("1")).thenReturn(Optional.of(atividade));
        when(tarefaRepository.save(any(Tarefa.class))).thenReturn(payload);

        ResponseEntity<Tarefa> response = tarefaController.cadastrar(payload);

        assertTrue(response.getStatusCode().is2xxSuccessful());
        assertEquals("1", response.getBody().getId());
    }

    @Test
    public void testListar() {
        Tarefa tarefa1 = new Tarefa();
        tarefa1.setId("1");

        Tarefa tarefa2 = new Tarefa();
        tarefa2.setId("2");

        List<Tarefa> tarefas = Arrays.asList(tarefa1, tarefa2);

        when(tarefaRepository.findAll()).thenReturn(tarefas);

        ResponseEntity<Iterable<Tarefa>> response = tarefaController.listar();

        assertTrue(response.getStatusCode().is2xxSuccessful());
        assertEquals(tarefas, response.getBody());
    }

    @Test
    public void testProcurar() {
        Tarefa tarefa = new Tarefa();
        tarefa.setId("1");

        when(tarefaRepository.findById("1")).thenReturn(Optional.of(tarefa));

        ResponseEntity<Tarefa> response = tarefaController.procurar("1");

        assertTrue(response.getStatusCode().is2xxSuccessful());
        assertEquals("1", response.getBody().getId());
    }

    @Test
    public void testAtualizar() {
        Tarefa payload = new Tarefa();
        payload.setId("1");
        payload.setIdAtividade("1");

        Tarefa tarefa = new Tarefa();
        tarefa.setId("1");
        tarefa.setIdAtividade("1");

        Atividade atividade = new Atividade();
        atividade.setId("1");
        atividade.setTarefas(new ArrayList<Tarefa>());
        atividade.getTarefas().add(tarefa);

        when(tarefaRepository.findById("1")).thenReturn(Optional.of(tarefa));
        when(atividadeRepository.findById("1")).thenReturn(Optional.of(atividade));
        when(tarefaRepository.save(any(Tarefa.class))).thenReturn(payload);
        when(atividadeRepository.save(any(Atividade.class))).thenReturn(atividade);

        ResponseEntity<Tarefa> response = tarefaController.atualizar("1", payload);

        assertTrue(response.getStatusCode().is2xxSuccessful());
        assertEquals("1", response.getBody().getId());
    }

    @Test
    public void testRemover() {
        Tarefa tarefa = new Tarefa();
        tarefa.setId("1");
        tarefa.setIdAtividade("1");

        Atividade atividade = new Atividade();
        atividade.setId("1");
        atividade.setTarefas(new ArrayList<Tarefa>());
        atividade.getTarefas().add(tarefa);

        when(tarefaRepository.findById("1")).thenReturn(Optional.of(tarefa));
        when(atividadeRepository.findById("1")).thenReturn(Optional.of(atividade));

        ResponseEntity<String> response = tarefaController.remover("1");

        assertTrue(response.getStatusCode().is2xxSuccessful());
        assertEquals("Tarefa removida com sucesso!", response.getBody());

        verify(tarefaRepository, times(1)).deleteById("1");
    }
}