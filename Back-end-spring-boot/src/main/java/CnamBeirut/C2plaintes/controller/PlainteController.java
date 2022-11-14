package CnamBeirut.C2plaintes.controller;

import CnamBeirut.C2plaintes.entity.Plainte;
import CnamBeirut.C2plaintes.service.PlainteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PlainteController {

    @Autowired
    private PlainteService plainteService;

    @RequestMapping(value = "detailler", method = RequestMethod.GET)
    public String detailler(){
        return "On commence...";
    }

    @RequestMapping(value = "createPlainte", method = RequestMethod.POST)
    public String createPlainte(@RequestBody Plainte plainte){
        return plainteService.createPlainte(plainte);
    }

    @RequestMapping(value = "lirePlaintes", method = RequestMethod.GET)
    public List<Plainte> lirePlaintes(){
        return plainteService.lirePlaintes();
    }

    @RequestMapping(value = "updatePlainte", method = RequestMethod.PUT)
    public String updatePlainte(@RequestBody Plainte plainte){
        return plainteService.updatePlainte(plainte);
    }

    @CrossOrigin(origins = {"http://localhost:4200", "http://127.0.0.1:8080"}, allowedHeaders = "*", allowCredentials = "false", exposedHeaders="*")
    @DeleteMapping("/deletePlainte/{id}")
    public String deletePlainte(@PathVariable  Integer id) {
        return plainteService.deletePlainte(id);
    }
}
