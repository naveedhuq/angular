import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    /*
    <h2>{{ title }}</h2>
        <img [src]="imageUrl" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        
        <button class="btn btn-primary" [class.active]="isActive">Save</button>

        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>

        <div (click)="onDivClick()">
            <button (click)="onSave($event)">Save</button>
        </div>

        <input #email (keyup.enter)="onKeyUp(email.value)" />


        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

        <p>
            {{ course.title | uppercase }} <br/>
            {{ course.students | number }} <br/>
            {{ course.rating | number:'1.2-2' }} <br/>
            {{ course.price | currency:'EUR':true:'3.2-2' }} <br/>
            {{ course.releaseDate | date:'MM/dd/yyyy' }} <br/>
        </p>


    */
    selector: 'courses',  // <courses>
    template: `

        {{ text | summary:20 }}
        `
})
export class CoursesComponent {
    // title = "List of Courses";
    // imageUrl = "https://picsum.photos/600/400/?random";
    // colSpan = 2;
    // courses;

    // constructor(service: CoursesService) {
    //     this.courses = service.getCourses();
    // }

    // isActive = false;

    // onSave($event) {
    //     $event.stopPropagation();
    //     console.log('Button was clicked!', $event);
    // }

    // onDivClick() {
    //     console.log('Div was clicked!');
    // }

    // onKeyUp(email) {
    //     //console.log($event.target.value);
    //     console.log(email);
    // }

    course = {
        title: "A new Angular Course",
        rating: 4.4325,
        students: 234324,
        price: 99.99,
        releaseDate: new Date(2016,2,3)
    }

    email = "test@email.com";

    text = `
    Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
    `

    onKeyUp() {
        console.log(this.email);
    }


}