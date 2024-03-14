export type MoviesAndSeries = {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
};

export const moviesAndSeries: MoviesAndSeries[] = [
  {
    id: 1,
    name: 'The Sopranos',
    creator: 'David Chase',
    year: 1999,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    watched: true,
    score: 5,
    emmies: 21,
  },
  {
    id: 2,
    name: 'Game of Thrones',
    creator: 'David Benioff D. B. Weiss',
    year: 2011,
    poster:
      'https://t1.pixers.pics/img-1fb6f67c/posters-game-of-thrones.jpg?H4sIAAAAAAAAA3VOW27EIAy8DpGS2BAIkBvs394gIjy2afNAQNtVT1_Sqp-VZXs80ngG3o9sggfrj-IT7Ktzm4ewbvXKU_J5_fJkUGOLzVTZjSBWdH74ZNMZSUcH1VLRCsbaUYpm-jRVuJv0Rl5KiXkCyEMf12f9VpfNYPcMDKkEVCC00lpYzh1aN8cuF3M4k1zH8TliH49Hi1c1f0EkYiuvACWtO6mJzupVyGt8NPCP3y-GqoL7DSgCsp-JwNnFzvcbRWS1kbNZuEELHox0izdBeoUYLBVej9qZEMIsFmmWRY7Kec_n_hu83S9APwEAAA==',
    watched: false,
    score: 0,
    emmies: 164,
  },
  {
    id: 3,
    name: 'Mad Men',
    creator: 'Matthew Weiner',
    year: 2007,
    poster:
      'https://www.google.com/imgres?q=mad%20men%20image%20jpg&imgurl=https%3A%2F%2Fes.web.img3.acsta.net%2Fpictures%2F21%2F02%2F10%2F20%2F02%2F0834301.jpg&imgrefurl=https%3A%2F%2Fwww.sensacine.com%2Fseries%2Fserie-3400%2Ffoto-detalle%2F%3Fcmediafile%3D21800876&docid=8CdR11v6DQn2AM&tbnid=fabQj9tjJtJRmM&vet=12ahUKEwifnpO6wfSEAxW3gf0HHUUiCnYQM3oECGMQAA..i&w=2000&h=3000&hcb=2&ved=2ahUKEwifnpO6wfSEAxW3gf0HHUUiCnYQM3oECGMQAA',
    watched: true,
    score: 5,
    emmies: 116,
  },
  {
    id: 4,
    name: '6 feet under',
    creator: 'Alan Ball',
    year: 2001,
    poster: 'https://www.cine.com/media/series/2711.jpg',
    watched: true,
    score: 5,
    emmies: 53,
  },
  {
    id: 5,
    name: 'Atypical',
    creator: 'Robia Rashid',
    year: 2017,
    poster:
      'https://www.google.com/imgres?q=Atypical%20image%20jpg&imgurl=https%3A%2F%2Fkids.jotdown.es%2Fwp-content%2Fuploads%2F2022%2F03%2Fimg107.jpg&imgrefurl=https%3A%2F%2Fkids.jotdown.es%2F2022%2F03%2F30%2Fatypical%2F&docid=W1aYcIUri-PM7M&tbnid=7iB7BZ-lPQY2hM&vet=12ahUKEwjIosb5wfSEAxUCaqQEHZu2BnQQM3oECFwQAA..i&w=1500&h=1035&hcb=2&ved=2ahUKEwjIosb5wfSEAxUCaqQEHZu2BnQQM3oECFwQAA',
    watched: false,
    score: 0,
    emmies: 0,
  },
];
