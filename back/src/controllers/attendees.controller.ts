import { Request, Response } from 'express';

export class AttendeesController {

    public getAll(_: Request, response: Response): void {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({ a: 1 }));
    }

    public create(_: Request, response: Response): void {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({ a: 1 }));
    }

    public getById(_: Request, response: Response): void {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({ a: 1 }));
    }

    public update(_: Request, response: Response): void {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({ a: 1 }));
    }

    public delete(_: Request, response: Response): void {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({ a: 1 }));
    }

}
