<template>
    <article>
        <section>
            <h1>{{eBooking.cabin.name}}</h1>
        </section>
        <section>
            <p>{{eBooking.cabin.date}}</p>
            <p>{{eBooking.cabin.info}}</p>
        </section>
        <section>

        </section>
    </article>
</template>

<script>
export default {
    name : 'bookcabin',
    props : ['eBooking']
}
</script>