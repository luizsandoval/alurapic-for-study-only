export class Alert {
  constructor(
    public readonly _alertType: AlertType, 
    public readonly _message: string) {}
}

export enum AlertType {
  SUCCESS,
  WARNING,
  DANGER,
  INFO
}
