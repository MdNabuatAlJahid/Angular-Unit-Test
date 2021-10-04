import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

let component: TodoFormComponent;
describe('TodoFormComponent', () => {
  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('Should create a form with two controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });
});
