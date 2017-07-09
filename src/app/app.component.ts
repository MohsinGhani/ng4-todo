import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { trigger,style,transition,animate,keyframes,query,stagger,state } from '@angular/animations';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  currentTodo : FormGroup;
  FBtodos: FirebaseListObservable<any>;
  editTodos = {title:'',description:''};
  editMode = false;
  currentTodoKey;
  constructor(private _FormBuilder: FormBuilder,public db: AngularFireDatabase){
    this.currentTodo = _FormBuilder.group({
      // 'fieldname' : [formValue,validation]
      'title' : [null, Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(50)])],
      'description' : [null, Validators.compose([Validators.required,Validators.minLength(15),Validators.maxLength(200)])]
    })
    this.FBtodos = db.list('/todos');
  }

  addTodo(todo){
    this.db.list('/todos').push(todo);
  }

  deleteTodo(i){
    this.FBtodos.forEach((todo) => {
      //console.log(todo[i].$key);
      this.db.database.ref('/todos/' + todo[i].$key).remove();
    });
    
  }

  editTodo(i){
    this.FBtodos.forEach((todo) => {
      //console.log(todo[i].$key);
      this.editTodos.title = todo[i].title;
      this.editTodos.description = todo[i].description;
      this.currentTodoKey = i;
    });
    this.editMode = true; 
  }

  updateTodo(){
    this.FBtodos.forEach((todo) => {
      //console.log(todo[i].$key + this.editTodos.title + this.editTodos.description);
    this.db.database.ref('/todos/' +  todo[this.currentTodoKey].$key).set(this.editTodos);
  });
    this.editMode = false;
  }

  cancel(){
    this.editMode = false;
  }


}
