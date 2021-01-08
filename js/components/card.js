Vue.component('card', {
    props: ['name', 'title', 'img', 'lang'],
    template: `
    <div class="card">

        <figure>
            <img 
                :src="'img/speakers/img-' + img + '.png'" 
                :alt="'Fotografía de ' + name "
            />
        </figure>

        <div>
            <h3> {{ name }} </h3>
            <p :lang="lang"> {{ title }} </p>
        </div>

    </div>
   `,
});