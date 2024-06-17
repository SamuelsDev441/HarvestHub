import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public user?: string;
  public password?: string;
  public phone?: string;
}
