export interface AlertInterface {
    message:string;
    show:boolean;
    type?:'success'|'danger'|'warning'|'primary';
}
