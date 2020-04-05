import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  public name:string='';

  public welcomeMessageFromService:string;

  constructor(private route:ActivatedRoute, private service:WelcomeDataService) {}

  getWelcomeMessageWithParameters(){

    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log("Se termino de ejecutar getWelcomeMessage");
  
  }


  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfullResponse(response.message),
      error=>this.handleErrorResponse(error)
    );

    console.log("Se termino de ejecutar getWelcomeMessage");
  
  }

  handleSuccessfullResponse(response){
    this.welcomeMessageFromService=response.message;
    //console.log(response.message);
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService=error.error.message;
  }

  ngOnInit(): void {
    this.name=(this.route.snapshot.params['name']);
  
  }

}
