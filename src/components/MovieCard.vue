<template>
    <div>
        <img :src="src">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
    </div>
</template>
<script>
export default {
    props: ['src', 'title', 'text']
}
</script>