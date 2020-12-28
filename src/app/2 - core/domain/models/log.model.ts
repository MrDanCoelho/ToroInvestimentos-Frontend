export class LogModel {
    id!: number;
    ip!: string;
    app!: string;
    user!: string;
    date!: Date;
    requestType!: string;
    requestUrl!: string;
    requestProtocol!: string;
    statusCode!: number;
    contentSize!: number | null;
    responseUrl!: string | null;
    userAgent!: string | null;
}