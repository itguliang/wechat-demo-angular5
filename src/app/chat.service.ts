import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Chat } from './chat';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ChatService {

    private CHATAPI= 'api/CHATLIST';  // URL to web api


    addChat (chat: Chat): Observable<Chat> {
	  return this.http.post<Chat>(this.CHATAPI, chat, httpOptions).pipe(
	    tap((chat: Chat) => this.log(`added chat w/ id=${chat.id}`)),
	    catchError(this.handleError<Chat>('addChat'))
	  );
	}


    updateChat (chat: Chat): Observable<any> {
	  return this.http.put(this.CHATAPI, chat, httpOptions).pipe(
	    tap(_ => this.log(`updated chat id=${chat.id}`)),
	    catchError(this.handleError<any>('updateChat'))
	  );
	}

	deleteChat (chat: Chat | number): Observable<Chat> {
	    const id = typeof chat === 'number' ? chat : chat.id;
	    const url = `${this.CHATAPI}/${id}`;
	 
	    return this.http.delete<Chat>(url, httpOptions).pipe(
	      tap(_ => this.log(`deleted chat id=${id}`)),
	      catchError(this.handleError<Chat>('deleteChat'))
	    );
	}

	searchChat(term: string): Observable<Chat[]> {
	  if (!term.trim()) {
	    // if not search term, return empty hero array.
	    return of([]);
	  }
	  return this.http.get<Chat[]>(`api/chatlist/?name=${term}`).pipe(
	    tap(_ => this.log(`found chat matching "${term}"`)),
	    catchError(this.handleError<Chat[]>('searchChat', []))
	  );
	}


	getChatList(): Observable<Chat[]> {
	  return this.http.get<Chat[]>(this.CHATAPI)
	  	.pipe(
	  	  tap(chatlist => this.log(`fetched getChatList`)),
	      catchError(this.handleError('getChatList', []))
	    );
	}

	getChat(id: number): Observable<Chat> {
	  const url = `${this.CHATAPI}/${id}`;
	  return this.http.get<Chat>(url).pipe(
	    tap(_ => this.log(`fetched Chat id=${id}`)),
	    catchError(this.handleError<Chat>(`getChat id=${id}`))
	  );
	}

	private handleError<T> (operation = 'operation', result?: T) {
	    return (error: any): Observable<T> => {
	 
	      // TODO: send the error to remote logging infrastructure
	      console.error(error); // log to console instead
	 
	      // TODO: better job of transforming error for user consumption
	      this.log(`${operation} failed: ${error.message}`);
	 
	      // Let the app keep running by returning an empty result.
	      return of(result as T);
	    };
	 }

	private log(message: string) {
	}



  	constructor(private http: HttpClient) { }

}
