<template>
    <article class="ebooking">
        <section>
            <p>Här är eran biljett till 
                {{eBooked.cabin.name}}.</p>
        </section>
        <section>
            <p>Tillgång från: 
                {{eBooked.cabin.date.from}}
                 till 
                 {{eBooked.cabin.date.to}}.</p>
            <p>Incheckning sker
                {{eBooked.cabin.date.checkin}} 
                och ni måste senast ha utcheckat till
                {{eBooked.cabin.date.checkout}}</p>   
        </section>
        <section>
            <p>{{eBooked.cabin.info}}</p>   
            <p>Observera att erat referens nummer är
            <strong>{{eBooked.code}}</strong></p><p><em>
            Ha det alltid till hands när ni ska 
            checka in och checka ut</em></p>

        </section>
    </article>
</template>

<script>
export default {
    name : 'bookcabin',
    props : ['eBooked']
}
</script>