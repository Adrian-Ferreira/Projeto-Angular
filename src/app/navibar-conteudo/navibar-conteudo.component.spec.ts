import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavibarConteudoComponent } from './navibar-conteudo.component';

describe('NavibarConteudoComponent', () => {
  let component: NavibarConteudoComponent;
  let fixture: ComponentFixture<NavibarConteudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavibarConteudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavibarConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
