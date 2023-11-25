package es2.t1.v1.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;



import es2.t1.v1.models.Atividade;
import es2.t1.v1.models.Tarefa;
import es2.t1.v1.repository.AtividadeRepository;
import es2.t1.v1.repository.TarefaRepository;


@SpringBootTest
@AutoConfigureMockMvc
public class AtividadeControllerTest {

    @InjectMocks
    AtividadeController atividadeController;

    @Mock
    AtividadeRepository atividadeRepository;

    @Mock
    TarefaRepository tarefaRepository;

    @Captor
    ArgumentCaptor<String> captor;


    @BeforeEach
    public void init(){
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCadastrar() {
        Atividade atividade = new Atividade();
        atividade.setTitulo("Teste");

        when(atividadeRepository.save(any(Atividade.class))).thenReturn(atividade);

        ResponseEntity<Atividade> response = atividadeController.cadastrar(atividade);

        assertTrue(response.getStatusCode().is2xxSuccessful());
        assertEquals("Teste", response.getBody().getTitulo());
    }

    @Test
    void testListar() {

        Atividade atividade1 = new Atividade();
        atividade1.setTitulo("Atividade1");

        Atividade atividade2 = new Atividade();
        atividade2.setTitulo("Atividade2");

        when(atividadeRepository.findAll()).thenReturn(Arrays.asList(atividade1, atividade2));

        ResponseEntity<List<Atividade>> response = atividadeController.listar();

        assertTrue(response.getStatusCode().is2xxSuccessful());

        assertEquals(2, response.getBody().size());

        assertEquals("Atividade1", response.getBody().get(0).getTitulo());
        assertEquals("Atividade2", response.getBody().get(1).getTitulo());

    }

    @Test
    void testProcurar() {
            
        Atividade atividade = new Atividade();
        atividade.setId("1");
        atividade.setTitulo("Atividade1");
    
        when(atividadeRepository.findById(any(String.class))).thenReturn(java.util.Optional.of(atividade));
    
        ResponseEntity<Atividade> response = atividadeController.procurar("1");
    
        assertTrue(response.getStatusCode().is2xxSuccessful());
    
        assertEquals("Atividade1", response.getBody().getTitulo());
    }

    @Test
    void testAtualizar() {

        Atividade atividade = new Atividade();
        atividade.setId("1");
        atividade.setTitulo("Atividade1");

        Atividade payload = new Atividade();
        payload.setId("1");
        payload.setTitulo("Atividade1 Atualizado");

        when(atividadeRepository.findById(any(String.class))).thenReturn(Optional.of(atividade));
        when(atividadeRepository.save(any(Atividade.class))).thenReturn(payload);

        ResponseEntity<Atividade> response = atividadeController.atualizar("1", payload);

        assertTrue(response.getStatusCode().is2xxSuccessful());
        assertEquals("Atividade1 Atualizado", response.getBody().getTitulo());

    }


    @Test
    void testDeletar() {
        Tarefa tarefa1 = new Tarefa();
        tarefa1.setId("1");
        tarefa1.setIdAtividade("1");

        Tarefa tarefa2 = new Tarefa();
        tarefa2.setId("2");
        tarefa2.setIdAtividade("2");

        List<Tarefa> tarefas = Arrays.asList(tarefa1, tarefa2);

        when(tarefaRepository.findAll()).thenReturn(tarefas);

        ResponseEntity<String> response = atividadeController.deletar("1");

        assertTrue(response.getStatusCode().is2xxSuccessful());
        assertEquals("Atividade deletada", response.getBody());

        verify(atividadeRepository, times(1)).deleteById("1");
        verify(tarefaRepository, times(1)).deleteById(captor.capture());

        List<String> allValues = captor.getAllValues();
        assertEquals(1, allValues.size());
        assertEquals("1", allValues.get(0));
    }


}
