import { Express } from 'express';
import { AttendeesController } from '../controllers';

export function attendeesRoute(app: Express): void {
    const controller = new AttendeesController();

    app.route('/api/attendees')

        app.route('/api/attendees')
		.get((request, result) => {
			controller.getAll(request, result);
		})
		.post((request, result) => {
			controller.create(request, result);
		});

	app.route('/api/attendees/:attendee')
		.get((request, result) => {
			controller.getById(request, result);
		})
		.put((request, result) => {
			controller.update(request, result);
		})
		.delete((request, result) => {
			controller.delete(request, result);
		});
}
