import { Express } from 'express';
import { OutingsController } from '../controllers';

export function outingsRoute(app: Express): void {
	const controller = new OutingsController();

	app.route('/api/outings')
		.get((request, result) => {
			controller.getAll(request, result);
		})
		.post((request, result) => {
			controller.create(request, result);
		});

	app.route('/api/outings/:id')
		.get((request, result) => {
			controller.getById(request, result);
		})
		.put((request, result) => {
			controller.update(request, result);
		})
		.delete((request, result) => {
			controller.delete(request, result);
		});

	app.route('/api/attendees/:outingId')
		.post((request, result) => {
			controller.createAttendee(request, result);
		});
}
