var app = new Vue({
	el: "#all",
	data: {
		speakers: [
			{
				name: 'José Pérez',
				jobPosition: 'Presidente',
				img: 'prado',
				lang: 'es'
			},
			{
				name: 'José Pérez',
				jobPosition: 'Customer Service Senior Manager',
				img: 'aurnheimer',
				lang: 'en'
			},
			{
				name: 'José Pérez',
				jobPosition: 'Senior Customer Success Consultant',
				img: 'rodriguez',
				lang: 'en'
			},
			{
				name: 'José Pérez',
				jobPosition: 'Gerente de Consultoría de Soluciones',
				img: 'astudillo',
				lang: 'es'
			},
		],
		social: [
			{
				name: 'twitter',
				n: 0
			},
			{
				name: 'facebook',
				n: 1
			},
			{
				name: 'linkedin',
				n: 2
			},
			{
				name: 'youtube',
				n: 3
			},
			{
				name: 'instagram',
				n: 4
			},
			{
				name: 'nombre',
				n: 5
			},
		],
	},
})
