<template>
    <div>
        <movie-card v-for="movie in movies" :key="movie.key" :src="movie.src" :title="movie.title" :text="movie.text"></movie-card>
    </div>
</template>
<script>
import MovieCard from "./MovieCard.vue"
export default {
    components: { MovieCard },
    data() {
        return {
            movies: [
                {
                    "key": 1,
                    "src": "https://static3.diariosur.es/www/multimedia/201907/22/media/cortadas/140180521--624x663.jpg",
                    "title": "vengadores",
                    "text": "Grupo de superheroes"
                },
                {
                    "key":2,
                    "src": "https://phantom-marca.unidadeditorial.es/70cdeb1501a33c2c567dabbebc270ddd/resize/1320/f/jpg/assets/multimedia/imagenes/2021/11/17/16371568440299.jpg",
                    "title": "Harry Potter",
                    "text": "Un niño"
                }
            ]
        }
    }
}
</script>
