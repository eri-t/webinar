Vue.component('form-component', {
    data: function () {
        return {
            firstName: null,
            lastName: null,
            email: null,
            country: null,
            phone: null,
            jobPosition: null,
            error: false,
            showModal: false
        }
    },
    template: `
<div>

<form method="post" @submit="checkForm">
    <h2>¡Inscríbete y reserva tu lugar ahora!</h2>
    
    <label for="firstName">Nombre</label>
    <input type="text" name="firstName" id="firstName" v-model="firstName">

    <label for="lastName">Apellido</label>
    <input type="text" name="lastName" id="lastName" v-model="lastName">

    <label for="email">Correo electrónico del trabajo</label>
    <input type="email" name="email" id="email"  v-model="email">

    <label for="country">País</label>
    <select name="country" id="country" v-model="country">
        <option value="argentina">Argentina</option>
        <option value="brasil">Brasil</option>
    </select>

    <label for="phone">Número de teléfono</label>
    <input type="tel" name="phone" id="phone"  v-model="phone">

    <label for="jobPosition">Puesto de trabajo</label>
    <input type="text" name="jobPosition" id="jobPosition"  v-model="jobPosition">

    <input type="submit" value="Inscríbete">

    <p v-if="error" class="text-center bold">
    Por favor, complete todos los campos.
    </p> 
</form>

<button id="show-modal" @click="showModal = true">Show Modal</button>

<modal 
    v-if="showModal" 
    @close="showModal = false"
>
</modal>

</div>
   `,
    methods: {
        checkForm: function (e) {
            if (this.firstName && this.lastName && this.email && this.country && this.phone && this.jobPosition) {
                //return true;
                this.saveData();
            } else {
                this.error = true;
            }
            e.preventDefault();
        },
        saveData: function () {
            if (localStorage.attendance) {
                arr = JSON.parse(localStorage.getItem("attendance"));
            } else {
                arr = [];
            };

            newAttendee = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                country: this.country,
                phone: this.phone,
                jobPosition: this.jobPosition
            };

            arr.push(newAttendee);

            // reset values 
            this.firstName = null;
            this.lastName = null;
            this.email = null;
            this.country = null;
            this.phone = null;
            this.jobPosition = null;

            localStorage.setItem("attendance", JSON.stringify(arr));
            this.showModal = true;
        }
    }
});