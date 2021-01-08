Vue.component('logos', {
    data: function () {
        return {
            companies: [
                {
                    title: 'Cluster Financiero',
                    img: 'Bitmap.png',
                    width: '89'
                },
                {
                    title: 'Asobanca',
                    img: 'asobanca.png',
                    width: '83'
                },
                {
                    title: 'IPBF',
                    img: 'CapturadePantalla20201209-012530pm.jpg',
                    width: '69'
                },
                {
                    title: 'HighTelecom',
                    img: 'logo_hightelecom_horizontal.png',
                    width: '137'
                },
                {
                    title: 'Ebanx',
                    img: 'ebanx2_1.png',
                    width: '69'
                },
                {
                    title: 'Zendesk',
                    img: 'logo-h.jpg',
                    width: '78'
                },
            ]
        }
    },
    template: `
<ul class="logos">
  <li v-for="item in companies" :style="{ backgroundImage: 'url(img/companies/' + item.img + ')', width:item.width + 'px' }">
    {{ item.title }}
  </li>
</ul>
   `,
});