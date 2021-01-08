Vue.component('form-component', {
    template: `
<form action="" method="post">
    <h2>¡Inscríbete y reserva tu lugar ahora!</h2>
    
    <label for="first-name">Nombre</label>
    <input type="text" name="first-name" id="first-name">

    <label for="last-name">Apellido</label>
    <input type="text" name="last-name" id="last-name">

    <label for="email">Correo electrónico del trabajo</label>
    <input type="email" name="email" id="email">

    <label for="country">País</label>
    <select name="country" id="country">
        <option value="argentina">Argentina</option>
        <option value="brasil">Brasil</option>
    </select>

    <label for="phone">Número de teléfono</label>
    <input type="tel" name="phone" id="phone">

    <label for="job-position">Puesto de trabajo</label>
    <input type="text" name="job-position" id="job-position">

    <input type="submit" value="Inscríbete">   
</form>
   `,
});