<template>
    <article>
        <section>
            <p>Här är eran biljett till 
            {{eBooked.name}}.</p>
        </section>
        <section>
            <p>Tillgång från: 
            {{eBooked.date.from}}
            till 
            {{eBooked.date.to}}.</p>
        </section>
        <section>
            <p>{{eBooked.info}}</p>   
            <p>Observera att erat referens nummer är
            <strong>{{code}}</strong></p>
            <p><em>Ha det alltid till hands när ni ska 
            checka in och checka ut</em></p>
        </section>
    </article>
</template>

<script>
export default {
    name : 'bookcabin',
    props : ['eBooked'],
    data () {
        return {
            id : ''
        }
    }    
}
</script>