import { Component, OnInit } from '@angular/core';
import {User} from '../model/User'
import {WebListService} from '../service/web-list.service'


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {


  lista: User[];
  constructor(private listaServico: WebListService ) { 

  }

  ngOnInit() {
    this.ObterTodasAsListas()
  }

  public ObterTodasAsListas(){
    this. listaServico.obterListas().subscribe((xuxa:User[])=>{this.lista = xuxa})
  }

}
