const Api = {
    async BuscarInfosPet() {
        
        try {
            const RespostaDaApi = await fetch('http://localhost:3000/pets');
            return await RespostaDaApi.json()
        }
        catch {
            alert('não foi possivel acessa as informações dos pets')
            throw Error
        }
    }
}

export default Api;