import {Component} from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
		<div>
			<h1>Upcoming Angular 2 Events</h1>
			<hr />
			<event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
		</div>`
})

export class EventsListComponent {
    event1 = {
        name: 'ngConf 2025',
        date: '3/1/2025',
        time: '8am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}
    }

}