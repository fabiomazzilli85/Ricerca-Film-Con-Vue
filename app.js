const { createApp } = Vue;

createApp({
  data() {
    return {
      films: [
        { titolo: 'Nuovo cinema Paradiso', regia: 'Giuseppe Tornatore', anno: 1988, paese: 'Italia - Francia', valutazione: 7.5 },
        { titolo: 'Y tu mama tambien', regia: 'Alfonso Cuaron', anno: 2001, paese: 'Messico', valutazione: 7 },
        { titolo: 'Quei bravi ragazzi', regia: 'Martin Scorsese', anno: 1990, paese: 'USA', valutazione: 9 },
        { titolo: 'Casinò', regia: 'Martin Scorsese', anno: 1995, paese: 'USA', valutazione: 9 },
        { titolo: 'C\'era una volta in America', regia: 'Sergio Leone', anno: 1984, paese: 'USA', valutazione: 9.5 },
        { titolo: 'Accattone', regia: 'Pier Paolo Pasolini', anno: 1961, paese: 'Italia', valutazione: 4 },
        { titolo: 'Palombella Rossa', regia: 'Nanni Moretti', anno: 1984, paese: 'Italia', valutazione: 3 },
        { titolo: 'Bronx', regia: 'Robert De Niro', anno: 1993, paese: 'USA', valutazione: 5.5 },
        { titolo: 'Il nome della rosa', regia: 'Jean-Jacques Annaud', anno: 1986, paese: 'USA', valutazione: 7.5 },
        { titolo: 'Lei suona il piano, lui la tromba', regia: '', anno: 1969, paese: 'USA', valutazione: 10 }
        
      ],

      // Questo è un Array di Oggetti.

      searchQuery: '', //Collegato al v-model nell'HTML. La stringa di partenza è inizialmente vuota ma cambia quando l'utente cerca un film. 
      filmTrovato: null
    };
  },
  watch: {
    searchQuery(newVal, oldVal) {
      this.searchFilm(newVal);
    }
  },
// Questo pezzo di codice si assicura che ogni volta che l'utente modifica il valore dell'input di ricerca (searchQuery), viene chiamata la funzione searchFilm per cercare il film corrispondente.

  methods: {
    searchFilm(query) {
      this.filmTrovato = null;
      if (query.trim() === '') return; // Se l'utente inserisce stringa vuota, la funziona esce 
      const lowerCaseQuery = query.toLowerCase();
      for (let film of this.films) {
        if (film.titolo.toLowerCase() === lowerCaseQuery) {
          this.filmTrovato = film;
          return;
        }
      }
    }
  }
}).mount('#app');
