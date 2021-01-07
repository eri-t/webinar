Vue.component('logos', {
    data: function () {
        return {
            companies: [
                {
                    title: 'Cluster Financiero',
                    img: 'Bitmap.png'
                },
                {
                    title: 'Asobanca',
                    img: 'asobanca.png'
                },
                {
                    title: 'IPBF',
                    img: 'Captura de Pantalla 2020-12-09 a la(s) 01.25.30 p. m..jpg'
                },
                {
                    title: 'HighTelecom',
                    img: 'logo_hightelecom_horizontal.png'
                },
                {
                    title: 'Ebanx',
                    img: 'ebanx2_1.png'
                },
                {
                    title: 'Zendesk',
                    img: 'logo-h.jpg'
                },
            ]
        }
    },
    template: `
<ul class="logos">
  <li v-for="item in companies" v-bind:style="{ backgroundImage: 'url(img/companies/' + item.img + ')' }">
    {{ item.title }}
  </li>
</ul>
   `,
});