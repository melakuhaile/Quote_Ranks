import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote Ranks';

  quotes = [
    {quote: 'work hard', author: 'Melaku', rating: 1},
    {'quote': 'do it right', 'author': 'Sami', 'rating': 4},
    {'quote': 'do the right way', 'author': 'Mike', 'rating': 2}
  ]

  quote={
    quote: '',
    author: '',
    rating: 0
  }

  increaseRating(index) {
    this.quotes[index].rating ++
  }

  decreaseRating(index) {
    this.quotes[index].rating--
  }

  delete(index){
    this.quotes.splice(index, 1)
  }

  formSubmit(){
    this.quotes.push(this.quote)
    this.quote = {
      quote: '',
      author: '',
      rating: 0
    }
  }
}