import Api from "./Api.js"

const ui = {

    async RenderizarPetsTela() {
        const ListaDePets = document.getElementById('lista-pets')

        try {
            const pets = await Api.BuscarInfosPet()
            pets.forEach(pets => {
                ListaDePets.innerHTML += `
                <li class="li-pet" data-id="${pets.id}">
                <div class="item-especie">Especie: ${pets.especie}</div>
                <div class="item-nome">Nome: ${pets.nome}</div>
                <div class="item-raca">Raça: ${pets.raca}</div>
                </li>
                `
            })
        } catch {
            alert('erro ao carregar lista de pets 🐶🐱🐭🐰🐍')
        }
    }
}

export default ui;