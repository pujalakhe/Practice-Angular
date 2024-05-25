import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpInterceptorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  console.log(`Request is on its way to ${req.url}`);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        console.log('An error occured', error.error.message);
        errorMessage = 'An error occured' + error.error.message;
      } else {
        console.error(
          'Backend error occured',
          +error.status + 'Message:' + error.message
        );
        (errorMessage = 'Backend error occured'),
          +error.status + 'Message:' + error.message;
      }
      if (error.status == 404) {
        errorMessage = 'Product Not found';
      } else if (error.status == 401) {
        errorMessage = 'Unauthorized';
      } else {
        errorMessage = 'Error Occured';
      }
      alert(errorMessage);
      return throwError(() => errorMessage);
    })
  );
};
