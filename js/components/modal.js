Vue.component('modal', {
    data: function () {
        return {

        }
    },
    template: `
<transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <button class="modal-default-button"
                @click="$emit('close')"
                aria-label="Cerrar"
            >
                &#x2715
            </button>

            <div>
                <p class="modal-header" lang="pt">Obrigado pelo seu interesse.</p>
                <p class="modal-body" lang="pt">Entraremos em contato com você em breve no e-mail que você preencheu no formulário</p>
            </div>
        </div>
      </div>
    </div>
  </transition>
   `,
});