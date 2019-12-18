import { Component, OnInit } from '@angular/core';
import { WebListService } from '../service/web-list.service';
import { userList } from '../model/userList'
import { User } from '../model/User';

@Component({
  selector: 'app-navibar-conteudo',
  templateUrl: './navibar-conteudo.component.html',
  styleUrls: ['./navibar-conteudo.component.css']
})
export class NavibarConteudoComponent implements OnInit {

  private idBuscar: number;
  private user: userList[];
  private _user: userList = null;
  private lista: boolean;


  constructor(private userBusca: WebListService) { }

  ngOnInit() {
  }

  private pesquisar() {
    this.lista = false;
    this.userBusca.obterListaPorId(this.idBuscar).subscribe((resultado: userList) => {
      this._user = resultado;
      console.log(this._user)
    })
  }
  private pesquisarTodos() {
    this.lista = true;
    this.userBusca.obterUser().subscribe((resultado: userList[]) => {
      this.user = resultado;
      console.log(this.user)
    })
  }
}
