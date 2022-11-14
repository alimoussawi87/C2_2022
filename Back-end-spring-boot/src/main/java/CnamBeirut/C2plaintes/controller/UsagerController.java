package CnamBeirut.C2plaintes.controller;

import CnamBeirut.C2plaintes.entity.Usager;
import CnamBeirut.C2plaintes.service.UsagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;

@Configuration
@EnableWebMvc
@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"}, allowedHeaders = "*", allowCredentials = "false", exposedHeaders="*")

public class UsagerController {
    @Autowired
    private UsagerService usagerService;

    @RequestMapping(value = "usageri", method = RequestMethod.GET)
    public String usageri(){
        return "On commence...";
    }


    @RequestMapping(value = "createUsager", method = RequestMethod.POST)
    public String createUsager(@RequestBody Usager usager){
        return usagerService.createUsager(usager);
    }

    @RequestMapping(value = "lireUsagers", method = RequestMethod.GET)
    public List<Usager> lireUsagers(){
        return usagerService.lireUsagers();
    }

    @RequestMapping(value = "updateUsager", method = RequestMethod.PUT)
    public String updateUsager(@RequestBody Usager usager){
        return usagerService.updateUsager(usager);
    }

    @CrossOrigin(origins = {"http://localhost:4200", "http://127.0.0.1:8080"}, allowedHeaders = "*", allowCredentials = "false", exposedHeaders="*")
    @DeleteMapping("/deleteUsager/{id}")
    public String deleteUsager(@PathVariable  Integer id){
        return usagerService.deleteUsager(id);
    }



    }

