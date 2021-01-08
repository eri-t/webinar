Vue.component('social', {
    props: ['name', 'position'],
    template: `
        <a :id="name"
            :href="'https://www.' + name + '.com'"
            target="_blank"
            :style="'background-position-x: -' + position * 51 + 'px' "
        > 
            {{ name }} 
        </a>
   `,
});