<template>
    <article class="ebooking" v-if="eBooked">
        <section>
            <p>Här är eran biljett till 
            {{eBooked.name}}.</p>
        </section>
        <section>
            <p>Tillgång från: 
            {{eBooked.date.from}}
            till 
            {{eBooked.date.to}}.</p>
            <p>Incheckning sker
            {{eBooked.date.checkin}} 
            och ni måste senast ha utcheckat till
            {{eBooked.date.checkout}}</p>   
        </section>
        <section>
            <p>{{eBooked.info}}</p>   
            <p>Observera att erat referens nummer är
            <strong>{{eBooked.code}}</strong></p>
            <p><em>Ha det alltid till hands när ni ska 
            checka in och checka ut</em></p>
        </section>
    </article>
</template>

<script>
export default {
    name : 'bookcabin',
    props : ['eBooked'],
}
</script>