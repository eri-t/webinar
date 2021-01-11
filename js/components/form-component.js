Vue.component('form-component', {
    data: function () {
        return {
            form_fields: [
                {
                    id: 'firstName',
                    label: 'Nombre',
                    type: 'text',
                    model: ''
                },
                {
                    id: 'lastName',
                    label: 'Apellido',
                    type: 'text',
                    model: ''
                },
                {
                    id: 'email',
                    label: 'Correo electrónico del trabajo',
                    type: 'email',
                    model: ''
                },
                {
                    id: 'phone',
                    label: 'Número de teléfono',
                    type: 'tel',
                    model: ''
                },
                {
                    id: 'jobPosition',
                    label: 'Puesto de trabajo',
                    type: 'text',
                    model: ''
                },
            ],
            country: 'argentina',
            showModal: false
        }
    },
    template: `
<div>

<form method="post" @submit="save">
    <h2>¡Inscríbete y reserva tu lugar ahora!</h2>

    <ul>
        <li v-for="(item, index) in form_fields" v-if="index < 3">
            <label :for="item.id"> {{ item.label }} </label>
            <input 
                :type="item.type" 
                :name="item.id" 
                :id="item.id"  
                v-model="item.model"
                required
            >
        </li>

        <li>
            <label for="country">País</label>
            <select name="country" id="country" v-model="country" required>
                <option value="argentina">Argentina</option>
                <option value="brasil">Brasil</option>
            </select>
        </li>

        <li v-for="(item, index) in form_fields" v-if="index > 2">
            <label :for="item.id"> {{ item.label }} </label>
            <input 
                :type="item.type" 
                :name="item.id" 
                :id="item.id"  
                v-model="item.model"
                required
            >
        </li>
    </ul>

    <input type="submit" value="Inscríbete">

</form>

<modal 
    v-if="showModal" 
    @close="showModal = false"
>
</modal>

</div>
   `,
    methods: {
        saveLocal: function (e) {
            if (localStorage.attendance) {
                arr = JSON.parse(localStorage.getItem("attendance"));
            } else {
                arr = [];
            };

            // check if the email is already saved:
            var found = false;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].email == this.form_fields[2].model) {
                    found = true;
                    break;
                }
            }

            // save the data only if the email isn't already saved:
            if (found == false) {
                newAttendee = {
                    firstName: this.form_fields[0].model,
                    lastName: this.form_fields[1].model,
                    email: this.form_fields[2].model,
                    country: this.country,
                    phone: this.form_fields[3].model,
                    jobPosition: this.form_fields[4].model
                };
                arr.push(newAttendee);
            }

            localStorage.setItem("attendance", JSON.stringify(arr));
            this.showModal = true;
            e.preventDefault();
        },
        saveDataBase: function (e) {
            e.preventDefault();
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: this.form_fields[0].model,
                    lastName: this.form_fields[1].model,
                    email: this.form_fields[2].model,
                    country: this.country,
                    phone: this.form_fields[3].model,
                    jobPosition: this.form_fields[4].model
                })
            };
            fetch("db/save.php", requestOptions)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(function (err) {
                    console.log(err)
                })
        },
        save: function (e) {
            this.saveLocal(e);
            this.saveDataBase(e);

            // reset values 
            this.form_fields[0].model = '';
            this.form_fields[1].model = '';
            this.form_fields[2].model = '';
            this.country = 'argentina';
            this.form_fields[3].model = '';
            this.form_fields[4].model = '';
        }
    }
});