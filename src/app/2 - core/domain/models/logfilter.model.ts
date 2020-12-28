export class LogFilterModel {
    ip: string | null = null;
    hour: number | null = null;
    userAgent: string | null = null;
    order: string | null = null;
    direction: string = 'asc';
}