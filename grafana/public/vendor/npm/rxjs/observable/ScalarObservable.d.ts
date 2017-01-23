import { Scheduler } from '../Scheduler';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
import { TeardownLogic } from '../Subscription';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
export declare class ScalarObservable<T> extends Observable<T> {
    value: T;
    private scheduler;
    static create<T>(value: T, scheduler?: Scheduler): ScalarObservable<T>;
    static dispatch(state: any): void;
    _isScalar: boolean;
    constructor(value: T, scheduler?: Scheduler);
    protected _subscribe(subscriber: Subscriber<T>): TeardownLogic;
}
