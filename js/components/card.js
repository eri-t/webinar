Vue.component('card', {
    props: ['name', 'title', 'img'],
    template: `
    <div>

        <figure>
            <img 
                :src="'img/speakers/img-' + img + '.png'" 
                :alt="'Fotografía de ' + name "
            >
        </figure>

        <h3> {{ name }} </h3>
        <p> {{ title }} </p>

    </div>
   `,
});