<template>
    <main class='content'>
        <h1>Booking Site</h1>

    <date-picker v-model="range" lang="en" range type="date" format="YYYY-MM-dd"
    width="500"></date-picker>

    <button type="button" onclick="alert('Hello world!')">Click Me!</button>
    </main>
</template>

<script>
import axios from 'axios'
import DatePicker from 'vue2-datepicker'

export default {
    name : 'App',
    components: {
       DatePicker
    },
    data() {
    return {
    date: '',
    time: '',
    timePickerOptions:{
    start: '00:00',
    step: '00:30',
    end: '23:30'
    },
    datetime: '',
    range: ''

    }
    }
}
</script>

<style lang="scss">
</style>
