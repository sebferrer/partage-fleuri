import { Request, Response } from 'express';
import * as OUTINGS from '../database/outings.json';
import { IOuting } from 'src/models/outing';
import * as fs from 'fs'
import * as path from "path"
import { ISubscription } from 'src/models/subscription';
import moment from 'moment';
import * as ip from 'ip';
import sha256 from 'sha256';

const outings: IOuting[] = (OUTINGS as any).default;

export class OutingsController {

    public getAll(_: Request, response: Response): void {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(outings));
    }

    public create(_: Request, response: Response): void {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({ a: 1 }));
    }

    public getById(request: Request, response: Response): void {
        response.setHeader('Content-Type', 'application/json');
        console.log(request.params.id);
        response.end(JSON.stringify(outings.find(outing => outing.id === request.params.id)));
    }

    public update(_: Request, response: Response): void {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({ a: 1 }));
    }

    public delete(_: Request, response: Response): void {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({ a: 1 }));
    }

    public createAttendee(request: Request, response: Response): void {
        const subscription = request.body as ISubscription;
        subscription.date = moment().utcOffset('+0200').format('YYYY-MM-DDTHH:mm:ss');
        subscription.identity = sha256(ip.address());
        outings.find(outing => outing.id === request.params.outingId).subscriptions.push(subscription)

        var jsonPath = path.join(__dirname, '..', 'database', 'outings.json');
        fs.writeFileSync(jsonPath, JSON.stringify(outings));

        response.end(JSON.stringify(subscription));
    }
}
